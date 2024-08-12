import express from 'express';
import upload from '../config/multer.js';
import { uploadVideo } from '../controllers/uploadController.js';

const router = express.Router();

router.post('/post-upload', upload.single('video'), uploadVideo);

export default router;
