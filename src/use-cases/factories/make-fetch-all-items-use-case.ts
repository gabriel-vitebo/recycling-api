import { PrismaItemsRepository } from "@/repositories/prisma/prisma-items-repository";
import { FetchAllItemsUseCase } from "../fetch-all-items";

export function makeFetchAllItemsUseCase() {
  const primaItemsRepository = new PrismaItemsRepository()
  const useCase = new FetchAllItemsUseCase(
    primaItemsRepository
  )

  return useCase
}