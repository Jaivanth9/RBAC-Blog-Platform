import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { getUser } from './index';

const AdminRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const user = getUser();

  if (!isLoggedIn || !user || user.role !== 'admin') {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default AdminRoute;
