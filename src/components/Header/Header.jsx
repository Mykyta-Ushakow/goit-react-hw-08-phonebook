import React from 'react';
import Navigation from 'components/Header/Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import UserMenuLoggedOut from './UserMenu/UserMenuLoggedOut';
import { useSelector } from 'react-redux';
import { isAuthSelector } from 'store/selectors';

function Header() {
  const isAuth = useSelector(isAuthSelector);

  return (
    <header>
      <Navigation />

      {isAuth ? <UserMenu /> : <UserMenuLoggedOut />}
    </header>
  );
}

export default Header;
