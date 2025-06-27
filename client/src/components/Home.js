import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => (
  <div className="container mt-5">
    <div className="row align-items-center">
      <div className="col-md-6 text-center text-md-start">
        <h1 className="display-4 fw-bold">Welcome to the RBAC Blog Platform</h1>
        <p className="lead mt-3">
          This is a secure role-based blogging platform where users can read and write posts,
          and admins can manage content.
        </p>
        <div className="mt-4 d-flex flex-column flex-md-row align-items-center gap-3">
  <Link to="/signin" className="btn btn-primary w-100 w-md-25">Login</Link>
  <Link to="/signup" className="btn btn-outline-secondary w-100 w-md-25">Sign Up</Link>
</div>

      </div>

      <div className="col-md-6 text-center mt-4 mt-md-0">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Blog illustration"
          className="img-fluid rounded"
          style={{ maxHeight: '300px' }}
        />
      </div>
    </div>

    <hr className="my-5" />

    <div className="row text-center">
      <div className="col-md-4 mb-4">
        <i className="bi bi-journal-text display-5 text-primary"></i>
        <h5 className="mt-3">Create & Read Blogs</h5>
        <p>Users can publish articles and explore posts by others.</p>
      </div>
      <div className="col-md-4 mb-4">
        <i className="bi bi-shield-lock-fill display-5 text-success"></i>
        <h5 className="mt-3">Secure Access</h5>
        <p>Authentication and authorization with JWT and role-based routing.</p>
      </div>
      <div className="col-md-4 mb-4">
        <i className="bi bi-speedometer2 display-5 text-danger"></i>
        <h5 className="mt-3">Admin Dashboard</h5>
        <p>Admins can manage all blog posts and monitor activity.</p>
      </div>
    </div>
  </div>
);

export default Home;
