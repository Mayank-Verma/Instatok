import { v4 as uuidv4, validate as uuidValidate } from "uuid";
import { Sequelize, where } from "sequelize";
import supabase from "../config/supabase.js";
import Post from "../database/models/post.js";
import verifyTokenFromAuthorizationAndGetPayload from "../utils/verifyTokenFromAuthorizationAndGetPayload.js";
import Likes from "../database/models/likes.js";
import Comment from "../database/models/comments.js";
import User from "../database/models/user.js";

const CDNURL = `https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/posts/`;

export async function uploadPost(req) {
  if (!req.file) return "fileNotFound";

  // Extracting description, isPublic and allowComments values of post from the request object
  const description = req.body.description;
  const isPublic = req.body.isPublic == undefined ? true : req.body.isPublic;
  const allowComments =
    req.body.allowComments == undefined ? true : req.body.allowComments;
  // Getting userId from header
  const { id: userId } = verifyTokenFromAuthorizationAndGetPayload(
    req.headers.authorization
  );

  try {
    const fileName = `${userId}-${uuidv4()}`;
    const { data, error } = await supabase.storage
      .from("posts")
      .upload(fileName, req.file.buffer, {
        cacheControl: "3600",
        upsert: false,
        contentType: req.file.mimetype,
      });

    if (error) throw error;
    const postLink = CDNURL + fileName;
    await Post.create({
      post: postLink,
      userId: userId,
      description,
      isPublic,
      allowComments,
      type: req.file.mimetype.startsWith("video/") ? "video" : "image",
    });
    return "uploaded";
  } catch (error) {
    console.error("Error uploading to Supabase:", error.message);
    return "error";
  }
}

export async function fetchAllVideos() {
  try {
    return await Post.findAll({
      where: { type: "video" },
      attributes: [
        "id",
        "post",
        "type",
        "description",
        "isPublic",
        "allowComments",
        [
          Sequelize.fn(
            "COUNT",
            Sequelize.fn("DISTINCT", Sequelize.col("Likes.id"))
          ),
          "likesCount",
        ], // Count distinct likes
        [
          Sequelize.fn(
            "COUNT",
            Sequelize.fn("DISTINCT", Sequelize.col("Comments.id"))
          ),
          "commentsCount",
        ], // Count distinct comments
      ],
      include: [
        {
          model: Likes,
          attributes: [], // Exclude individual like details
        },
        {
          model: Comment,
          attributes: [], // Exclude individual comment details
        },
        {
          model: User,
          as: "uploadedBy",
          required: false,
          attributes: [
            "id",
            "username",
            "firstName",
            "lastName",
            "profilePicture",
            "updatedAt",
          ],
        },
      ],
      group: ["Post.id", "uploadedBy.id"], // Group by post ID to ensure accurate counting
    });
  } catch (err) {
    console.log("error while fetching post", err);
  }
}

export async function fetchAllImages() {
  try {
    return await Post.findAll({
      where: { type: "image" },
      attributes: [
        "id",
        "post",
        "type",
        "description",
        "isPublic",
        "allowComments",
        "updatedAt",
        [
          Sequelize.fn(
            "COUNT",
            Sequelize.fn("DISTINCT", Sequelize.col("Likes.id"))
          ),
          "likesCount",
        ], // Count distinct likes
        [
          Sequelize.fn(
            "COUNT",
            Sequelize.fn("DISTINCT", Sequelize.col("Comments.id"))
          ),
          "commentsCount",
        ], // Count distinct comments
      ],
      include: [
        {
          required: false,
          model: Likes,
          attributes: [], // Exclude individual like details
        },
        {
          required: false,
          model: Comment,
          attributes: [], // Exclude individual comment details
        },
        {
          model: User,
          as: "uploadedBy",
          required: false,
          attributes: [
            "id",
            "username",
            "firstName",
            "lastName",
            "profilePicture",
            "updatedAt",
          ],
        },
      ],
      group: ["Post.id", "uploadedBy.id"], // Group by post ID to ensure accurate counting
      order: [["updatedAt", "DESC"]],
    });
  } catch (err) {
    console.log("error while fetching post", err);
  }
}

export async function fetchPostById(req) {
  try {
    const postId = req.params.postId;
    return await Post.findOne({
      attributes: [
        "id",
        "post",
        "description",
        "isPublic",
        "allowComments",
        [
          Sequelize.fn(
            "COUNT",
            Sequelize.fn("DISTINCT", Sequelize.col("Likes.id"))
          ),
          "likesCount",
        ], // Count distinct likes
        [
          Sequelize.fn(
            "COUNT",
            Sequelize.fn("DISTINCT", Sequelize.col("Comments.id"))
          ),
          "commentsCount",
        ], // Count distinct comments
      ],
      include: [
        {
          required: false,
          model: Likes,
          attributes: [], // Exclude individual like details
        },
        {
          required: false,
          model: Comment,
          attributes: [], // Exclude individual comment details
        },
        {
          model: User,
          as: "uploadedBy",
          required: false,
          attributes: ["id", "username", "firstName", "lastName"],
        },
      ],
      where: { id: postId },
      group: ["Post.id", "uploadedBy.id"], // Group by post ID to ensure accurate counting
    });
  } catch (error) {
    console.log("error in fetching post by id", error);
  }
}

export async function deletePost(req) {
  try {
    const postId = req.params.postId;
    const { id: userId } = verifyTokenFromAuthorizationAndGetPayload(
      req.headers.authorization
    );
    const postToBeDeleted = await Post.findOne({
      where: { userId, id: postId },
    });
    if (postToBeDeleted === null) return false;
    const postToBeDeletedName = postToBeDeleted.dataValues.post.slice(73);

    // Deleting from the supabase storage
    const { data, error } = await supabase.storage
      .from("videos") // specify the bucket
      .remove([postToBeDeletedName]);
    if (error) console.log("error in delete the post from supabase: ", error);
    // Delete from the Postgres database
    await Post.destroy({ where: { id: postId } });
    return true;
  } catch (err) {
    console.log("Error in deleting post: ", err);
    return false;
  }
}
