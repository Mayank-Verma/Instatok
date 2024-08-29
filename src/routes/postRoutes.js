import express from "express";
import upload from "../config/multer.js";
import {
  uploadVideo,
  fetchAllPosts,
  fetchPostById,
} from "../controllers/postController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/post-upload", authenticate, upload.single("video"), uploadVideo);
router.get("/fetchPosts", authenticate, fetchAllPosts);
router.get("/fetchPosts/:id", authenticate, fetchPostById);

export default router;
