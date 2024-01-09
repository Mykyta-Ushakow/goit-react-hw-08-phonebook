import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isAuthSelector } from 'store/selectors';

function Navigation() {
  const isAuth = useSelector(isAuthSelector);

  return (
    <nav className="home-navigation-menu">
      <NavLink to="/">Home</NavLink>
      {isAuth && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
}

export default Navigation;
