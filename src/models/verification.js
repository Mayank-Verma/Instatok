import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Verification = sequelize.define(
  "Verification",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },

    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isUsed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:null
    },
  },
  {
    tableName: "verification",
    timestamps: true,
  }
);

export default Verification;