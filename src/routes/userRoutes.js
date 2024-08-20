import express from 'express';
import { createUser, verifyUser, getUser, getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', createUser);
router.post('/login',verifyUser)
router.get('/users/:id', getUser);
router.get('/users', getAllUsers);

export default router;
