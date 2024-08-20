import * as userService from '../services/userService.js';

export async function createUser(req, res) {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ status:"success", message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ status: "failed", error: err.message });
  }
}

export async function getUser(req, res) {
  try {
    const user = await userService.getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
