import { verifyToken } from "../utils/generateTokens.js";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ status: "failed", message: "Token not found" });
  }

  try {
    const user = verifyToken(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = user;
    next();
  } catch (error) {
    res
      .status(403)
      .json({
        status: "failed",
        message: "Session Expired, Kindly login again or renew Token",
      });
  }
};
