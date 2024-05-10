import { Item, Point_item, RecyclingPoint } from "@prisma/client";

export interface ItemsRepository {
  fetchAllItems(page: number): Promise<Array<Item> | []>
  createItemPointAssociation(itemId: string, point: RecyclingPoint): Promise<Point_item>
}