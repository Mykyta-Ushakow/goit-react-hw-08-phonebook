import Header from 'components/Header/Header';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserAPI } from 'store/operations/authOpps';
import { isAuthSelector } from 'store/selectors';

function HomePage() {
  const isAuth = useSelector(isAuthSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserAPI());
  }, [dispatch]);

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
