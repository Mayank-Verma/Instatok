import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    post: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    isPublic: { type: DataTypes.BOOLEAN, defaultValue: true },
    allowComments: { type: DataTypes.BOOLEAN, defaultValue: true },
  },

  {
    tableName: "posts",
    timestamps: true,
  }
);

export default Post;
