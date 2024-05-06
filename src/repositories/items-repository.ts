import { Item } from "@prisma/client";

export interface ItemsRepository {
  fetchAllItems(page: number): Promise<Array<Item> | []>
}