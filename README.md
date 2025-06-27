# RBAC Blog Platform 📰🔐

A full-stack blog platform with **Role-Based Access Control (RBAC)** built using React, Node.js, Express, and MongoDB. It supports `admin` and `user` roles with separate dashboards, JWT-based authentication, protected routes, and post management.


## 🔧 Tech Stack
---
### 🔹 Frontend
- React 18
- React Router DOM
- Bootstrap 5
- Context API for auth state
- Axios for API requests

### 🔹 Backend
- Node.js
- Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- CORS, dotenv, body-parser


## ✅ Features
---

### 🧑‍💼 Authentication & Authorization
- Signup/Login for users
- JWT token stored in localStorage
- Role-based routing (`admin`, `user`)
- Protected routes for each role
- Global AuthContext for session state

### 🗂️ User Dashboard
- View all blog posts
- Create a blog post
- View profile
- Responsive, no-scroll fixed layout

### 👨‍💼 Admin Dashboard
- View all users
- Delete any user
- Manage all blog posts
- Admin-only access


## 🗃️ Project Structure
---

### Frontend (`/client`)
src/
├── App.js
├── index.js
├── actions/
│ └── AuthAction.js
├── auth/
│ ├── AdminRoute.js
│ ├── PrivateRoute.js
│ ├── PublicRoute.js
│ └── index.js
├── components/
│ ├── elements/
│ │ ├── adminnav/AdminNav.js
│ │ ├── usernav/UserNav.js
│ │ └── common/Navbar.js
│ ├── AdminDashboard.js
│ ├── UserDashboard.js
│ ├── Signin.js
│ ├── Signup.js
│ ├── Home.js
│ └── UserProfile.js
├── contexts/
│ └── AuthContext.js
└── utils/
└── api.js


### Backend (`/server`)
---

server/
├── server.js
├── config/
│ └── key.js
├── middleware/
│ ├── requirelogin.js
│ └── rolecheck.js
├── models/
│ └── usermodel.js
├── routes/
│ └── authroute.js
├── controllers/
│ └── authcontroller.js
└── .env


## 🛠️ Setup Instructions
---
### 1. Clone the Repository
git clone https://github.com/Jaivanth9/RBAC-Blog-Platform.git
cd rbac-blog-platform


### 2. Backend Setup
cd server
npm install
🔑 Setup Environment Variables in .env
PORT=8000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key

### ▶️ Start Backend
node server.js

### 3. Frontend Setup
cd client
npm install
### ▶️ Start React App
npm start

🔐 Routes Summary
Backend API
Method	Endpoint	Access	Description
POST	/signup	Public	Register new user
POST	/signin	Public	Login user
GET	/user/profile	Private	Get user profile
GET	/admin/users	Admin only	View all users

⚙️ Role-Based Routing Logic
AdminRoute: Allows access only if logged in and role === 'admin'.

PrivateRoute: Allows access only if logged in (user or admin).

PublicRoute: Redirects authenticated users away from signin/signup.

📌 Todos
---
 Signup/Login

 Auth Context with JWT

 Admin/User dashboards

 Protected Routes

 View all posts

 Edit/Delete post

 Email verification
 
✨ Author
---
Jaivanth Koppula
Feel free to fork, customize, or extend this platform as needed.

