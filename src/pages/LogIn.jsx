import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

import { getLogin, getUsername } from 'redux/auth/auth-selectors';
import { Link } from 'react-router-dom';
export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isLogged = useSelector(getLogin);
  const name = useSelector(getUsername);

  const onInput = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return !isLogged ? (
    <>
      <h4>Please, enter your email and password </h4>
      <form action="submit" onSubmit={onSubmit}>
        <label>
          Email
          <input value={email} name="email" type="email" onInput={onInput} />
        </label>
        <label>
          Password
          <input
            value={password}
            name="password"
            type="text"
            onInput={onInput}
          />
        </label>
        <button type="Submit">Login</button>
      </form>
    </>
  ) : (
    <>
      <p>Welcome, {name}, go to</p>
      <Link to="/contacts">contacts</Link>
    </>
  );
};
