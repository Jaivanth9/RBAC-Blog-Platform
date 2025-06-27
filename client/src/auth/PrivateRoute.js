import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ allowedRoles }) => {
  
  const { state } = useContext(AuthContext);
  const user = state?.user;

  if (!user) return <Navigate to="/signin" />;
  console.log("🔐 Auth state:", state);
console.log("👤 User:", user);
console.log("🔐 Required roles:", allowedRoles);

if (!allowedRoles.includes(user.role)) {
  return <Navigate to="/" />;
}
console.log("✅ Role Check:", user?.role);


  return <Outlet />;
};

export default PrivateRoute;
