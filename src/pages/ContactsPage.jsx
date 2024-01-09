import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactForm/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { refreshUserAPI } from 'store/operations/authOpps';
import { fetchContactsAPI } from 'store/operations/contactsOpps';

function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshUser = async () => {
      try {
        await dispatch(refreshUserAPI());
        dispatch(fetchContactsAPI());
      } catch (error) {
        console.error('Error refreshing user:', error);
      }
    };

    refreshUser();
  }, [dispatch]);

  return (
    <>
      <NavLink to="/"> {'<- Back to Home'}</NavLink>

      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts:</h2>
      <Filter />
      <ContactList />
    </>
  );
}

export default ContactsPage;
