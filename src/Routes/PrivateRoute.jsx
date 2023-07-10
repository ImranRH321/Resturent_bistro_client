import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    // Todo: Security route 

    const {user,loading}  = useContext(AuthContext);
    let location = useLocation();

    if(loading){
     return <progress className="progress w-56"></progress>
    }
    // 
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;