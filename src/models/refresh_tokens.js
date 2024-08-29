import { DataTypes, UUIDV4 } from "sequelize";
import sequelize from "../config/database.js";
import { UUID } from "sequelize";

const RefreshTokens = sequelize.define(
  "RefreshTokens",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiryDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "refresh_tokens",
    timestamps: true,
  }
);

RefreshTokens.associate = (db) => {
  RefreshTokens.belongsTo(db.User, {
    foreignKey: "id",
    as: "userId",
  });
};

export default RefreshTokens;
