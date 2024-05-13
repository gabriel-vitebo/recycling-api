import { PrismaItemsRepository } from "@/repositories/prisma/prisma-items-repository";
import { CreateRecyclingPointUseCase } from "../create-recycling-point";
import { PrismaRecyclingPointsRepository } from "@/repositories/prisma/prisma-recycling-points-repository";

export function makeCreateRecyclingPointUseCase() {
  const primaRecyclingPointRepository = new PrismaRecyclingPointsRepository()
  const prismaItemsRepository = new PrismaItemsRepository()
  const useCase = new CreateRecyclingPointUseCase(
    primaRecyclingPointRepository,
    prismaItemsRepository
  )

  return useCase
}