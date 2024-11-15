import { useForm } from "react-hook-form";
import styles from "./LoginForm.module.css";
import logo from "../../assets/Instatok dark theme.png";
import { Link } from "react-router-dom";
import { sendOtp, signup, login } from "../../api/userService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import ReactLoading from "react-loading";
import Spinner from "../Spinner/Spinner";

const LoginForm = ({ notify }) => {
  const [isEmailSubmitted, SetIsEmailSubmitted] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
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
    setIsFormSubmitting(true);
    const { email, otp, firstName, lastName } = data;
    console.log("Form Data: ", email, otp);

    if (!otp) {
      try {
        // Send POST request to /sendOtp API for sending the OTP
        const responseData = await sendOtp(email);
        console.log("axios response", responseData);
        // currently calling below method without response.ok check, if needed will add later
        SetIsEmailSubmitted(() => true);
        setIsFormSubmitting(false); // as response has reached hence making it false

        userData = responseData.data;
        if (userData) setUsername(() => userData.firstName);
        console.log(userData);
        if (!userData) setIsNewUser(() => true);
      } catch (error) {
        console.error("Error sending otp:", error);
        alert("Error sending otp");
      }
    } else if (otp && firstName && lastName) {
      try {
        // Send POST request to /Signup API for sending the OTP
        const responseData = await signup(email, otp, firstName, lastName);
        console.log(responseData);
        setIsFormSubmitting(false); // as response has reached hence making it false

        // Check if signup was successful
        if (responseData) {
          // Store the access and refresh tokens in localStorage
          localStorage.setItem("accessToken", responseData.accessToken);
          localStorage.setItem("refreshToken", responseData.refreshToken);
          alert("Signup successful! Token saved in browser.");
          // notify(); // This is not working currently
          navigate("/home"); // Navigate to home page
        } else {
          alert("Signup failed. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error in Signup!.");
      }
    } else {
      try {
        const responseData = await login(email, otp);
        setIsFormSubmitting(false); // as response has reached hence making it false

        // Check if login was successful
        if (responseData) {
          // Store the access and refresh tokens in localStorage
          localStorage.setItem("accessToken", responseData.accessToken);
          localStorage.setItem("refreshToken", responseData.refreshToken);
          alert("Login successful! Token saved in browser.");
          // notify();
          navigate("/home"); // Navigate to home page
        } else {
          alert("Login failed.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred during Login");
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
    <div className={styles.mainContainer}>
      <img src={logo} className={styles.logo} />
      <div style={{ color: "#F9F6EE", fontWeight: "bolder" }}>
        {username
          ? `Welcome back ${username}!`
          : "Step into the realm of Digitalverse"}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <div>
            <div className={styles.input}>
              {/* <label htmlFor="email">Email</label> */}
              <input
                id="email"
                placeholder="Email"
                type="email"
                autoComplete="off"
                {...register("email", { required: "*Email is required" })}
                style={{ paddingLeft: "0.2rem" }}
                className={styles.inputField}
              />
            </div>

            {errors.email && (
              <div className={styles.error}>{errors.email.message}</div>
            )}
          </div>

          {isEmailSubmitted && (
            <div>
              <div className={styles.input}>
                {/* <label htmlFor="email">OTP</label> */}
                <input
                  id="otp"
                  placeholder="OTP"
                  type="number"
                  autoComplete="off"
                  {...register("otp", { required: "*OTP is required" })}
                  style={{ paddingLeft: "0.2rem" }}
                  className={styles.inputField}
                  min="0000"
                  max="9999"
                />
              </div>

              {errors.otp && (
                <div className={styles.error}>{errors.otp.message}</div>
              )}
            </div>
          )}

          {isNewUser && (
            <div>
              <div className={styles.input}>
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
                  className={styles.inputField}
                />
              </div>
              {errors.firstName && (
                <div className={styles.error}>{errors.firstName.message}</div>
              )}
            </div>
          )}
          {isNewUser && (
            <div>
              <div className={styles.input}>
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
                  className={styles.inputField}
                />
              </div>
              {errors.lastName && (
                <div className={styles.error}>{errors.lastName.message}</div>
              )}
            </div>
          )}
        </div>
        <div>
          <button
            type="submit"
            className={`${styles.signup} ${styles.btn}`}
            disabled={isFormSubmitting}
          >
            {!isEmailSubmitted ? (
              isFormSubmitting ? (
                <Spinner />
              ) : (
                "Login"
              )
            ) : username && isEmailSubmitted ? (
              isFormSubmitting ? (
                <Spinner />
              ) : (
                "Login"
              )
            ) : isFormSubmitting ? (
              <Spinner />
            ) : (
              "Signup"
            )}
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
          <span className={styles.line}></span>
          <span>OR</span>
          <span className={styles.line}></span>
        </span>
      )}
      {!isEmailSubmitted && (
        <div style={{ width: "17rem", height: "0.8rem" }}>
          <GoogleLogin
            theme="filled"
            className={styles.googleLogin}
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
          />
        </div>
      )}
    </div>
  );
};

export default LoginForm;
