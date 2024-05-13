import { prisma } from "@/lib/prisma";
import { ItemsRepository } from "../items-repository";
import { Decimal } from "@prisma/client/runtime/library";

export class PrismaItemsRepository implements ItemsRepository {
  async fetchAllItems(page: number) {
    const items = await prisma.item.findMany({
      take: 20,
      skip: (page - 1) * 20
    })

    return items
  }

  async fetchAllItemsIds() {
    const allItems = await prisma.item.findMany()
    return allItems.map((item) => item.id)
  }

  async createItemPointAssociation(itemId: string, point: { id: string }) {
    const createdAssociation = await prisma.point_item.create({
      data: {
        itemId,
        recyclingPointId: point.id
      }
    });

    return createdAssociation;
  }

  async fetchRelatedItems(recyclingPointId: string) {
    const items = await prisma.item.findMany({
      where: {
        Point_item: {
          some: {
            recyclingPointId
          }
        }
      },
      select: {
        title: true,
        image_url: true
      }
    });

    return items
  }
}