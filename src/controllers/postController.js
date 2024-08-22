import supabase from "../config/supabase.js";
import Post from "../models/post.js";
import User from "../models/user.js";
import { v4 as uuidv4 ,validate as uuidValidate} from "uuid";

const CDNURL = `https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/`;


// Function for uploading post
export const uploadVideo = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }

  // To check if UUID is a vaid UUID 
  console.log(uuidValidate(req.body.userId))
  if(!uuidValidate(req.body.userId)){
    return res.status(400).send({status:"failed",message:"Invalid User ID, kindly provide a valid UUID"})
  }

  // To check if UUID belongs to actual user present in DB
  const user = await User.findOne({ where: { id: req.body.userId } });
  if(user===null){
    return res.status(400).send({status:"failed",message:"User is not verified, not allowed to upload post"})
  }


  try {
    const fileName = `${uuidv4()}-${req.file.originalname}`;
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
    Post.create({ post: postLink, userId: req.body.userId });
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
