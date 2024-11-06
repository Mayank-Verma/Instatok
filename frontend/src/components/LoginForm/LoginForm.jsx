import { useForm } from "react-hook-form";
import "./LoginForm.css";
import logo from "../../assets/Instatok dark theme.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const LoginForm = ({ notify }) => {
  const [isEmailSubmitted, SetIsEmailSubmitted] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [username, setUsername] = useState(null);
  let userData = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle form submission (Email Signup)
  const onSubmit = async (data) => {
    const { email, otp, firstName, lastName } = data;
    console.log("Form Data: ", email, otp);

    if (!otp) {
      try {
        // Send POST request to /sendOtp API for sending the OTP
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/sendOtp`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        // if response is ok, set email is submitted as true
        if (response.ok) SetIsEmailSubmitted(() => true);
        const responseData = await response.json();
        userData = responseData.data;
        if (userData) setUsername(() => userData.firstName);
        console.log(userData);
        if (!userData) setIsNewUser(() => true);
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      }
    } else if (otp && firstName && lastName) {
      try {
        // Send POST request to /Signup API for sending the OTP
        const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        // Check if signup was successful
        if (response.ok) {
          const result = await response.json();
          // Store the access and refresh tokens in localStorage
          localStorage.setItem("accessToken", result.accessToken);
          localStorage.setItem("refreshToken", result.refreshToken);
          alert("Signup successful! Token saved in browser.");
          notify();

          navigate("/home"); // Navigate to home page
        } else {
          alert("Signup failed. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      }
    } else {
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
          console.log("hitting toast");
          // Store the access and refresh tokens in localStorage
          localStorage.setItem("accessToken", result.accessToken);
          localStorage.setItem("refreshToken", result.refreshToken);
          // alert("Login successful! Token saved in browser.");
          // notify();
          navigate("/home"); // Navigate to home page
        } else {
          alert("Login failed. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      }
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
      <div style={{ color: "#F9F6EE", fontWeight: "bolder" }}>
        {username
          ? `Welcome back ${username}!`
          : "Step into the realm of Digitalverse"}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <div>
            <div className="input">
              {/* <label htmlFor="email">Email</label> */}
              <input
                id="email"
                placeholder="Email"
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
                {/* <label htmlFor="email">OTP</label> */}
                <input
                  id="otp"
                  placeholder="OTP"
                  type="number"
                  autoComplete="off"
                  {...register("otp", { required: "*OTP is required" })}
                  style={{ paddingLeft: "0.2rem" }}
                  className="input-field"
                  min="0000"
                  max="9999"
                />
              </div>

              {errors.otp && <div className="error">{errors.otp.message}</div>}
            </div>
          )}

          {isNewUser && (
            <div>
              <div className="input">
                {/* <label htmlFor="firstName">First name</label> */}
                <input
                  id="name"
                  type="text"
                  placeholder="First Name"
                  autoComplete="off"
                  {...register("firstName", {
                    required: "*First Name is required",
                  })}
                  style={{ paddingLeft: "0.2rem" }}
                  className="input-field"
                />
              </div>
              {errors.firstName && (
                <div className="error">{errors.firstName.message}</div>
              )}
            </div>
          )}
          {isNewUser && (
            <div>
              <div className="input">
                {/* <label htmlFor="lastName">Last name</label> */}
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  autoComplete="off"
                  {...register("lastName", {
                    required: "*Last Name is required",
                  })}
                  style={{ paddingLeft: "0.2rem" }}
                  className="input-field"
                />
              </div>
              {errors.lastName && (
                <div className="error">{errors.lastName.message}</div>
              )}
            </div>
          )}
        </div>
        <div>
          <button type="submit" className="signup">
            {!isEmailSubmitted
              ? "Login"
              : username && isEmailSubmitted
              ? "Login"
              : "Signup"}
          </button>
        </div>
      </form>
      {!isEmailSubmitted && (
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
      )}
      {!isEmailSubmitted && (
        <div style={{ width: "17rem", height: "0.8rem" }}>
          <GoogleLogin
            theme="filled"
            className="google-login"
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
          />
        </div>
      )}
    </div>
  );
};

export default LoginForm;
