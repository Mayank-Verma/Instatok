import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Hashtag = sequelize.define(
  "Hashtag",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    hashtag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    tableName: "post_hashtags",
    timestamps: true,
  }
);

export default Hashtag;
