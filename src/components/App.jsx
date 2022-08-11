
import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'pages/Navigation';
import { Contacts } from '../pages/contacts/contacts';
import { Registration } from 'pages/Registration';
import { LogIn } from 'pages/LogIn';



export const App = () => {
 
  
  // useEffect(()=>{
  //  dispatch(getRefresh())
  // },[dispatch])

  

  return (
    <>
      <Navigation />
       <Routes>
          <Route index path='/registration'element={<Registration/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/contacts" element={<Contacts/>} />  
        </Routes>
    </>
  );
};
