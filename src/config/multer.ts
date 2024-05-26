import multer from 'fastify-multer'
import path from 'node:path'
import { randomBytes } from 'node:crypto'
import { env } from '@/env'

const TMP_FOLDER = env.APP_MODE === 'dev'
  ? path.resolve(__dirname, "..", "..", "tmp")
  : path.resolve(__dirname, "..", "tmp")
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads")

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {

      const fileNameWithoutSpace = file.originalname.replace(/[.\s]/g, '-')
      const match = fileNameWithoutSpace.match(/\-([^\-]+)$/);
      let extension = "";
      if (match) {
        extension = match[1];
        console.log(extension);
      }
      console.log(typeof (fileNameWithoutSpace))
      const fileHash = randomBytes(10).toString("hex")
      const fileName = `${fileHash}-${fileNameWithoutSpace}.${extension}`

      return callback(null, fileName)
    },
  }),
}

export const multerConfig = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER,
}