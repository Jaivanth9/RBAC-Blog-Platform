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
