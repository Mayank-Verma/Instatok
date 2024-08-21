import express from "express";
import upload from "../config/multer.js";
import {
  uploadVideo,
  fetchAllPosts,
  fetchPostById,
} from "../controllers/uploadController.js";

const router = express.Router();

router.post("/post-upload", upload.single("video"), uploadVideo);
router.get("/fetchPosts", fetchAllPosts);
router.get("/fetchPosts/:id", fetchPostById);

export default router;
