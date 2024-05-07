import { makeFetchAllItemsUseCase } from "@/use-cases/factories/make-fetch-all-items-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function fetchAllItems(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const fetchAllItemsSchema = z.object({
    page: z.coerce.number().min(1).default(1)
  })

  const { page } = fetchAllItemsSchema.parse(request.query)


  const fetchAllItemsUseCase = makeFetchAllItemsUseCase()

  const { serializedItems } = await fetchAllItemsUseCase.execute({
    page,
  })

  return reply.status(200).send({ serializedItems })
}