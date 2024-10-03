import express from "express";
import {
  uploadImageConfiguration,
  uploadVideoConfiguration,
} from "../config/multer.js";
import {
  uploadPost,
  fetchAllVideos,
  fetchAllImages,
  fetchPostById,
  deletePost,
} from "../controllers/postController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post(
  "/post-upload/video",
  authenticate,
  uploadVideoConfiguration.single("video"),
  uploadPost
);

router.post(
  "/post-upload/image",
  authenticate,
  uploadImageConfiguration.single("image"),
  uploadPost
);

router.get("/fetchPosts/videos", authenticate, fetchAllVideos);
router.get("/fetchPosts/images", authenticate, fetchAllImages);
router.get("/fetchPosts/:postId", authenticate, fetchPostById);
router.delete("/post/:postId", authenticate, deletePost);

export default router;
