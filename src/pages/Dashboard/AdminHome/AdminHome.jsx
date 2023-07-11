import React from "react";
import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div className="w-full">
      <h1 className="text-4xl">WelCome Admin:  {user.displayName} </h1>
    </div>
  );
};

export default AdminHome;
