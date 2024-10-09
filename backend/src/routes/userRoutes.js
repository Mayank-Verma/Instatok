import express from "express";
import {
  signup,
  login,
  getUser,
  getAllUsers,
  resendOtp,
  updateUserInfo,
  renewToken,
  getUserProfile,
} from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/resendOtp", resendOtp);
router.post("/refreshToken", renewToken);
router.get("/myProfile", authenticate, getUserProfile);
router.put("/updateUserInfo", authenticate, updateUserInfo);
router.get("/users/:id", authenticate, getUser);
router.get("/users", authenticate, getAllUsers);

export default router;
