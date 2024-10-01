import multer from "multer";

const storage = multer.memoryStorage();

// File filter to allow only image files
const imageFilter = (req, file, cb) => {
  // Accept image files only
  if (!file.mimetype.startsWith("image/")) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

// Multer configuration for image uploads
const uploadImageConfiguration = multer({
  storage: storage,
  fileFilter: imageFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
});

const uploadVideoConfiguration = multer({ storage: storage });

export { uploadVideoConfiguration, uploadImageConfiguration };
