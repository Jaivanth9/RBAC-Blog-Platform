// src/auth/PublicRoute.js
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PublicRoute = () => {
  const { state } = useContext(AuthContext); // Adjust according to your context structure

  return !state?.isAuthenticated ? <Outlet /> : <Navigate to="/user/dashboard" />;
};

export default PublicRoute;
