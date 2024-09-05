import * as postService from "../services/postService.js";

// Function for uploading post
export const uploadVideo = async (req, res) => {
  const result = await postService.uploadVideo(req);
  if (result == "fileNotFound")
    return res.status(400).send({
      status: "failed",
      message: "File not found!",
    });
  else if (result == "uploaded")
    return res.status(200).json({
      status: "success",
      message: "Video uploaded successfully",
    });
  else
    return res.status(500).send({
      status: "failed",
      message: "An error occurred during the upload",
    });
};

// Function for fetching All posts
export const fetchAllPosts = async (req, res) => {
  const result = await postService.fetchAllPosts();
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
