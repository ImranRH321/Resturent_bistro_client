import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
 
  const [loading, setLoading] = useState();

  // createUser
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // singIn
  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logOut 
  const logOut = () => {
    signOut(auth)
  };
  

  useEffect(() => {
    const unSubscript = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoading(false);
      console.log('current user:on Auth Change--> ', currentUser);
    })
    return () => {
        return unSubscript; 
    }
  },[])
 
  // 
  const authInfo = {
    currentUser,
    loading,
    createUser , 
    singIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
