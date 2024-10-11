import * as userService from "../services/userService.js";

export async function signup(req, res) {
  try {
    const user = await userService.signup(req.body);
    res.status(201).json({
      status: "success",
      message:
        "OTP sent in mail, kindly login with otp to continue registration!",
    });
  } catch (err) {
    if (err.name === "SequelizeValidationError")
      res.status(500).json({ status: "failed", error: err.message });
  }
}

export async function isExistingUser(req, res) {
  const user = await userService.isExistingUser(req);
  if (user)
    res
      .status(200)
      .json({ status: "success", message: "user exists in Database" });
  else
    res
      .status(404)
      .json({ status: "failed", message: "user doesn't exists in Database" });
}

export async function login(req, res) {
  const user = userService.verifyUser(req.body, res);
  // if(user) res.status(200).json({status:"Success",message:"User verified successfully!"})
}

export async function getUser(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    if (user) {
      res.status(200).json({
        status: "success",
        message: "User data fetched successfully!",
        data: user,
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      status: "success",
      message: "All User's list fetched successfully!",
      data: users,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function resendOtp(req, res) {
  const updatedRows = await userService.resendOtp(req, res);

  if (updatedRows > 0)
    res.status(200).json({
      status: "success",
      message: `OTP sent again on mail ID: ${req.body.email}`,
    });
  else
    res.status(400).json({ status: "failed", message: "Unable to send OTP" });
}

export async function updateUserInfo(req, res) {
  const updatedRows = await userService.updateUserInfo(req);
  if (updatedRows > 0)
    res.status(200).json({
      status: "success",
      message: "user details has been updated successfully!",
    });
  else
    res.status(400).json({
      status: "failed",
      message:
        "Unable to update user information, as user doesn't exist or issue with Access Token",
    });
}

export async function renewToken(req, res) {
  userService.renewToken(req, res);
}

export async function getUserProfile(req, res) {
  const user = await userService.getUserProfile(req);
  if (user)
    return res.status(200).json({
      status: "success",
      message: "User info retrieved successfully!",
      data: user,
    });
  res.status(400).json({
    status: "failed",
    message: "Unable to find user Info",
    data: user,
  });
}
