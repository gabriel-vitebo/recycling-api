declare module 'fastify-multipart' {
  import { FastifyPluginCallback } from 'fastify';

  interface MultipartFields {
    [fieldname: string]: MultipartFile | MultipartFile[];
  }

  interface MultipartFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    stream: NodeJS.ReadableStream;
    file: string;
    filename: string;
    fields: MultipartFields;
  }

  interface FastifyMultipartOptions {
    addToBody?: boolean;
    sharedSchemaId?: string;
    attachFieldsToBody?: boolean | 'keyValues';
    limits?: {
      fieldNameSize?: number;
      fieldSize?: number;
      fields?: number;
      fileSize?: number;
      files?: number;
      headerPairs?: number;
    };
  }

  const fastifyMultipart: FastifyPluginCallback<FastifyMultipartOptions>;
  export default fastifyMultipart;
}
