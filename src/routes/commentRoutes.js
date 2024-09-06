import express from "express";
import {
  getPostComments,
  addPostComment,
  deleteComment,
} from "../controllers/commentController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/comment/:postId", authenticate, getPostComments);
router.post("/comment/:postId", authenticate, addPostComment);
router.delete("/comment/:postId", authenticate, deleteComment);

export default router;
