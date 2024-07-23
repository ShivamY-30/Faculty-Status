import multer from 'multer';
import path from 'path';

// Configure Multer to store files in 'uploads' directory
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Set the destination folder
  },
  filename: function (req, file, cb) {
    // Set the filename to include original name and a timestamp
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

export { upload };
