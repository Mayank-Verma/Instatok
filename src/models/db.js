import sequelize from '../config/database.js';
import Post from './post.js';
import User from './user.js';

const db = {
  User,
  Post,
  sequelize,
};

export default db;
