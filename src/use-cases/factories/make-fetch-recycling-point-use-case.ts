import { PrismaRecyclingPointsRepository } from "@/repositories/prisma/prisma-recycling-points-repository";
import { FetchRecyclingPointUseCase } from "../fetch-recycling-point";

export function makeFetchRecyclingPointUseCase() {
  const primaRecyclingPointRepository = new PrismaRecyclingPointsRepository()
  const useCase = new FetchRecyclingPointUseCase(
    primaRecyclingPointRepository
  )

  return useCase
}