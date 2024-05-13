import { Prisma, RecyclingPoint } from "@prisma/client";
import { RecyclingPointsRepository } from "../recycling-points-repository";
import { randomUUID } from 'node:crypto'

export class InMemoryRecyclingPointsRepository implements RecyclingPointsRepository {
  public items: RecyclingPoint[] = []

  async createCollectionPoints(data: Prisma.RecyclingPointCreateInput) {
    const recyclingPoint = {
      id: data.id ?? randomUUID(),
      name: data.name,
      image: data.image,
      email: data.email,
      whatsapp: data.whatsapp,
      latitude: new Prisma.Decimal(data.latitude.toString()),
      longitude: new Prisma.Decimal(data.longitude.toString()),
      city: data.city,
      uf: data.uf
    }

    this.items.push(recyclingPoint)

    return recyclingPoint
  }

  async getSpecificRecyclingPoint(id: string) {
    const recyclingPoint = this.items.find((item) => item.id === id)

    return recyclingPoint || null
  }
}