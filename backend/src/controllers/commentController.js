import * as commentService from "../services/commentService.js";
export const addPostComment = async (req, res) => {
  const result = await commentService.addPostComment(req);
  if (result)
    res.status(200).json({
      status: "success",
      message: "comment added successfully on post!",
    });
  else if (result === null)
    res.status(400).json({
      status: "failed",
      message: "comment is required!",
    });
  else
    res.status(500).json({
      status: "failed",
      message: "Something went wrong!",
    });
};
export const getPostComments = async (req, res) => {
  const result = await commentService.getPostComments(req);
  if (result)
    res.status(200).json({
      status: "success",
      message: "comments on post retrieved successfully!",
      data: result,
    });
  else
    res.status(500).json({
      status: "failed",
      message: "Something went wrong!",
    });
};

export const deleteComment = async (req, res) => {
  const result = await commentService.deleteComment(req);
  if (result)
    res.status(200).json({
      status: "success",
      message: "comment on post deleted successfully!",
    });
  else
    res.status(500).json({
      status: "failed",
      message: "Either user not authorized or comment is unavailable!",
    });
};
