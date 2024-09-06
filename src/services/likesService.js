import Likes from "../database/models/likes.js";
import User from "../database//models/user.js";

export async function addPostsLike(data) {
  const { userId, postId } = data;
  try {
    const row = await Likes.findOne({
      where: { userId, postId },
    });
    // Check if the row exists
    if (row === null) {
      await Likes.create({ userId, postId });
      return "success";
    }
    // If the like is already active
    if (row) {
      return "alreadyLiked";
    }
    return "failed"; // Fallback if no condition was met
  } catch (error) {
    console.error("Error in addPostsLike:", error);
    return "failed";
  }
}

export async function unlikePost(data) {
  const { userId, postId } = data;

  const row = await Likes.findOne({ where: { userId, postId } });
  if (row === null) {
    // no liked post found
    return false;
  }
  try {
    await Likes.destroy({ userId, postId });
    return true;
  } catch (error) {
    console.log("Error in unliking the post: ", error);
    return false;
  }
}

export async function getPostLikes(postId) {
  try {
    const likesCount = await Likes.count({
      where: {
        postId,
      },
    });
    const userList = await Likes.findAll({
      where: {
        postId,
      },
      attributes: [], // We don't need the likes details in the response
      include: [
        {
          model: User, // Include user details
          attributes: ["username", "firstName", "lastName", "profilePicture"], // Fetch required user fields
        },
      ],
    });
    return {
      likesCount,
      userList,
    };
  } catch (err) {
    console.log("Error message:", err.message);
    return null;
  }
}
