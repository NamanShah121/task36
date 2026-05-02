# Task36
This is a simple MERN project.
It has 2 folders:
frontend for React
backend for Express and MongoDB

# What it does
add user
add post
show all posts
## Requirement
Node.js
MongoDB running on local system
# Backend .env file
Create a .env file inside backend folder and add:
.env
MONGO_URI=mongodb://127.0.0.1:27017/task36db
PORT=5000

# Install
For backend:
cd backend
npm install

For frontend:
cd frontend
npm install

# Run project
Open 2 terminals.

Run backend:
cd backend
npm run dev

Run frontend:
cd frontend
npm.cmd start

# API routes
POST /api/users
POST /api/posts
GET /api/posts