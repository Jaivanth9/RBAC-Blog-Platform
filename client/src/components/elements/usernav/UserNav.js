import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => (
  <div className="mb-3">
    <Link to="/user/dashboard" className="btn btn-outline-primary me-2">Dashboard</Link>
    <Link to="/profile" className="btn btn-outline-info me-2">Profile</Link>
    <Link to="/" className="btn btn-outline-secondary">Home</Link>
  </div>
);

export default UserNav;
