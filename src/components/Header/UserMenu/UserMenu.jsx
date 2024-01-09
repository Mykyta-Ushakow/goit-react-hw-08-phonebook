import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAPI } from 'store/operations/authOpps';
import { userSelector } from 'store/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();

    dispatch(logOutAPI());
  };

  const { email } = useSelector(userSelector);

  return (
    <div className="header-user-menu">
      <p>Wellcome {email || 'visitor'} !</p>
      <button type="button" onClick={handleClick}>
        Log out
      </button>
    </div>
  );
}
