import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const useAuth = () => {
    /* use auth  */
    const auth = useContext(AuthContext)
    console.log('=== use auth === ', auth);
    return auth;
};

export default useAuth;