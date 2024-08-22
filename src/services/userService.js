import User from "../models/user.js";
import Verification from "../models/verification.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateOtp } from "../utils/otpGenerator.js";
import otpService from "./otpService.js";

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || "your_jwt_secret";
const otpExpirtyDuration=10; //10 Minutes

export async function createUser(data) {
  const { email } = data;
  const otp = generateOtp();
  try {
    // const hashedPassword = await bcrypt.hash(password, saltRounds);
    await otpService.sendOtp(email, otp);
    const currentTime=new Date();
    const expirtyTime= currentTime.setMinutes(currentTime.getMinutes()+otpExpirtyDuration);
    const user = await Verification.create({ email, otp ,expiresAt:expirtyTime});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  return await Verification.create({ email, otp ,expiresAt:expirtyTime});
}

export async function getUserById(id) {
  return await User.findByPk(id);
}

export async function getAllUsers() {
  return await User.findAll();
}

export async function verifyUser(data) {
  const { username, email, otp } = data;
  try {
    let user;
    if (!email && username)
      user = await User.findOne({ where: { otp: otp, username: username } });
    else user = await User.findOne({ where: { otp: otp, email: email } });
    if (user) {
      const [updatedRows] = await User.update(
        { isVerified: true },
        { where: { otp: otp, email: email } }
      );

      if (updatedRows > 0) {
        console.log("User verified successfully!");
      } else {
        console.log("Invalid credentials!");
      }
    }
    return user;
  } catch (err) {
    res.status(500).json({ status: "Failed", message: "Invalid credentials!" });
  }
}
