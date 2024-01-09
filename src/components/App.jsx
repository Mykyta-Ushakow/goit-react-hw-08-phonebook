import { Routes, Route } from 'react-router-dom';
import { AppDiv } from './App.styled';

import HomePage from 'pages/HomePage';
import LogInPage from 'pages/FormPages/LogInPage';
import RegisterPage from 'pages/FormPages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';

import PublicRoute from 'guards/PublicRoute';
import PrivateRoute from 'guards/PrivateRoute';

import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <AppDiv className="main">
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LogInPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Toaster />
    </AppDiv>
  );
};
