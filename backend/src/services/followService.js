import Follower from "../database/models/follower.js";
import User from "../database/models/user.js";
import verifyTokenFromAuthorizationAndGetPayload from "../utils/verifyTokenFromAuthorizationAndGetPayload.js";

export async function startFollowing(req) {
  try {
    const following_id = req.params.userId;
    const { id: follower_id } = verifyTokenFromAuthorizationAndGetPayload(
      req.headers.authorization
    );

    // Condition to check if trying to follow self
    if (follower_id === following_id) return "followSelf";

    const isAlreadyFollowing = await Follower.findOne({
      where: { follower_id, following_id },
    });
    if (isAlreadyFollowing === null) {
      await Follower.create({ follower_id, following_id });
      return "success";
    } else {
      return "alreadyFollowing";
    }
  } catch (error) {
    console.log("Error in following the user: ", error);
    return "failed";
  }
}

export async function unFollow(req) {
  try {
    const following_id = req.params.userId;
    const { id: follower_id } = verifyTokenFromAuthorizationAndGetPayload(
      req.headers.authorization
    );
    const isAlreadyUnfollowed = await Follower.findOne({
      where: { follower_id, following_id },
    });
    if (isAlreadyUnfollowed === null) {
      return "alreadyUnfollowed";
    } else {
      await Follower.destroy({ where: { follower_id, following_id } });
      return "success";
    }
  } catch (error) {
    console.log("Error in unfollowing the user: ", error);
    return "failed";
  }
}

export async function getFollowers(req) {
  try {
    const userId = req.params.userId;
    const followersList = await Follower.findAll({
      attributes: [],
      where: { following_id: userId },
      include: [
        {
          model: User,
          as: "FollowerUser", // Use alias for followers
          attributes: ["firstName", "lastName", "username"], // Adjust attributes as needed
        },
      ],
    });
    return followersList;
  } catch (error) {
    console.log("Error in getting follower's list: ", error);
    return "failed";
  }
}

export async function getFollowing(req) {
  try {
    const userId = req.params.userId;
    const followingList = await Follower.findAll({
      attributes: [],
      where: { follower_id: userId },
      include: [
        {
          model: User,
          as: "FollowingUser", // Use alias for users being followed
          attributes: ["firstName", "lastName", "username"], // Adjust attributes as needed
        },
      ],
    });
    return followingList;
  } catch (error) {
    console.log("Error in getting follower's list: ", error);
    return "failed";
  }
}
