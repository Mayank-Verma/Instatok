import express from 'express';
import { createUser, getUser, getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/users', createUser);
router.get('/users/:id', getUser);
router.get('/users', getAllUsers);

export default router;
