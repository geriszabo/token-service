# Token Service

This is a Node.js-based microservice designed to handle token-related operations efficiently. It provides endpoints for generating, validating, and managing tokens securely.

## Features

- Generate JWT (JSON Web Tokens)
- Validate JWT tokens
- Manage token expiration
- Implement rate limiting to prevent abuse
- Support for multiple environments (development, staging, production)

## Installation

To install and run this service, follow these steps:

1. Clone the repository:
   git clone https://github.com/geriszabo/token-service.git cd token-service

2. Install dependencies:
   npm install

3. Set up environment variables:

   - Create a `.env` file in the root directory
   - Add your desired configurations (e.g., database connection strings, secret keys)

4. Start the server:
   npm start

## Usage

### Generating a Token

Send a POST request to `/api/v1/login` with required parameters:

json { "username": "example_user", "password": "secret_password" }

Response:
json {"msg": "user created", "token": "eyJhbGciOiJIUzI1NiIsInXVCJ9..." }
