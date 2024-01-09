import { loginAPI, registrationAPI } from 'api/auth';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactForm/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import Header from 'components/Header/Header';
import UserMenu from 'components/Header/UserMenu/UserMenu';

import React from 'react';
import { useSelector } from 'react-redux';
import { isAuthSelector } from 'store/selectors';

function HomePage() {
  const isAuth = useSelector(isAuthSelector);

  return (
    <>
      <Header />
      <h1>Wellcome to Your favorite contact app!</h1>
      {isAuth ? (
        <h2>Thank you for using our services</h2>
      ) : (
        <h2>Please log in or register to see your saved contacts here</h2>
      )}
    </>
  );
}

export default HomePage;
