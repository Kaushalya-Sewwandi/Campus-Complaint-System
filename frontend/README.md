# 🎓 Campus Complaint System

## 📌 Project Title
Campus Complaint System (MERN Stack Web Application)

## ❗ Problem Description
In many educational institutions, students face difficulties in reporting and tracking complaints related to academic, infrastructure, or facility issues. Traditional methods such as manual reporting are inefficient, slow, and lack proper tracking mechanisms.

## 💡 Proposed Solution
The Campus Complaint System is a web-based application designed to digitize the complaint management process. It allows students to submit complaints online and enables administrators to manage and resolve them efficiently with real-time status tracking. This improves transparency, communication, and response time within the campus environment.

## ✨ Features

### Student Module
- Register and login
- Submit complaints
- View complaint status
- Track updates

### Admin Module
- Secure login
- View all complaints
- Update complaint status (Pending / In Progress / Resolved)
- Manage complaint records

## 🛠️ Technologies Used

Frontend:
- React.js
- React Router DOM
- Axios
- HTML5
- CSS3

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

## 📡 API Endpoints

Authentication:
POST /api/auth/register
Example:
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "password": "123456"
}

POST /api/auth/login
Example:
{
  "email": "john@gmail.com",
  "password": "123456"
}

Complaints:

POST /api/complaints
Example:
{
  "title": "WiFi Issue",
  "description": "Internet not working in hostel"
}

GET /api/complaints

PUT /api/complaints/:id
Example:
{
  "status": "Resolved"
}

## ⚙️ Setup Instructions

Clone repository:
git clone https://github.com/your-username/campus-complaint-system.git
cd campus-complaint-system

Backend setup:
cd backend
npm install

Create .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:
node server.js
OR
nodemon server.js

Frontend setup:
cd frontend
npm install
npm start

## 🚀 How to Run

Backend:
cd backend
node server.js

Frontend:
cd frontend
npm start

## 👨‍🎓 Author
Student Project – Campus Complaint System

## 📜 License
For academic purposes only