// Main page use login pathname == login

// if login hoy  == hide navbar or header
// Create  a design login page nad  console emial , passsword
// react caftrue password -->

import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
const [disabled, setDisabled] = useState(true);

  // 
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLoginFormUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  //
  const handleValidatedCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value) == true) {
      alert("Captcha Matched");  
      setDisabled(false);
    } else {
      alert("Captcha Does Not Match");
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
              <label className="label">
                <a
                  href="#"
                  className="text-white label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            {/* caftrue  */}
            <div className="form-control text-warning">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                placeholder="type the captcha above"
                className="input input-bordered text-black"
                name="captcha"
                ref={captchaRef}
              />
              {/* valided */}
              <button
                onClick={handleValidatedCaptcha}
                className="btn btn-outline btn-warning mt-3 btn-xs"
              >
                is-valid
              </button>
              <label className="label">
                <a
                  href="#"
                  className="text-white label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input disabled={disabled} type="submit" value="Login" className="btn btn-warning" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
