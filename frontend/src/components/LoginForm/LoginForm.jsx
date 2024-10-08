import { useForm } from "react-hook-form";
import "./LoginForm.css";
import logo from "../../assets/Instatok dark theme.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
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

          {isEmailSubmitted && (
            <div>
              <div className="input">
                <label htmlFor="email">OTP</label>
                <input
                  id="otp"
                  type="text"
                  autoComplete="off"
                  {...register("otp", { required: "*OTP is required" })}
                  style={{ paddingLeft: "0.2rem" }}
                  className="input-field"
                />
              </div>

              {errors.email && (
                <div className="error">{errors.email.message}</div>
              )}
            </div>
          )}
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
