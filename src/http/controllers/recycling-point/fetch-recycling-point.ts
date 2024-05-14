import { makeFetchRecyclingPointUseCase } from "@/use-cases/factories/make-fetch-recycling-point-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function fetchRecyclingPoint(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const fetchRecyclingPointSchema = z.object({
    city: z.string(),
    uf: z.string(),
    items: z.string()
  })

  const { city, uf, items } = fetchRecyclingPointSchema.parse(request.query)

  const fetchRecyclingPoint = makeFetchRecyclingPointUseCase()

  const recyclingPoint = await fetchRecyclingPoint.execute({
    city,
    uf,
    items
  })

  return reply.status(200).send(recyclingPoint)
}