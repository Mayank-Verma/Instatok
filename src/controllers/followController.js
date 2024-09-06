import * as followService from "../services/followService.js";

export const startFollowing = async (req, res) => {
  const result = await followService.startFollowing(req);
  if (result === "success")
    res
      .status(200)
      .json({ status: "success", message: "Started following user!" });
  else if (result === "alreadyFollowing")
    res
      .status(200)
      .json({ status: "success", message: "Already following the user!" });
  else if (result === "followSelf")
    res
      .status(401)
      .json({ status: "failed", message: "cannot follow to self" });
  else
    res
      .status(500)
      .json({ status: "failed", message: "unable to follow user" });
};

export const unFollow = async (req, res) => {
  const result = await followService.unFollow(req);
  if (result === "success")
    res.status(200).json({ status: "success", message: "unfollowed user!" });
  else if (result === "alreadyUnfollowed")
    res.status(200).json({
      status: "success",
      message:
        "Already unfollowed the user, or was not following from the beginning!",
    });
  else
    res
      .status(500)
      .json({ status: "failed", message: "unable to unfollow the user" });
};

export const getFollowers = async (req, res) => {
  const result = await followService.getFollowers(req);
  if (result)
    res.status(200).json({
      status: "success",
      message: "Followers list retrieved successfully",
      data: result,
    });
  else
    res.status(500).json({
      status: "failed",
      message: "unable to retrieve followers's list",
    });
};

export const getFollowing = async (req, res) => {
  const result = await followService.getFollowing(req);
  if (result)
    res.status(200).json({
      status: "success",
      message: "Following list retrieved successfully",
      data: result,
    });
  else
    res
      .status(500)
      .json({ status: "failed", message: "unable to retrieve following list" });
};
