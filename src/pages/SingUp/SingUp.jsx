import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              <p className="text-red-600">
                {" "}
                {errors.name && <span>This field is required</span>}
              </p>
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
                {...register("email", { required: true })}
              />
              <p className="text-red-600">
                {" "}
                {errors.email && <span>Email is required</span>}
              </p>
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
                {...register(
                  "password",
                  { required: true },
                  { minLength: 6, maxLength: 20 }
                )}
              />
              <p className="text-red-600">
                {" "}
                {errors.password && <span>Password is required</span>}
              </p>
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