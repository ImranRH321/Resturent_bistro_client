// Main page use login pathname == login

// if login hoy  == hide navbar or header
// Create  a design login page nad  console emial , passsword
// react caftrue password -->

import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const [validatedError, setValidatedError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { loginUser } = useContext(AuthContext);

  // 
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";


  //
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLoginFormUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginUser(email, password).then((userCredential) => {
      const loggedUser = userCredential.user;
      // console.log(loggedUser, "--> loggedUser");
      Swal.fire("user login successfully");
      navigate(from, { replace: true });
    });
  };

  //
  const handleValidatedCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log("user_captcha_value-->", user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      setValidatedError("Captcha Matched");
      setDisabled(false);
    } else {
      setValidatedError("Captcha Does Not Match");
      setDisabled(true);
    }
  };
  return (
    <div className="bg-lime-200">
      <Helmet>
        <title>Bistro Boos | Login</title>
      </Helmet>
      <br />

      <section className="grid md:grid-cols-2 ">
        <div className="imgParent">
          <img
            className="w-full"
            src={
              "https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
            }
            alt=""
          />
        </div>
        <div className="formContainer mx-12 border  bg-[#4293e5]">
          <h1 className="text-5xl bg-orange-200 py-7 px-2">Login page </h1>
          <form onSubmit={handleLoginFormUser} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
            
            </div>
            {/* caftrue  */}
            <div className="form-control text-warning">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidatedCaptcha}
                type="text"
                placeholder="type the captcha above"
                className="input input-bordered text-black"
                name="captcha"
              />
              {/* =============
              imran12345 
              ============== */}

                 {/* TODO: Validation error Captcha Update After now */}
               <p className="text-warning fw-bolder">{validatedError}</p> 
              <label className="label">
                <a
                  href="#"
                  className="text-white label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
          
            <div className="form-control mt-2">
            {/* TODO: disabled captcha  button after last change disabled */}
              <input
                // disabled={disabled}
                disabled={false}
                type="submit"
                value="Login"
                className="btn btn-warning"
              />
            </div>
          </form>
          <p className="pb-4">
            New here?{" "}
            <Link to="/singup" className="text-warning">
              Create a New Account
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
