import * as userService from "../services/userService.js";

export async function createUser(req, res) {
  try {
    const user = await userService.createUser(req.body);
    res
      .status(201)
      .json({
        status: "success",
        message:
          "OTP sent in mail, kindly login with otp to continue registration!",
      });
  } catch (err) {
    if (err.name === "SequelizeValidationError")
      res.status(500).json({ status: "failed", error: err.message });
  }
}

export async function verifyUser(req, res) {
  const user = userService.verifyUser(req.body, res);
  // if(user) res.status(200).json({status:"Success",message:"User verified successfully!"})
}

export async function getUser(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    if (user) {
      res.json(user);
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
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function resendOtp(req, res) {
  const updatedRows = await userService.resendOtp(req,res);
  
  if (updatedRows>0)
    res
      .status(200)
      .json({
        status: "success",
        message: `OTP sent again on mail ID: ${req.body.email}`,
      });
  else
    res.status(400).json({ status: "failed", message: "Unable to send OTP" });
}
