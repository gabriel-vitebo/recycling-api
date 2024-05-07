import { CreateRecyclingPointUseCase } from "../create-recycling-point";
import { PrismaRecyclingPointsRepository } from "@/repositories/prisma/prisma-recycling-points-repository";

export function makeCreateRecyclingPointUseCase() {
  const primaRecyclingPointRepository = new PrismaRecyclingPointsRepository()
  const useCase = new CreateRecyclingPointUseCase(
    primaRecyclingPointRepository
  )

  return useCase
}