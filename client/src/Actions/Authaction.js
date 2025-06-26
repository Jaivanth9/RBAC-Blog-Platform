// export const initialState = null;

// export const reducer = (state, action) => {
//   if (action.type === 'USER') {
//     return action.payload;
//   }
//   if (action.type === 'CLEAR') {
//     return null;
//   }
//   return state;
// };

// src/actions/AuthAction.js

// Handles user login by sending credentials to the backend
// export const loginUser = async (credentials) => {
//   const res = await fetch('/api/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(credentials),
//   });
//   return res.json();
// };

// // Handles user registration
// export const signupUser = async (details) => {
//   const res = await fetch('/api/signup', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(details),
//   });
//   return res.json();
// };

// // Clears user session (logs out)
// export const logoutUser = () => {
//   localStorage.removeItem('token');
//   localStorage.removeItem('user');
// };
// src/actions/AuthAction.js
import axios from 'axios';

export const signup = async (userData) => {
  try {
    const res = await axios.post('/api/auth/signup', userData);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const signin = async (credentials) => {
  try {
    const res = await axios.post('/api/auth/signin', credentials);
    // Save token to localStorage
    localStorage.setItem('token', res.data.token);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const signout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token ? token : false;
};
