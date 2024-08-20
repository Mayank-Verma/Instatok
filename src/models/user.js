import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isVerified:{
    type:DataTypes.BOOLEAN,
    defaultValue:false,
    allowNull:true
  },
  otp:{
    type:DataTypes.INTEGER,
    defaultValue:1234,
    allowNull:false
  }
}, {
  tableName: 'users',
  timestamps: true,
});

export default User;
