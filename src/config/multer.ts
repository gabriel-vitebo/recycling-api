import multer from 'fastify-multer'
import path from 'node:path'
import { randomBytes } from 'node:crypto'

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp")
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads")

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      const fileHash = randomBytes(10).toString("hex")
      const fileName = `${fileHash}-${file.originalname}`

      return callback(null, fileName)
    },
  }),
}

export const multerConfig = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER,
}