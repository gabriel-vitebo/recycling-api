import { ItemsRepository } from "@/repositories/items-repository";

interface FetchAllItemsUseCaseRequest {
  page: number
}

interface FetchAllItemsUseCaseResponse {
  serializedItems: {
    title: string;
    image_url: string;
  }[]
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
        id: item.id,
        title: item.title,
        image_url: item.image_url
      }
    })

    return { serializedItems }
  }

}