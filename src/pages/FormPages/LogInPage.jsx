import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logInAPI } from 'store/operations/authOpps';

function LogInPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      logInAPI({
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <Link type="button" to="/">
        {'<- Back to Home'}
      </Link>
      <div className="login-form-section">
        <label htmlFor="exampleInputEmail1">Your email address</label>
        <input
          type="email"
          name="email"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp">We'll never share your email with anyone else.</div>
      </div>
      <div className="login-form-section">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input name="password" type="password" id="exampleInputPassword1" />
      </div>
      <button type="submit">Login</button>
      <Link to="/register">Sign up</Link>
    </form>
  );
}

export default LogInPage;
