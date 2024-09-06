import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";
import User from "./user.js"; // import the user model

const Follower = sequelize.define(
  "Follower",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    follower_id: {
      type: DataTypes.UUID,
      references: {
        model: User, // References the User model
        key: "id",
      },
      allowNull: false,
    },
    following_id: {
      type: DataTypes.UUID,
      references: {
        model: User, // References the User model
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    tableName: "followers", // explicit table name
    timestamps: true, // if you want createdAt and updatedAt
    indexes: [
      {
        unique: true,
        fields: ["follower_id", "following_id"], // ensures the pair is unique
      },
    ],
  }
);

export default Follower;
