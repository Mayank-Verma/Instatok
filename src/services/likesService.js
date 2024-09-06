import Likes from "../database/models/likes.js";
import User from "../database//models/user.js";
import Post from "../database/models/post.js";

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

export async function getPostLikes(data) {
  console.log(Likes.associations);
  try {
    const { postId } = data;
    let userIDList = await Post.findAll({
      attributes: [
        "id",
        "username",
        "email",
        "profilePicture",
        "firstName",
        "lastName",
      ], // Fetch only the required user attributes

      where: {
        id: postId,
      },
      include: [
        {
          model: Likes,
          include: [
            {
              model: User, // Include the Likes model
              // attributes: [], // Exclude all attributes from the join table
              // where: { i }, // Filter likes by the specific post ID
            },
          ],
          // Include the Likes model
          // attributes: [], // Exclude all attributes from the join table
        },
      ],
    });

    return userIDList;
  } catch (err) {
    console.log("Error message:", err.message);
    return null;
  }
}
