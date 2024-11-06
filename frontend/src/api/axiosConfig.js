import axios from "axios";
// import { getAuthToken, setAuthToken, getRefreshToken } from "../utils/storage";

// Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, //base url of backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to refresh the access token
const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken"); // Get refresh token from local storage
  const response = await axiosInstance.post("/refresh", { refreshToken });
  const { accessToken } = response.data;

  localStorage.setItem("accessToken", accessToken); // Save the new access token in local storage
  return accessToken;
};

// Axios interceptor to handle expired tokens
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 unauthorized error (token expired)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newAccessToken = await refreshAccessToken(); // Refresh the token
      axiosInstance.defaults.headers[
        "Authorization"
      ] = `Bearer ${newAccessToken}`;
      originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

      return axiosInstance(originalRequest); // Retry the original request
    }

    return Promise.reject(error);
  }
);

// General API call method
const apiCall = async (method, url, data = null) => {
  const token = localStorage.getItem("accessToken"); // Get token from local storage
  const headers = { Authorization: `Bearer ${token}` };

  return apiClient({
    method,
    url,
    data,
    headers,
  });
};

export { apiCall };