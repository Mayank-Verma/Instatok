// commentsRoutes.js
import express from "express";
import {
  getPostComments,
  addPostComment,
} from "../controllers/commentController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/:postId/comments", authenticate, getPostComments);
router.post("/:postId/comments", authenticate, addPostComment);

export default router;
