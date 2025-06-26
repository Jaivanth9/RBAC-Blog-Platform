import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const UserDashboard = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const user = state.user;

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate('/signin');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-5" style={{ width: '100%', maxWidth: '500px', borderRadius: '16px' }}>
        <h2 className="text-center mb-4">👋 Welcome, {user.name}!</h2>
        <hr />
        <div className="mb-3">
          <strong>Email:</strong> <span className="text-muted">{user.email}</span><br />
          <strong>Role:</strong> <span className="text-muted text-capitalize">{user.role}</span>
        </div>

        <div className="d-grid gap-3 mt-4">
          <button className="btn btn-outline-primary" onClick={() => navigate('/posts')}>
            📚 View All Posts
          </button>
          <button className="btn btn-outline-secondary" onClick={() => navigate('/profile')}>
            ✏️ Edit Profile
          </button>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
