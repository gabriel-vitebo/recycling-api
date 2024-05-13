import { PrismaRecyclingPointsRepository } from "@/repositories/prisma/prisma-recycling-points-repository";
import { GetSpecificRecyclingPointUseCase } from "../get-specific-recycling-point";

export function makeGetSpecificRecyclingPointUseCase() {
  const primaRecyclingPointRepository = new PrismaRecyclingPointsRepository()
  const useCase = new GetSpecificRecyclingPointUseCase(
    primaRecyclingPointRepository
  )

  return useCase
}