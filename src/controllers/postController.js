import supabase from "../config/supabase.js";
import Post from "../models/post.js";
import User from "../models/user.js";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";
import jwt from "jsonwebtoken";

const CDNURL = `https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/`;

// Function for uploading post
export const uploadVideo = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }

  // Getting userId from header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  const { id: userId } = jwt.decode(token);

  // To check if UUID is a vaid UUID
  console.log(uuidValidate(userId));
  if (!uuidValidate(userId)) {
    return res.status(400).send({
      status: "failed",
      message: "Not a valid User ID!",
    });
  }

  // To check if UUID belongs to actual user present in DB
  const user = await User.findOne({ where: { id: userId } });
  if (user === null) {
    return res.status(400).send({
      status: "failed",
      message: "User not found, Not allowed to upload post!",
    });
  }

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
    res.json({
      status: "success",
      message: "Video uploaded successfully",
      "post link": `${postLink}`,
    });
    Post.create({ post: postLink, userId: userId });
  } catch (error) {
    console.error("Error uploading to Supabase:", error.message);
    res.status(500).send("An error occurred during the upload");
  }
};

// Function for fetching All posts
export const fetchAllPosts = async (req, res) => {
  const result = await Post.findAll();
  res.status(200).json(result);
};

// Function for fetching Posts by ID
export const fetchPostById = async (req, res) => {
  console.log(req.params.id);

  const result = await Post.findByPk(`${req.params.id}`);
  res.status(200).json(result);
};
