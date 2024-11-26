//1. Check username and password in /login
//2. If pw and username exist --> create new JWT
//3. Send JWT to FE

const jwt = require("jsonwebtoken");
const {BadRequestError} = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  //Just for demo, normally provided by db
  const id = new Date().getDate();

  //try to keep payload small for better user exp.
  //in production use long complex and unguessable string values!!!
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello,${req.user.username}`,
    secret: `Her is your authorized data ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
