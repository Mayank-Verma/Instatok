import sequelize from '../config/database.js';
import User from './user.js';

const db = {
  User,
  sequelize,
};

export default db;
