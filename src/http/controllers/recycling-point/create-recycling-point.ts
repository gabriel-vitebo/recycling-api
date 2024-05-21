import { makeCreateRecyclingPointUseCase } from "@/use-cases/factories/make-create-recycling-point";
import { FastifyReply, FastifyRequest } from "fastify";
import { unknown, z } from "zod";
import DiskStorage from "@/providers/DiskStorage";

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
    itemsIds: z.array(z.string())
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

  const diskStorage = new DiskStorage()

  const file = request.file as unknown
  const fileName: string = (file as { filename: string }).filename;

  const pointRecyclingFileName = await diskStorage.saveFile(fileName)

  const createRecyclingPointsUseCase = makeCreateRecyclingPointUseCase()

  const recyclingPoint = await createRecyclingPointsUseCase.execute({
    name,
    image: `http://localhost:3333/uploads/${pointRecyclingFileName}`,
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