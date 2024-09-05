import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./user.js";
import Post from "./post.js";

const Likes = sequelize.define(
  "Likes",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
      },
    },
    postId: {
      type: DataTypes.UUID,
      references: {
        model: Post,
        key: "id",
      },
    },
  },

  {
    tableName: "likes",
    timestamps: true,
  }
);

export default Likes;
