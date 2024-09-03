import { Op } from "sequelize";
import Likes from "../models/likes.js";
import User from "../models/user.js";
import Post from "../models/post.js";

export async function addPostsLike(data) {
  const { userId, postId } = data;

  try {
    const row = await Likes.findOne({
      where: { userId, postId },
    });

    // Check if the row exists
    if (row === null) {
      await Likes.create({ userId, postId, isActive: true });
      return "success";
    }

    // Check if the like was previously inactive
    if (row.isActive === false) {
      const [updatedRows] = await Likes.update(
        { isActive: true },
        {
          where: {
            userId,
            postId,
          },
        }
      );

      if (updatedRows > 0) return "success";
      else return "failed"; // In case update did not succeed
    }

    // If the like is already active
    if (row.isActive === true) {
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
  console.log("user Id", userId);
  console.log("post Id", postId);

  const row = await Likes.findOne({ where: { userId, postId } });
  console.log("row->", row);

  if (row === null) {
    // no liked post found
    return false;
  }

  if (row.dataValues.isActive == false) return false;
  const [updatedRows] = await Likes.update(
    { isActive: false },
    {
      where: {
        userId,
        postId,
      },
    }
  );
  if (updatedRows > 0) return true;
}

export async function getPostLikes(data) {
  console.log(Likes.associations);
  try {
    const { postId } = data;
    let userIDList = await User.findAll({
      attributes: [
        "id",
        "username",
        "email",
        "profilePicture",
        "firstName",
        "lastName",
      ], // Fetch only the required user attributes
      include: [
        {
          model: Likes, // Include the Likes model
          attributes: [], // Exclude all attributes from the join table
          where: { id: postId }, // Filter likes by the specific post ID
        },
      ],
    });

    return userIDList;
  } catch (err) {
    console.log("Error message:", err.message);
    return null;
  }
}
