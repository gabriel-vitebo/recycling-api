import { Item, Point_item, RecyclingPoint } from "@prisma/client";

export interface ItemsRepository {
  fetchAllItems(page: number): Promise<Array<Item> | []>
  fetchAllItemsIds(): Promise<string[]>
  createItemPointAssociation(itemId: string, point: RecyclingPoint): Promise<Point_item>
}