import Comment from "../database/models/comments.js";
import User from "../database/models/user.js";
import verifyTokenFromAuthorizationAndGetPayload from "../utils/verifyTokenFromAuthorizationAndGetPayload.js";

export async function addPostComment(req) {
  const { id: userId } = verifyTokenFromAuthorizationAndGetPayload(
    req.headers.authorization
  );
  const postId = req.params.postId;
  const comment = req.body.comment;
  if (comment == null) return null;
  const data = await Comment.create({ postId, userId, comment });
  if (data) return true;
  else false;
}

export async function getPostComments(req) {
  try {
    const postId = req.params.postId;
    const result = await Comment.findAll({
      where: { postId },
      attributes: ["comment"],
      include: [
        {
          model: User,
          required: false,
          attributes: ["username", "firstName", "lastName", "profilePicture"],
        },
      ],
    });
    return result;
  } catch (err) {
    console.log("Something went wrong while getting comments: ", err);
    return false;
  }
}

export async function deleteComment(req) {
  try {
    const postId = req.params.postId;
    const { id: userId } = verifyTokenFromAuthorizationAndGetPayload(
      req.headers.authorization
    );
    const comment = await Comment.findOne({ where: { userId, postId } });
    if (comment === null) return false;
    // deleting comment
    Comment.destroy({ where: { userId, postId } });
    return true;
  } catch (error) {
    console.log("Error in deleting comment: ", error);
    return false;
  }
}
