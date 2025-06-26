import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => (
  <div className="mb-3">
    <Link to="/admin/dashboard" className="btn btn-outline-primary me-2">Dashboard</Link>
    <Link to="/create" className="btn btn-outline-success me-2">Create Post</Link>
    <Link to="/" className="btn btn-outline-secondary">Home</Link>
  </div>
);

export default AdminNav;
