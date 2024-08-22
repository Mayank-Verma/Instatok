import sequelize from "../config/database.js";
import Post from "./post.js";
import User from "./user.js";
import Verification from "./verification.js";

const db = {
  Verification,
  User,
  Post,
  sequelize,
};

export default db;
