import * as postService from "../services/postService.js";

// Function for uploading post
export const uploadPost = async (req, res) => {
  const result = await postService.uploadPost(req);
  if (result == "fileNotFound")
    return res.status(400).send({
      status: "failed",
      message: "File not found!",
    });
  else if (result == "uploaded")
    return res.status(200).json({
      status: "success",
      message: "post uploaded successfully",
    });
  else
    return res.status(500).send({
      status: "failed",
      message: "An error occurred during the upload",
    });
};

// Function for fetching All video posts
export const fetchAllVideos = async (req, res) => {
  // Get page and limit from query parameters, set defaults if not provided
  const page = parseInt(req.query.page) || 1; // Default to page 1
  const limit = parseInt(req.query.limit) || 10; // Default to 10 images per page
  console.log("page-->", page);
  console.log("limit-->", limit);
  // Calculate offset
  const offset = (page - 1) * limit;
  const result = await postService.fetchAllVideos({ page, limit, offset });
  res.status(200).json({
    status: "success",
    message: "post retrieved successfully",
    data: result,
  });
};

// Function for fetching All Images posts
export const fetchAllImages = async (req, res) => {
  const result = await postService.fetchAllImages();
  res.status(200).json({
    status: "success",
    message: "post retrieved successfully",
    data: result,
  });
};

// Function for fetching Posts by ID
export const fetchPostById = async (req, res) => {
  const result = await postService.fetchPostById(req);
  res.status(200).json({
    status: "success",
    message: "post retrieved successfully",
    data: result,
  });
};

export const deletePost = async (req, res) => {
  const result = await postService.deletePost(req);
  if (result)
    res.status(200).json({
      status: "success",
      message: "post deleted successfully",
    });
  else
    res.status(500).json({
      status: "failed",
      message: "Either user is not the owner or post already deleted!",
    });
};

export const uploadImages = async (req, res) => {
  try {
    // Handle multiple image uploads, max 10 images
    const uploadedFiles = req.files; // Use req.files to access the array of files
    res.send(
      `Images uploaded: ${uploadedFiles.map((file) => file.path).join(", ")}`
    );
  } catch (error) {
    res.status(400).send("Error uploading images");
  }
};
