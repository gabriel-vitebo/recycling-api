import { PrismaRecyclingPointsRepository } from "@/repositories/prisma/prisma-recycling-points-repository";
import { GetSpecificRecyclingPointUseCase } from "../get-specific-recycling-point";
import { PrismaItemsRepository } from "@/repositories/prisma/prisma-items-repository";

export function makeGetSpecificRecyclingPointUseCase() {
  const primaRecyclingPointRepository = new PrismaRecyclingPointsRepository()
  const prismaItemsRepository = new PrismaItemsRepository()
  const useCase = new GetSpecificRecyclingPointUseCase(
    primaRecyclingPointRepository,
    prismaItemsRepository
  )

  return useCase
}