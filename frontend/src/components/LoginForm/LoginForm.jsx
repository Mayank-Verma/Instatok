import { useForm } from "react-hook-form";
import "./LoginForm.css";
import logo from "../../assets/Instatok dark theme.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [isEmailSubmitted, SetIsEmailSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission (Email Signup)
  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };
  return (
    <div className="main-container">
      <img src={logo} className="logo" />
      <div style={{ color: "#F9F6EE", fontWeight: "bolder" }}>
        Welcome back! Login to your Account.
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                autoComplete="off"
                {...register("email", { required: "*Email is required" })}
                style={{ paddingLeft: "0.2rem" }}
                className="input-field"
              />
            </div>

            {errors.email && (
              <div className="error">{errors.email.message}</div>
            )}
          </div>
        </div>
        <div>
          <button type="submit" className="signup">
            Log In
          </button>
        </div>
      </form>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          color: "white",
        }}
      >
        <span>Don't have an account?</span>
        <Link to="/signup" style={{ color: "#467fe1" }}>
          Sign up
        </Link>
      </span>
    </div>
  );
};

export default LoginForm;
