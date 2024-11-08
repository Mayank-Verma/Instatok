import axiosInstance from "./axiosConfig";
export const fetchImagePosts = async () => {
  try {
    const response = await axiosInstance.get("/fetchPosts/images");
    return response.data;
  } catch (error) {
    console.log("Error in Fetching images posts", error);
  }
};
