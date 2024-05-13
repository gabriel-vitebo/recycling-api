import { makeGetSpecificRecyclingPointUseCase } from "@/use-cases/factories/make-get-specific-recycling-point-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getSpecificRecyclingPoint(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const getSpecificRecyclingPointSchema = z.object({
    id: z.string()
  })

  const { id } = getSpecificRecyclingPointSchema.parse(request.params)

  const getSpecificRecyclingPoint = makeGetSpecificRecyclingPointUseCase()

  const recyclingPoint = await getSpecificRecyclingPoint.execute({
    id
  })

  return reply.status(200).send(recyclingPoint)
}