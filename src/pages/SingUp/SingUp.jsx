import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegisterFormUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SingUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegisterFormUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            {/* email  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Your email"
                className="input input-bordered"
                name="email"
              />
            </div>
            {/* Password  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your email"
                className="input input-bordered"
                name="password"
              />
            </div>
            <div className="form-control mt-2">
              <input type="submit" value="SingUp" className="btn btn-info" />
            </div>
          </form>
          <p className="pb-4 pl-4">
            <small>
              Already registered?{" "}
              <Link to="/login" className="text-primary ">
                Go to log in
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
