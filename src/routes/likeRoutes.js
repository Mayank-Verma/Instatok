import express from "express";
import {
  AddPostsLike,
  getPostsLike,
  unlikePost,
} from "../controllers/likeController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/:postId/likes", authenticate, AddPostsLike);
router.post("/:postId/unlike", authenticate, unlikePost);
router.get("/:postId/likes", authenticate, getPostsLike);

export default router;
