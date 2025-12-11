# JWT Auth API (Express + MongoDB)

A simple and clean authentication API using Express, MongoDB, Mongoose, and JWT with a modular file structure.

Features

Login & Logout

JWT authentication

Protected routes

MongoDB connection (Mongoose)

ES Modules (import/export)

# Project Structure

src/
  config/connectDB.js
  models/User.model.js
  controllers/auth.controller.js
  middleware/auth.middleware.js
  routes/auth.routes.js
  utils/jwt.js
  app.js
server.js
.env


# Setup

npm install

# Create .env:

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret
PORT=3000

Run
npm start

# Endpoints

POST /auth/login

Body:

{ "email": "test@test.com", "password": "123456" }

POST /auth/logout
GET /auth/profile (Protected)

Header:

Authorization: Bearer <token>

Done! Ready to use in any project
