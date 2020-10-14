import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, ch) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      ch(null, fileName);
    },
  }),
};
