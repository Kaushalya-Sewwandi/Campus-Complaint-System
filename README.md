# Smart University Grievance Management System

## Project Title
Smart University Grievance Management System (MERN Stack Web Application)

**Repository:** [https://github.com/Kaushalya-Sewwandi/Campus-Complaint-System](https://github.com/Kaushalya-Sewwandi/Campus-Complaint-System)

## Problem Description
In many educational institutions, students face difficulties in reporting and tracking grievances related to academic, infrastructure, or facility issues. Traditional methods such as manual reporting are inefficient, slow, and lack proper tracking mechanisms.

## Proposed Solution
The Smart University Grievance Management System is a web-based application designed to digitize the grievance management process. It allows students to submit grievances online and enables administrators to manage and resolve them efficiently with real-time status tracking. This improves transparency, communication, and response time within the campus environment.

## Features

### Student Module
- Register and login
- Submit grievances
- View grievance status
- Track updates

### Admin Module
- Secure login
- View all grievances
- Update grievance status (Pending / In Progress / Resolved)
- Manage grievance records

## Technologies Used

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

## API Endpoints

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

## Setup Instructions

Clone repository:
```bash
git clone https://github.com/Kaushalya-Sewwandi/Campus-Complaint-System.git
cd Campus-Complaint-System
```

Backend setup:
```bash
cd backend
npm install
```

Create .env file:
```
PORT=5000
MONGO_URI=mongodb_connection_string
JWT_SECRET=secret_key
```

Run backend:
```bash
node server.js
```
OR
```bash
nodemon server.js
```

Frontend setup:
```bash
cd frontend
npm install
npm run dev
```

## How to Run

Backend:
```bash
cd backend
node server.js
```

Frontend:
```bash
cd frontend
npm run dev
```

## Author
Student Project – Smart University Grievance Management System

## License
For academic purposes only
