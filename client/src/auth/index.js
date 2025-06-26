import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

export const authenticate = (token, user, next) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  next();
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const signout = (next) => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  next();
};

export const isAuthenticated = () => {
  const token = getToken();
  const user = getUser();
  return token && user ? { token, user } : false;
};
