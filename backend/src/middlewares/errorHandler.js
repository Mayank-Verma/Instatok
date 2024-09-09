export const errorHandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      console.error('Multer Error:', err);
      return res.status(500).json({ error: err.message });
    } else if (err) {
      console.error('Unknown Error:', err);
      return res.status(500).json({ error: 'Unknown error occurred during upload' });
    }
    next();
  };
  