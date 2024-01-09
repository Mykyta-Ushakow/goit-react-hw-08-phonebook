import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactForm/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import React from 'react';
import { NavLink } from 'react-router-dom';

function ContactsPage() {
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
