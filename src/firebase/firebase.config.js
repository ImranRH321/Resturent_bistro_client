// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  /*  
 apiKey: "AIzaSyCBcIorolBh_iU_RUBn508WPlnACdTjuIk",
  authDomain: "bistro-boos-6a49c.firebaseapp.com",
  projectId: "bistro-boos-6a49c",
  storageBucket: "bistro-boos-6a49c.appspot.com",
  messagingSenderId: "453646644970",
  appId: "1:453646644970:web:c4b4a8db8e786d0f608993",
  measurementId: "G-5W6C0KNH0Q",
   */

  apiKey:import.meta.env.VITE_SOME_KEY_apiKey ,
  authDomain:import.meta.env.VITE_SOME_KEY_authDomain ,
  projectId:import.meta.env.VITE_SOME_KEY_projectId ,
  storageBucket:import.meta.env.VITE_SOME_KEY_storageBucket ,
  messagingSenderId:import.meta.env.VITE_SOME_KEY_messagingSenderId ,
  appId:import.meta.env.VITE_SOME_KEY_appId ,
  measurementId:import.meta.env.VITE_SOME_KEY_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
