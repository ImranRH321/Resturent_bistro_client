import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleUser } = useContext(AuthContext);

  //
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // G
  const handleGoogleLogin = () => {
    googleUser()
      .then((result) => {
        const gUser = result.user;
        //
        const saveNewUser = {
            name: gUser.name,
            email: gUser.email,
            password: gUser?.password,
            photoUrl: gUser?.photoUrl,
            userRole: "user",
          };
          console.log(saveNewUser);
        //
        fetch("http://localhost:5000/users ", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveNewUser),
        })
          .then((res) => res.json())
          .then((data) => {
            
            navigate(from, { replace: true });
          });
        //
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="text-center w-full p-5">
        <button onClick={handleGoogleLogin} className="btn btn-warning">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
