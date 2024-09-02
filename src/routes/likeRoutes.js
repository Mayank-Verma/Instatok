import express from "express";
import {
  addPostsLike,
  getPostLikes,
  unlikePost,
} from "../controllers/likeController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/:postId/like", authenticate, addPostsLike);
router.delete("/:postId/like", authenticate, unlikePost);
router.get("/:postId/like", authenticate, getPostLikes);

export default router;
