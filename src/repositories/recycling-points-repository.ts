import { Prisma, RecyclingPoint } from "@prisma/client";

export interface RecyclingPointsRepository {
  createCollectionPoints(data: Prisma.RecyclingPointCreateInput): Promise<RecyclingPoint>
}