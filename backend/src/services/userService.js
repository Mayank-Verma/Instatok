import User from "../database/models/user.js";
import Verification from "../database/models/verification.js";
import { generateOtp } from "../utils/otpGenerator.js";
import otpService from "./otpService.js";
import { emailToUsername } from "../utils/emailToUsername.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateTokens.js";
import RefreshTokens from "../database/models/refresh_tokens.js";
import verifyTokenFromAuthorizationAndGetPayload from "../utils/verifyTokenFromAuthorizationAndGetPayload.js";
import Post from "../database/models/post.js";
import Likes from "../database/models/likes.js";
import Comment from "../database/models/comments.js";

const otpExpirtyDuration = 10; //10 Minutes

export async function signup(req, res) {
  const { email, firstName, lastName, otp } = req.body;

  try {
    let user = await Verification.findOne({ where: { email } });

    // If user is not Found in DB
    if (user === null) {
      return res.status(404).json({
        status: "failed",
        message: "Not an existing user, kindly signup!",
      });
    }

    // check for Wrong OTP
    if (user.dataValues.otp != otp)
      return res.status(400).json({ status: "Failed", message: "Wrong OTP" });
    //Check for Expired OTP:
    let currentTime = new Date();
    if (user.dataValues.expiresAt < currentTime)
      return res
        .status(400)
        .json({ status: "Failed", message: "OTP is Expired" });

    // Updating isUsed column in verification table
    await Verification.update({ isUsed: true }, { where: { email: email } });

    // Creating new User in user table after successful verification
    await User.create({
      id: user.dataValues.id,
      username: emailToUsername(email),
      email,
      firstName,
      lastName,
    });

    if (user) {
      const [updatedRows] = await Verification.update(
        { isUsed: true },
        { where: { email: email } }
      );
    }

    // Generating access token and refresh token
    const accessToken = generateAccessToken(user.dataValues);
    const refreshToken = generateRefreshToken(user.dataValues);

    return res.status(200).json({
      status: "success",
      message: "Successful signup!",
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.log("error in creating user and signup");
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong!",
      error: err,
    });
  }

  // const otp = generateOtp();
  // await otpService.sendOtp(email, otp);
  // const currentTime = new Date();
  // const expiryTime = new Date(
  // currentTime.getTime() + otpExpirtyDuration * 60000
  // ); // Set expiry time in minutes

  // To check if user has already tried signup before
  // const user = await Verification.findOne({ where: { email } });
  // if (user) {
  //   const user = await Verification.update(
  //     { otp, expiresAt: expiryTime },
  //     {
  //       where: {
  //         email,
  //       },
  //     }
  //   );
  //   return user;
  // }

  // try {
  //   const user = await Verification.create({
  //     email,
  //     otp,
  //     expiresAt: expiryTime,
  //   });

  //   return user;
  // } catch (error) {
  //   console.error(error.message); // Logging the error
  //   throw new Error("Failed to create user and store verification data"); // Throw the error so it can be handled by the caller
  // }
}

export async function getUserById(id) {
  return await User.findOne({
    attributes: [
      "id",
      "username",
      "email",
      "profilePicture",
      "website",
      "firstName",
      "lastName",
      "gender",
      "DOB",
      "bio",
    ],
    where: {
      id,
    },
  });
}

export async function getAllUsers() {
  return await User.findAll({
    attributes: [
      "id",
      "username",
      "email",
      "profilePicture",
      "website",
      "firstName",
      "lastName",
      "gender",
      "DOB",
      "bio",
    ],
  });
}

export async function login(req, res) {
  const { email, otp } = req.body;

  try {
    let user = await Verification.findOne({ where: { email } });

    // If user is not Found in DB
    if (user === null) {
      return res.status(404).json({
        status: "failed",
        message: "Not an existing user, kindly signup!",
      });
    }

    // check for Wrong OTP
    if (user.dataValues.otp != otp)
      return res.status(400).json({ status: "Failed", message: "Wrong OTP" });
    //Check for Expired OTP:
    let currentTime = new Date();
    if (user.dataValues.expiresAt < currentTime)
      return res
        .status(400)
        .json({ status: "Failed", message: "OTP is Expired" });

    // Generating access token and refresh token
    const accessToken = generateAccessToken(user.dataValues);
    const refreshToken = generateRefreshToken(user.dataValues);
    //Check for user if already verified
    if (user.dataValues.isUsed === true) {
      await RefreshTokens.update(
        {
          token: refreshToken,
          expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
        {
          where: {
            userId: user.dataValues.id,
          },
        }
      );
      return res.status(200).json({
        status: "Success",
        message: "Successful Login!",
        accessToken,
        refreshToken,
      });
    }

    if (user) {
      const [updatedRows] = await Verification.update(
        { isUsed: true },
        { where: { email: email } }
      );

      // await RefreshTokens.create({
      //   token: refreshToken,
      //   userId: user.dataValues.id,
      //   expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      // });

      // if (updatedRows > 0) {
      //   return res.status(200).json({
      //     status: "Success",
      //     message: "User verified successfully!",
      //     accessToken,
      //     refreshToken,
      //   });
      // } else {
      //   return res
      //     .status(500)
      //     .json({ status: "Failed", message: "Invalid credentials!" });
      // }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "failed",
      message: "Something went wrong!",
      error: err,
    });
  }
}

// sendOtp function sends an otp and also acts like a resend otp, if user present in user's table it returns it else it returns null
export async function sendOtp(req, res) {
  const { email } = req.body;
  const otp = generateOtp();
  await otpService.sendOtp(email, otp);
  const currentTime = new Date();
  const expiryTime = new Date(
    currentTime.getTime() + otpExpirtyDuration * 60000
  ); // Set expiry time in minutes

  const user = await Verification.findOne({ where: { email } });
  if (user) {
    await Verification.update(
      { otp, expiresAt: expiryTime },
      {
        where: {
          email,
        },
      }
    );
  } else {
    try {
      await Verification.create({
        email,
        otp,
        expiresAt: expiryTime,
      });
    } catch (error) {
      console.error(error.message); // Logging the error
      // throw new Error("Failed to create user and store verification data");
      // Throw the error so it can be handled by the caller
      return "error";
    }
  }
  const userInfo = await User.findOne({ where: { email } });
  return userInfo;
}

export async function updateUserInfo(req) {
  const payload = verifyTokenFromAuthorizationAndGetPayload(
    req.headers.authorization
  );
  if (payload === null) return 0;

  let bio = null,
    profilePicture = null,
    website = null,
    firstName = null,
    lastName = null,
    gender = null,
    DOB = null;
  ({ bio, profilePicture, website, firstName, lastName, gender, DOB } =
    req.body);
  const [updatedRows] = await User.update(
    { bio, profilePicture, website, firstName, lastName, gender, DOB },
    { where: { id: payload.id } }
  );
  return updatedRows;
}

export async function renewToken(req, res) {
  try {
    const { refreshToken: requestToken } = req.body;

    if (!requestToken) {
      return res.status(403).json({
        status: "Missing token",
        message: "Refresh token is required",
      });
    }

    const storedToken = await RefreshTokens.findOne({
      where: { token: requestToken },
    });
    if (!storedToken) {
      return res
        .status(403)
        .json({ status: "failed", message: "Refresh token not found" });
    }

    // Generating Access and refresh Token
    const newAccessToken = generateAccessToken({ id: storedToken.userId });
    const newRefreshToken = generateRefreshToken({ id: storedToken.userId });

    await RefreshTokens.update(
      {
        token: newRefreshToken,
        expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
      {
        where: {
          userId: storedToken.userId,
        },
      }
    );
    return res.json({
      status: "success",
      message: "New Access and Refresh Token granted!",
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong in Generating token" });
  }
}

export async function getUserProfile(req) {
  try {
    const { id } = verifyTokenFromAuthorizationAndGetPayload(
      req.headers.authorization
    );
    console.log("id->", id);

    const user = await User.findOne({
      where: { id },
      attributes: [
        "id",
        "username",
        "email",
        "profilePicture",
        "website",
        "firstName",
        "lastName",
        "gender",
        "DOB",
        "bio",
      ],
      include: {
        model: Post,
        attributes: [
          "id",
          "post",
          "userId",
          "description",
          "isPublic",
          "allowComments",
        ],
        where: { userId: id },
        required: false,
      },
    });
    return user;
  } catch (err) {
    console.log("Error", err.message);
    return null;
  }
}

export async function isExistingUser(req) {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  return user;
}
