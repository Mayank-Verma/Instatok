import express from "express";
import {
  addPostsLike,
  getPostLikes,
  unlikePost,
} from "../controllers/likeController.js";
import { authenticate } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/post/:postId/like", authenticate, addPostsLike);
router.delete("/post/:postId/unlike", authenticate, unlikePost);
router.get("/post/:postId/like", authenticate, getPostLikes);

export default router;
