import express from "express";
import upload from "../config/multer.js";
import {
  uploadVideo,
  fetchAllPosts,
  fetchPostById,
  deletePost,
} from "../controllers/postController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/post-upload", authenticate, upload.single("video"), uploadVideo);
router.get("/fetchPosts", authenticate, fetchAllPosts);
router.get("/fetchPosts/:id", authenticate, fetchPostById);
router.delete("/post/:postId", authenticate, deletePost);

export default router;
