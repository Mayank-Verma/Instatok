import User from "../models/user.js";
import Verification from "../models/verification.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateOtp } from "../utils/otpGenerator.js";
import otpService from "./otpService.js";
import { emailToUsername } from "../utils/emailToUsername.js";
import { up } from "../database/migrations/add-otp-to-users.cjs";

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || "your_jwt_secret";
const otpExpirtyDuration = 10; //10 Minutes

export async function createUser(data) {
  const { email } = data;
  const otp = generateOtp();
  await otpService.sendOtp(email, otp);
  const currentTime = new Date();
  const expiryTime = new Date(
    currentTime.getTime() + otpExpirtyDuration * 60000
  ); // Set expiry time in minutes

  // To check if user has already tried signup before
  const user = await Verification.findOne({ where: { email } });
  if (user) {
    const user = await Verification.update(
      { otp, expiresAt: expiryTime },
      {
        where: {
          email,
        },
      }
    );
    return user;
  }

  try {
    const user = await Verification.create({
      email,
      otp,
      expiresAt: expiryTime,
    });

    return user;
  } catch (error) {
    console.error(error.message); // Logging the error
    throw new Error("Failed to create user and store verification data"); // Throw the error so it can be handled by the caller
  }
}

export async function getUserById(id) {
  return await User.findByPk(id);
}

export async function getAllUsers() {
  return await User.findAll();
}

export async function verifyUser(data, res) {
  const { email, otp } = data;

  try {
    let user = await Verification.findOne({ where: { email: email } });
    // If user is not Found in DB
    if (user === null) {
      return res.status(404).json({
        status: "failed",
        message: "Not an existing user, kindly signup!",
      });
    }
    //Check for user if already verified
    if (user.dataValues.isUsed === true)
      return res.json({
        status: "Success",
        message: "Successful Login!",
      });
    // check for Wrong OTP
    if (user.dataValues.otp != otp)
      return res.json({ status: "Failed", message: "Wrong OTP" });
    //Check for Expired OTP:
    let currentTime = new Date();
    if (user.dataValues.expiresAt < currentTime)
      return res.json({ status: "Failed", message: "OTP is Expired" });
    console.log("ExpiredTime", user.dataValues.expiresAt);
    console.log("current Time", currentTime);

    if (user) {
      const [updatedRows] = await Verification.update(
        { isUsed: true },
        { where: { email: email } }
      );

      // Creating new User in user table post verification
      User.create({
        id: user.dataValues.id,
        username: emailToUsername(email),
        email,
      });

      if (updatedRows > 0) {
        return res
          .status(200)
          .json({ status: "Success", message: "User verified successfully!" });
      } else {
        return res
          .status(500)
          .json({ status: "Failed", message: "Invalid credentials!" });
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export async function resendOtp(req, res) {
  const { email } = req.body;
  const user = await Verification.findOne({ where: { email } });
  if (user.dataValues.isUsed === true) {
    return res.json({ status: "failed", message: "User is already verified" });
  }
  const otp = generateOtp();
  await otpService.sendOtp(email, otp);
  const currentTime = new Date();
  const expiryTime = new Date(
    currentTime.getTime() + otpExpirtyDuration * 60000
  ); // Set expiry time in minutes
  const updatedRows = await Verification.update(
    { otp, expiresAt: expiryTime },
    {
      where: {
        email,
      },
    }
  );
  return updatedRows;
}

export async function updateUserInfo(req) {
  let bio = null,
    profilePicture = null,
    website = null,
    firstName = null,
    lastName = null,
    gender = null,
    DOB = null,
    email = null;
  ({ bio, profilePicture, website, firstName, lastName, gender, DOB, email } =
    req.body);
  const [updatedRows] = await User.update(
    { bio, profilePicture, website, firstName, lastName, gender, DOB },
    { where: { email } }
  );
  return updatedRows;
}
