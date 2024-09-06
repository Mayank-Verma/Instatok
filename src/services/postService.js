import { v4 as uuidv4, validate as uuidValidate } from "uuid";
import supabase from "../config/supabase.js";
import Post from "../database/models/post.js";
import verifyTokenFromAuthorizationAndGetPayload from "../utils/verifyTokenFromAuthorizationAndGetPayload.js";

const CDNURL = `https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/`;

export async function uploadVideo(req) {
  if (!req.file) {
    return "fileNotFound";
  }
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
      .from("videos")
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
    });
    return "uploaded";
  } catch (error) {
    console.error("Error uploading to Supabase:", error.message);
    return "error";
  }
}

export async function fetchAllPosts() {
  try {
    return await Post.findAll();
  } catch (err) {
    console.log("error while fetching post", err);
  }
}

export async function fetchPostById(req) {
  try {
    return await Post.findByPk(`${req.params.id}`);
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
