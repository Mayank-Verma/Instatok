import express from "express";
import {
  uploadImageConfiguration,
  uploadVideoConfiguration,
} from "../config/multer.js";
import {
  uploadVideo,
  fetchAllPosts,
  fetchPostById,
  deletePost,
  uploadImages,
} from "../controllers/postController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post(
  "/post-upload/video",
  authenticate,
  uploadVideoConfiguration.single("video"),
  uploadVideo
);

router.post(
  "/post-upload/image",
  authenticate,
  uploadImageConfiguration.array("images", 10),
  uploadImages
);

router.get("/fetchPosts", authenticate, fetchAllPosts);
router.get("/fetchPosts/:postId", authenticate, fetchPostById);
router.delete("/post/:postId", authenticate, deletePost);

export default router;
