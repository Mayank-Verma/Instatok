import sequelize from "../config/database.js";
import Likes from "./likes.js";
import Post from "./post.js";
import RefreshTokens from "./refresh_tokens.js";
import User from "./user.js";
import Verification from "./verification.js";
import Comment from "./comments.js";

const db = {
  Verification,
  User,
  Post,
  RefreshTokens,
  Likes,
  Comment,
  sequelize,
};

// Defined Associations
User.hasMany(Likes, { foreignKey: "userId" });
Post.hasMany(Likes, { foreignKey: "postId" });
Likes.belongsTo(User, { foreignKey: "userId" });
Likes.belongsTo(Post, { foreignKey: "postId" });
User.hasMany(Comment, { foreignKey: "userId" });
Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(User, { foreignKey: "userId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

export default db;
