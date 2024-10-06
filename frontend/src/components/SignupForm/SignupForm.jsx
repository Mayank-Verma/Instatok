import React from "react";
import { useForm } from "react-hook-form";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./SignupForm.css";
import logo from "../../assets/Instatok white theme.png";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission (Email Signup)
  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  // Handle Google login success
  const handleGoogleLoginSuccess = (response) => {
    console.log("Google Login Success: ", response);

    // Decode the JWT token to get user information
    const userInfo = jwtDecode(response.credential);
    console.log("Decoded User Info: ", userInfo);

    // You can use the decoded data now (e.g., userInfo.email)
  };

  // Handle Google login failure
  const handleGoogleLoginFailure = (response) => {
    console.log("Google Login Failed: ", response);
  };

  return (
    <div className="main-container">
      <img src={logo} className="logo" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <div>
            <div className="input">
              <label htmlFor="fname">First name</label>
              <input
                id="name"
                type="text"
                {...register("fname", { required: "*First Name is required" })}
              />
            </div>
            {errors.fname && (
              <div className="error">{errors.fname.message}</div>
            )}
          </div>

          <div>
            <div className="input">
              <label htmlFor="lname">Last name</label>
              <input
                id="lname"
                type="text"
                {...register("lname", { required: "*Last Name is required" })}
              />
            </div>
            {errors.lname && (
              <div className="error">{errors.lname.message}</div>
            )}
          </div>

          <div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "*Email is required" })}
              />
            </div>

            {errors.email && (
              <div className="error">{errors.email.message}</div>
            )}
          </div>
        </div>
        <div>
          <button type="submit" className="signup">
            Sign Up
          </button>
        </div>
      </form>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          color: "#262626",
        }}
      >
        <span className="line"></span>
        <span>OR</span>
        <span className="line"></span>
      </span>
      <div style={{ width: "17rem", height: "0.8rem" }}>
        <GoogleLogin
          theme="filled"
          className="google-login"
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
        />
      </div>
    </div>
  );
};

export default SignupForm;
