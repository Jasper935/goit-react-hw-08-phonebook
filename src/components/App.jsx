import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'pages/Navigation';
import { Contacts } from '../pages/contacts';
import { Registration } from 'pages/Registration';
import { LogIn } from 'pages/LogIn';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRefresh } from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch]);

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
      </Routes>
    </>
  );
};
