import fs from 'fs'
import path from 'node:path'
import { multerConfig } from '../config/multer'

class DiskStorage {
  async saveFile(file: string) {
    await fs.promises.rename(
      path.resolve(multerConfig.TMP_FOLDER, file),
      path.resolve(multerConfig.UPLOADS_FOLDER, file)
    );
    return file;
  }

  async deleteFile(file: string) {
    const filePath = path.resolve(multerConfig.UPLOADS_FOLDER, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

export default DiskStorage;
