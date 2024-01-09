import { Routes, Route } from 'react-router-dom';
import { AppDiv } from './App.styled';

import HomePage from 'pages/HomePage';
import LogInPage from 'pages/FormPages/LogInPage';
import RegisterPage from 'pages/FormPages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUserAPI } from 'store/operations/authOpps';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserAPI());
  }, [dispatch]);

  return (
    <AppDiv className="main">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </AppDiv>
  );
};
