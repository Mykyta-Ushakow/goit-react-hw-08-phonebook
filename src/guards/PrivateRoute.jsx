import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthSelector } from 'store/selectors';

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const isAuth = useSelector(isAuthSelector);

  return isAuth ? children : <Navigate to="/login" location={location} />;
}
