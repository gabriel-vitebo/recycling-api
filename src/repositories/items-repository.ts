import { Item, Point_item, RecyclingPoint } from "@prisma/client";
import { string } from "zod";

export interface ItemsRepository {
  fetchAllItems(page: number): Promise<Array<Item> | []>
  fetchAllItemsIds(): Promise<string[]>
  createItemPointAssociation(itemId: string, point: RecyclingPoint): Promise<Point_item>
  fetchRelatedItems(recyclingPointId: string): Promise<{ title: string, image_url: string }[]>
}