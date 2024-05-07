import { ItemsRepository } from "@/repositories/items-repository";
import { Item } from "@prisma/client";

interface FetchAllItemsUseCaseRequest {
  page: number
}

interface FetchAllItemsUseCaseResponse {
  items: Item[]
}

export class FetchAllItemsUseCase {
  constructor(
    private itemsRepository: ItemsRepository
  ) { }

  async execute({
    page
  }: FetchAllItemsUseCaseRequest): Promise<FetchAllItemsUseCaseResponse> {
    const items = await this.itemsRepository.fetchAllItems(page)

    const serializedItems = items.map(item => {
      return {
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`
      }
    })


    return { serializedItems }
  }

}