import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

   let check= localStorage.getItem('email');

   console.log(check);

   return check ? children : <> <Navigate to="/login" />  </>
 
}

export default PrivateRoute
