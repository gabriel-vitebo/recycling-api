import multer from 'fastify-multer'
import path from 'node:path'
import { randomBytes } from 'node:crypto'

const uploadPath = path.resolve(__dirname, '..', '..', 'uploads');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename(req, file, cb) {
    const hash = randomBytes(6).toString('hex')
    const fileName = `${hash}-${file.originalname}`

    cb(null, fileName)
  }
})

const multerConfig = {
  storage: storage,
};

export default multerConfig;