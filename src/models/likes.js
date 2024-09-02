import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { defaultValueSchemable } from "sequelize/lib/utils";

const Likes = sequelize.define(
  "Likes",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },

  {
    tableName: "likes",
    timestamps: true,
  }
);

export default Likes;
