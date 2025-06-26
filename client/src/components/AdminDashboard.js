import React from 'react';
import AdminNav from './elements/adminnav/AdminNav';
import '../styles/dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="container mt-4">
      <AdminNav />
      <h2>Admin Dashboard</h2>
      <p>You can manage blog posts from here.</p>
    </div>
  );
};

export default AdminDashboard;
