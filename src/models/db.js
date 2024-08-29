import sequelize from "../config/database.js";
import Post from "./post.js";
import RefreshTokens from "./refresh_tokens.js";
import User from "./user.js";
import Verification from "./verification.js";

const db = {
  Verification,
  User,
  Post,
  RefreshTokens,
  sequelize,
};

export default db;
