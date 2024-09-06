import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import {
  startFollowing,
  unFollow,
  getFollowing,
  getFollowers,
} from "../controllers/followController.js";
const router = express.Router();

router.post("/follow/:userId", authenticate, startFollowing);
router.delete("/follow/:userId", authenticate, unFollow);
router.get("/followers/:userId", authenticate, getFollowers);
router.get("/following/:userId", authenticate, getFollowing);

export default router;
