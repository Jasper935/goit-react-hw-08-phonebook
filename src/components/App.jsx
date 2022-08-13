import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'pages/Navigation';
import { Contacts } from '../pages/contacts';
import { Registration } from 'pages/Registration';
import { LogIn } from 'pages/LogIn';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRefresh } from 'redux/auth/auth-operations';
import { NotFound } from 'pages/NotFound';
import { getToken } from 'redux/auth/auth-selectors';

export const App = () => {


  const token = useSelector(getToken)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch, token]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route index path="/registration" element={<Registration />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </>
  );
};
