import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const [cookies] = useCookies(['token']);
    const token = cookies['token'];
    const location = useLocation();
     if (!token) {
        return  <Navigate to="/" state={{ from: location }} replace />  
      }
      return children;
  };
 

export default ProtectedRoute;