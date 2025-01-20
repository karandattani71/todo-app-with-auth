# Project Title

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Technology Stack](#technology-stack)
- [API Usage](#api-usage)
- [Smart Contract](#smart-contract)

## Setup Instructions

### Prerequisites
- Node.js (version 14.x or higher)
- npm (version 6.x or higher)
- MongoDB (if applicable)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/karandattani71/todo-app-with-auth.git
   cd your-repo
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `backend` directory and add the necessary environment variables. Example:
     ```
     MONGODB_URI=mongodb://localhost:27017/yourdbname
     JWT_SECRET=your_jwt_secret
     ```

5. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

6. Start the frontend application:
   ```bash
   cd frontend
   npm start
   ```

## Technology Stack
- **Frontend:** React, Redux, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Smart Contracts:** Solidity, Truffle (or Hardhat)

## API Usage
### Authentication
- **Login**
  - **Endpoint:** `POST /api/auth/login`
  - **Request Body:**
    ```json
    {
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```

- **Register**
  - **Endpoint:** `POST /api/auth/register`
  - **Request Body:**
    ```json
    {
      "name": "Your Name",
      "email": "user@example.com",
      "password": "yourpassword"
    }
    ```

### Todos
- **Get Todos**
  - **Endpoint:** `GET /api/todos`
  
- **Add Todo**
  - **Endpoint:** `POST /api/todos`
  - **Request Body:**
    ```json
    {
      "title": "New Todo",
      "completed": false
    }
    ```

## Smart Contract
- **Deployed Smart Contract Address:** `0xYourSmartContractAddress`
- **ABI File:** [Link to ABI file](path/to/your/abi.json)
