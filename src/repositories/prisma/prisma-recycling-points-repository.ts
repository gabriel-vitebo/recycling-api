import { Prisma } from ".prisma/client";
import { RecyclingPointsRepository } from "../recycling-points-repository";
import { prisma } from "@/lib/prisma";

export class PrismaRecyclingPointsRepository implements RecyclingPointsRepository {
  async createCollectionPoints(data: Prisma.RecyclingPointCreateInput) {
    const collectionPoint = await prisma.recyclingPoint.create({
      data
    })

    return collectionPoint
  }
}