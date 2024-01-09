import React from 'react';
import { NavLink } from 'react-router-dom';

export default function UserMenuLoggedOut() {
  return (
    <nav className="header-user-menu">
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/register">Sign up</NavLink>
    </nav>
  );
}
