import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const location = useLocation();

  return isAuth ? children : <Navigate to="/" location={location} />;
}
