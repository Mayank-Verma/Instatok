import sequelize from "../../config/database.js";
import Likes from "./likes.js";
import Post from "./post.js";
import RefreshTokens from "./refresh_tokens.js";
import User from "./user.js";
import Verification from "./verification.js";
import Comment from "./comments.js";
import Hashtag from "./hashtags.js";
import Follower from "./follower.js";

const db = {
  Verification,
  User,
  Post,
  RefreshTokens,
  Likes,
  Comment,
  Hashtag,
  Follower,
  sequelize,
};

// Defined Associations

// User table association with Post table
// A single user can create multiple posts, but each post is created by only one user.
User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId", as: "uploadedBy" });
// User Table association with Post table via Likes table
// A user can like many posts, and each post can be liked by many users.
// User.belongsToMany(Post, { through: Likes, foreignKey: "userId" });
// Post.belongsToMany(User, { through: Likes, foreignKey: "postId" });
/* when modeling comments, a different approach is usually taken because comments themselves are 
 typically not just a join table but a separate entity with its own attributes (like content, timestamp, etc.). */
//  1. User and Comment Relationship
//  A user can write many comments, but each comment is written by only one user.
User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });

// Likes table association with the User Table
Likes.belongsTo(User, { foreignKey: "userId" });
// Likes table association
Post.hasMany(Likes, { foreignKey: "postId" });
Likes.belongsTo(Post, { foreignKey: "postId" });
// 2.Post and Comment relationship
// A post can have many comments, but each comment belongs to only one post.
Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postId" });
// Post table association with Hashtag table
// A post can have multiple hashtags, and a hashtag can be associated with multiple posts.
Post.belongsToMany(Hashtag, {
  through: "postHashtagsMeta",
  foreignKey: "postId",
});
Hashtag.belongsToMany(Post, {
  through: "postHashtagsMeta",
  foreignKey: "hashtagId",
});
// Self referential associations
User.hasMany(Follower, { foreignKey: "follower_id", as: "Followers" });
User.hasMany(Follower, { foreignKey: "following_id", as: "Following" });
Follower.belongsTo(User, { foreignKey: "follower_id", as: "FollowerUser" });
Follower.belongsTo(User, { foreignKey: "following_id", as: "FollowingUser" });
/* A Comment is dependent on both the User who made it and the Post it belongs to. 
Each comment is unique and specific to a post, which is why it has a one-to-many relationship with both User and Post.*/
/*A Hashtag, on the other hand, is a shared entity. Multiple posts can refer to the same hashtag, and the relationship doesn't uniquely define the hashtag.
 The same hashtag can be reused across different posts and users, making the many-to-many relationship appropriate.*/
// User.hasMany(Likes, { foreignKey: "userId" });
// Post.hasMany(Likes, { foreignKey: "postId" });
// Likes.belongsTo(User, { foreignKey: "userId" });
// Likes.belongsTo(Post, { foreignKey: "postId" });

export default db;
