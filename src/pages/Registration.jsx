import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/auth-operations';
export const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();

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
    console.log(name, email, password);
    evt.preventDefault();
    dispatch(signIn({name, email, password}))
  };

  return (
    <form onSubmit={onSubmit}>
        <label>
        Name
        <input name="name" type="text" value={name} onChange={onInput} />
      </label>
      <label>
        Email
        <input name="email" type="email" value={email}  onChange={onInput} />
      </label>
      <label>
        Password
        <input name="password" type="text" value={password}  onChange={onInput} />
      </label>
      
      <button type="submit">Registration</button>
    </form>
  );
};
