# User Register Login Profile (Node.js + TypeScript)

A complete backend authentication system built using **Node.js**, **TypeScript**, **Express**, and **MongoDB**.  
This project includes user registration, login, JWT-based authentication, forgot password, and reset password functionality with email support (Mailtrap for development).

---

## 🚀 Features

- User Registration
- User Login with JWT Authentication
- Protected Routes using Middleware
- Forgot Password (Email-based Reset Link)
- Reset Password with Token & Expiry
- Secure Password Hashing
- Clean & Scalable Folder Structure
- Environment-based Configuration
- Mailtrap Integration for Email Testing

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Language:** TypeScript
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Password Security:** bcrypt
- **Email Service:** Nodemailer + Mailtrap
- **Version Control:** Git & GitHub

---

## 📁 Folder Structure
```text
src/
 ├── config/          # Database, env, mail configuration
 ├── controllers/     # Request & response handling
 ├── interfaces/      # TypeScript interfaces
 ├── middlewares/     # Auth middleware
 ├── models/          # Mongoose models
 ├── routes/          # API routes
 ├── services/        # Business logic
 ├── utils/           # Helper functions
 ├── app.ts           # Express app setup
 └── server.ts        # Server entry point

```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory using the following template:



PORT=1111
MONGO_URL=mongodb://127.0.0.1:27017/user_auth_db
JWT_SECRET=your_jwt_secret

MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=your_mailtrap_username
MAIL_PASS=your_mailtrap_password


> ⚠️ Note: The `.env` file is ignored in GitHub for security reasons.  
Use `.env.example` as reference.

---

## 📦 Installation & Setup

1. Clone the repository

git clone https://github.com/NainPrajapati/User-Register-Login-Profile.git
cd User-Register-Login-Profile


Install dependencies
```
npm install
```
This will install all required dependencies defined in package.json, including:

express

mongoose

jsonwebtoken

bcrypt

nodemailer

dotenv

typescript

ts-node-dev

Create .env file using .env.example

Start the development server
```
npm run dev
```

Server will start at:
```
http://localhost:1111
```

---

## 📚 Key Dependencies

- **express** – Web framework
- **mongoose** – MongoDB ODM
- **jsonwebtoken** – JWT authentication
- **bcrypt** – Password hashing
- **nodemailer** – Email handling
- **dotenv** – Environment variable management
- **typescript** – Type safety
- **ts-node-dev** – Development server with auto-reload

🔐 API Endpoints
Register User
POST /api/auth/register

Login User
POST /api/auth/login

Forgot Password
POST /api/auth/forgot-password

Reset Password
POST /api/auth/reset-password

🧪 Email Testing (Mailtrap)

Emails are captured using Mailtrap Email Testing

No real emails are sent

Reset password links appear inside Mailtrap inbox

🧠 Learning Outcomes

Implemented secure authentication flow

Learned JWT-based authorization

Understood password reset mechanisms

Used Mailtrap for safe email testing

Followed clean backend architecture

📌 Author

Nain Prajapati
Backend Intern | Node.js | TypeScript

📄 License

This project is for learning and internship purposes.
