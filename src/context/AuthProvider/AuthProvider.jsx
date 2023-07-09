import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const auth = getAuth(app);
//

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // createUser
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // singIn
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleUser = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // logOut
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };

  const updateProfileUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscript = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    
      // TODO: Exist or new user login or singUp Apis call and Set token
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", { email: currentUser.email })
          .then((data) => {
            console.log(data, " -data");
            const token = data.data.token;
            if (token) {
              /* 
              TODO: MISTIK NUMBER 1 CodeShon chara rakte hobe.
              localStorage.setItem("accessToken", JSON.stringify(token)); */
              localStorage.setItem("accessToken", token);
            }
            setLoading(false);
          });
      } else {
        localStorage.removeItem("accessToken");
      }
      //
      //
    });
    return () => {
      return unSubscript;
    };
  }, []);

  //
  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    googleUser,
    logOut,
    updateProfileUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
