  
import {   useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
 
const PublicRoute = ({children}) => {
const [cookies] = useCookies(['token']);
  const token = cookies['token'];
   if (token) {
      return <Navigate to="/" replace />;
    }
    return children;
};

export default PublicRoute;