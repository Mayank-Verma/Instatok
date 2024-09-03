import { Model } from "sequelize";
import Comment from "../models/comments.js";
import Post from "../models/post.js";
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
  const { id: userId } = verifyTokenFromAuthorizationAndGetPayload(
    req.headers.authorization
  );
}
