import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { useNavigate } from 'react-router-dom';
export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const dispatch = useDispatch()



const navigate = useNavigate();
const onInput = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
};




const onSubmit = (evt) => {
    evt.preventDefault()
dispatch(logIn({email, password}))
 navigate("/contacts", { replace: true });
setEmail('')
setPassword('')


};

  return (<>
    <h4>Please, enter your email and password </h4>
    <form action="submit" onSubmit={onSubmit}>
      <label>
        Email
        <input value={email} name="email" type="email" onInput={onInput} />
      </label>
      <label>
        Password
        <input value={password} name="password" type="text" onInput={onInput} />
      </label>
      <button type="Submit">Login</button>
    </form>
    </>
  );
};
