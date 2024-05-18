import { makeCreateRecyclingPointUseCase } from "@/use-cases/factories/make-create-recycling-point";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import DiskStorage from "@/providers/DiskStorage";

interface UploadedFile {
  originalname: string;
}

export async function createRecyclingPoints(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createRecyclingPointSchema = z.object({
    name: z.string(),
    email: z.string(),
    whatsapp: z.string(),
    latitude: z.coerce.number().refine((value) => {
      return Math.abs(value) <= 90
    }),
    longitude: z.coerce.number().refine((value) => {
      return Math.abs(value) <= 180
    }),
    city: z.string(),
    uf: z.string().min(2),
    itemsIds: z.string().array()
  })

  const {
    name,
    email,
    whatsapp,
    longitude,
    latitude,
    city,
    uf,
    itemsIds } = createRecyclingPointSchema.parse(request.body)

  console.log('entrou')

  const diskStorage = new DiskStorage()

  const fileName = request.file.filename;
  console.log(fileName);

  const pointRecyclingFileName = await diskStorage.saveFile(fileName)

  console.log({ pointRecyclingFileName })

  const createRecyclingPointsUseCase = makeCreateRecyclingPointUseCase()

  const recyclingPoint = await createRecyclingPointsUseCase.execute({
    name,
    image: pointRecyclingFileName,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    itemsIds
  })

  console.log(recyclingPoint)

  return reply.status(201).send(recyclingPoint)
}