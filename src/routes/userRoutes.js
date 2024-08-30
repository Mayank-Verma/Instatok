import express from "express";
import {
  createUser,
  verifyUser,
  getUser,
  getAllUsers,
  resendOtp,
  updateUserInfo,
  renewToken,
} from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", verifyUser);
router.get("/resendOtp", resendOtp);
router.get("/refreshToken", renewToken);
router.put("/updateUserInfo", authenticate, updateUserInfo);
router.get("/users/:id", authenticate, getUser);
router.get("/users", authenticate, getAllUsers);

export default router;
