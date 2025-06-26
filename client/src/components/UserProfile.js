import React from 'react';
import { getUser } from '../auth';

const UserProfile = () => {
  const user = getUser();

  return (
    <div className="container mt-4">
      <h2>My Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
};

export default UserProfile;
