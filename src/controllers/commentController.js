import * as commentService from "../services/commentService.js";
export const addPostComment = async (req, res) => {
  const result = await commentService.addPostComment(req);
  if (result)
    res.status(200).json({
      status: "success",
      message: "comment added successfully on post!",
    });
  else
    res.status(500).json({
      status: "failed",
      message: "Something went wrong!",
    });
};
export const getPostComments = (req, res) => {
  res.status(200).json({
    status: "pending",
    message: "Work in progress, this feature will be available soon!",
  });
};
