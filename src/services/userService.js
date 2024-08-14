import User from '../models/user.js';

export async function createUser(data) {
  return await User.create(data);
}

export async function getUserById(id) {
  return await User.findByPk(id);
}

export async function getAllUsers() {
  return await User.findAll();
}
