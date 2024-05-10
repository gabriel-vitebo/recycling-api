import { PrismaItemsRepository } from "@/repositories/prisma/prisma-items-repository";
import { CreateItemPointAssociationUseCase } from "../create-item-point-association";

export function MakeCreateItemPointAssociationUseCase() {
  const primaItemsRepository = new PrismaItemsRepository()
  const useCase = new CreateItemPointAssociationUseCase(
    primaItemsRepository
  )

  return useCase
}