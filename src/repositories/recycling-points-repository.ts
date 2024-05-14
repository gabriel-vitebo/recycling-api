import { Prisma, RecyclingPoint } from "@prisma/client";

export interface RecyclingPointsRepository {
  createCollectionPoints(data: Prisma.RecyclingPointCreateInput): Promise<RecyclingPoint>
  getSpecificRecyclingPoint(id: string): Promise<RecyclingPoint | null>
  fetchRecyclingPoint(city: string, uf: string, items: string[]): Promise<Array<RecyclingPoint> | []>
}