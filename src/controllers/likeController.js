export const AddPostsLike = (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "You have reach right place!" });
};
export const getPostsLike = (req, res) => {
  res.status(200).json({
    status: "pending",
    message: "Work in progress, this feature will be available soon!",
  });
};

export const unlikePost = (req, res) => {
  res.status(200).json({
    status: "pending",
    message: "Work in progress, this feature will be available soon!",
  });
};
