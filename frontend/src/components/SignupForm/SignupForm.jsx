import React from "react";
import { useForm } from "react-hook-form";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./SignupForm.module.css";
import logo from "../../assets/Instatok dark theme.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [isEmailSubmitted, SetIsEmailSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle form submission (Email Signup)
  const onSubmit = async (data) => {
    SetIsEmailSubmitted(() => true);
    console.log("Form Data: ", data);
    const { email, otp } = data;
    console.log("Form Data: ", email, otp);

    if (!otp)
      try {
        // Send POST request to /Signup API for sending the OTP
        await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      }

    if (otp)
      try {
        // Send POST request to /Signup API for sending the OTP
        const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        // Check if login was successful
        if (response.ok) {
          const result = await response.json();
          // Store the access and refresh tokens in localStorage
          localStorage.setItem("accessToken", result.accessToken);
          localStorage.setItem("refreshToken", result.refreshToken);
          alert("Login successful! Token saved in browser.");
          navigate("/home"); // Navigate to home page
        } else {
          alert("Login failed. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      }
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
      <div style={{ color: "#F9F6EE" }}>
        Step into the realm of Digitalverse
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <div>
            <div className="input">
              <label htmlFor="firstName">First name</label>
              <input
                id="name"
                type="text"
                autoComplete="off"
                {...register("firstName", {
                  required: "*First Name is required",
                })}
                style={{ paddingLeft: "0.2rem" }}
              />
            </div>
            {errors.firstName && (
              <div className="error">{errors.firstName.message}</div>
            )}
          </div>

          <div>
            <div className="input">
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                type="text"
                autoComplete="off"
                {...register("lastName", {
                  required: "*Last Name is required",
                })}
                style={{ paddingLeft: "0.2rem" }}
              />
            </div>
            {errors.lastName && (
              <div className="error">{errors.lname.message}</div>
            )}
          </div>

          <div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                autoComplete="off"
                {...register("email", { required: "*Email is required" })}
                style={{ paddingLeft: "0.2rem" }}
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
          color: "white",
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
