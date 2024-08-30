import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Likes = sequelize.define(
  "Likes",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  {
    tableName: "likes",
    timestamps: true,
  }
);

export default Likes;
