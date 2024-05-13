import { makeCreateRecyclingPointUseCase } from "@/use-cases/factories/make-create-recycling-point";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createRecyclingPoints(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const createRecyclingPointSchema = z.object({
    name: z.string(),
    image: z.string(),
    email: z.string(),
    whatsapp: z.string(),
    latitude: z.number().refine((value) => {
      return Math.abs(value) <= 90
    }),
    longitude: z.number().refine((value) => {
      return Math.abs(value) <= 180
    }),
    city: z.string(),
    uf: z.string().min(2),
    itemsIds: z.string().array()
  })

  const {
    name,
    image,
    email,
    whatsapp,
    longitude,
    latitude,
    city,
    uf,
    itemsIds } = createRecyclingPointSchema.parse(request.body)


  const createRecyclingPointsUseCase = makeCreateRecyclingPointUseCase()

  const recyclingPoint = await createRecyclingPointsUseCase.execute({
    name,
    image,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    itemsIds
  })

  return reply.status(201).send(recyclingPoint)
}