// /src/api/apiService.js
import axiosInstance from "./axiosConfig";

export const getUserData = () => {
  return axiosInstance.get("/user/data");
};

export const postComment = (comment) => {
  return axiosInstance.post("/comments", { text: comment });
};

// Add more API service functions as needed
