import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getLogin } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import { NavContainer } from './Navigation.styled';
import { NavigationLink } from './Navigation.styled';

import {useNavigate } from 'react-router-dom';

export const Navigation = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector(getLogin);


  const onClick = () => {
    dispatch(logOut());
    navigate("/login", { replace: true });


  };
  return (
    <NavContainer> 
    {!isLogged&&(<><NavigationLink to="/registration">Sign up</NavigationLink>
      <NavigationLink to="/login">Login</NavigationLink></>)} 

      
      {isLogged &&<><NavigationLink to="/contacts">Contacts</NavigationLink><button onClick={onClick}>Log out</button></> }
    </NavContainer>
  );
};

