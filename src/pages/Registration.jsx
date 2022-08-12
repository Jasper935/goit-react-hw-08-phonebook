import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getUsername } from 'redux/auth/auth-selectors';
export const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Logged = useSelector(getUsername);

  const onInput = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(signIn({ name, email, password }));
    navigate('/contacts');
  };

  return (
    <>
      {!Logged ? (
        <>
          <h4>Please, enter your name, email and password for registration</h4>
          <form onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" type="text" value={name} onChange={onInput} />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={email}
                onChange={onInput}
              />
            </label>
            <label>
              Password
              <input
                name="password"
                type="text"
                value={password}
                onChange={onInput}
              />
            </label>

            <button type="submit">Registration</button>
          </form>
        </>
      ) : (
        <>
          <p>Welcome, {name}, go to</p>
          <Link to="/contacts">contacts</Link>
        </>
      )}
    </>
  );
};
