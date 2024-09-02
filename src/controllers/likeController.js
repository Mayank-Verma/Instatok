import * as likesService from "../services/likesService.js";
import verifyTokenFromAuthorizationAndGetPayload from "../utils/verifyTokenFromAuthorizationAndGetPayload.js";

export const addPostsLike = async (req, res) => {
  try {
    const payload = verifyTokenFromAuthorizationAndGetPayload(
      req.headers.authorization
    );
    const postId = req.params.postId;
    const result = await likesService.addPostsLike({
      userId: payload.id,
      postId,
    });

    if (result === "success") {
      res
        .status(200)
        .json({ status: "success", message: "Post liked successfully!" });
    } else if (result === "alreadyLiked") {
      res.status(200).json({
        status: "Success",
        message: "User has already liked this post",
      });
    } else {
      res.status(500).json({
        status: "failed",
        message: "Something went wrong!",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Something went wrong!",
      error: error.message,
    });
  }
};

export const getPostLikes = async (req, res) => {
  try {
    const postId = req.params.postId;
    const result = await likesService.getPostLikes({
      postId,
    });
    console.log("result->", result);

    if (result !== null)
      res.status(200).json({
        status: "success",
        message: "Post likes retrieved succesfully!",
        totalLikes: `${result.length}`,
        data: result,
      });
    else
      res.status(400).json({
        status: "failed",
        message: "unable to retrieve data",
        data: result,
      });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong!",
    });
  }
};

export const unlikePost = async (req, res) => {
  try {
    const payload = verifyTokenFromAuthorizationAndGetPayload(
      req.headers.authorization
    );
    const postId = req.params.postId;
    const result = await likesService.unlikePost({
      userId: payload.id,
      postId,
    });
    if (result === true)
      res.status(200).json({
        status: "success",
        message: "User's like successfully removed from post",
      });
    else
      res.status(400).json({
        status: "failed",
        message: "Like not found, or already removed",
      });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong",
      error: err.message,
    });
  }
};
