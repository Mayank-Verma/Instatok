import supabase from '../config/supabase.js';
import Post from '../models/post.js'
import { v4 as uuidv4 } from 'uuid';

const CDNURL = `https://yqadtatwibdusbqznmau.supabase.co/storage/v1/object/public/videos/`;
export const uploadVideo = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  try {
    const fileName = `${uuidv4()}-${req.file.originalname}`;

    const { data, error } = await supabase.storage
      .from('videos')
      .upload(fileName, req.file.buffer, {
        cacheControl: '3600',
        upsert: false,
        contentType: req.file.mimetype,
      });

    if (error) throw error;
    const postLink=CDNURL+fileName;
    res.json({status:"success", message:"Video uploaded successfully", "post link": `${postLink}`});
    Post.create({post:postLink, userId:req.body.userId})
  } catch (error) {
    console.error('Error uploading to Supabase:', error.message);
    res.status(500).send('An error occurred during the upload');
  }
};
