import { prisma } from "@/lib/prisma";
import { ItemsRepository } from "../items-repository";

export class PrismaItemsRepository implements ItemsRepository {
  async fetchAllItems(page: number) {
    const items = await prisma.item.findMany({
      take: 20,
      skip: (page - 1) * 20
    })

    return items
  }
}