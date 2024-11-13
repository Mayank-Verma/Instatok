import axiosInstance from "./axiosConfig";

// API wrapper for fetching posts
export const fetchImagePosts = async () => {
  try {
    const response = await axiosInstance.get("/fetchPosts/images");
    return response.data;
  } catch (error) {
    console.log("Error in Fetching images posts", error);
  }
};

// API wrapper for uploading image posts
export const uploadImagePost = async ({ image, description = " " }) => {
  try {
    const formData = new FormData();
    formData.append("image", image); // Add the file
    formData.append("description", description); // Add any other data you want to send
    const response = await axiosInstance.post("/post-upload/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Set header for FormData
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error in uploading image post", error);
  }
};
