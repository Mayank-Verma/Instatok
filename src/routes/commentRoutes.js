// commentsRoutes.js
import express from "express";
import {
  getPostComments,
  addPostComment,
} from "../controllers/commentController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/comment/:postId", authenticate, getPostComments);
router.post("/comment/:postId", authenticate, addPostComment);

export default router;
