import { Routes, Route } from 'react-router-dom';
import { AppDiv } from './App.styled';

import HomePage from 'pages/HomePage';
import LogInPage from 'pages/FormPages/LogInPage';
import RegisterPage from 'pages/FormPages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUserAPI } from 'store/operations/authOpps';
import PublicRoute from 'guards/PublicRoute';
import PrivateRoute from 'guards/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import { fetchContactsAPI } from 'store/operations/contactsOpps';

export const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUserAPI());
  // }, [dispatch]);

  useEffect(() => {
    const refreshUser = async () => {
      try {
        await dispatch(refreshUserAPI());
        // Now that user is refreshed, fetch contacts
        dispatch(fetchContactsAPI());
      } catch (error) {
        // Handle errors if needed
        console.error('Error refreshing user:', error);
      }
    };

    refreshUser();
  }, [dispatch]);

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
