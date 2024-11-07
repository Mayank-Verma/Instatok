// /src/api/apiService.js
import axiosInstance from "./axiosConfig";

// Wrapper for sendOtp
export const sendOtp = async (email) => {
  try {
    const response = await axiosInstance.post("/sendOtp", { email });
    return response.data;
  } catch (error) {
    console.error("Error sending otp", error);
    throw error;
  }
};

// Wrapper for signup
export const signup = async (email, otp, firstName, lastName) => {
  try {
    const response = await axiosInstance.post("/signup", {
      email,
      otp,
      firstName,
      lastName,
    });
    return response.data;
  } catch (error) {
    console.log("Error in signup", error);
  }
};

// Wrapper for Login
export const login = async (email, otp) => {
  try {
    const response = await axiosInstance.post("/login", {
      email,
      otp,
    });
    return response.data;
  } catch (error) {
    console.log("Error in Login", error);
  }
};
