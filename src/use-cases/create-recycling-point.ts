import { ItemsRepository } from "@/repositories/items-repository";
import { RecyclingPointsRepository } from "@/repositories/recycling-points-repository";
import { RecyclingPoint } from "@prisma/client";

interface CreateRecyclingPointUseCaseRequest {
  name: string,
  image: string,
  email: string,
  whatsapp: string,
  latitude: number,
  longitude: number,
  city: string,
  uf: string,
  itemsIds: string[]
}

interface CreateRecyclingPointUseCaseResponse {
  recyclingPoint: RecyclingPoint
}

export class CreateRecyclingPointUseCase {
  constructor(
    private recyclingPointsRepository: RecyclingPointsRepository,
    private itemsRepository: ItemsRepository

  ) { }

  async execute({
    name,
    image,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    itemsIds
  }: CreateRecyclingPointUseCaseRequest): Promise<CreateRecyclingPointUseCaseResponse> {

    const validItemIds = await this.itemsRepository.fetchAllItemsIds()
    for (const itemId of itemsIds) {
      if (!validItemIds.includes(itemId)) {
        throw new Error(`Invalid itemId: ${itemId}`)
      }
    }

    const recyclingPoint = await this.recyclingPointsRepository.createCollectionPoints({
      name,
      image,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    })

    for (let itemId of itemsIds) {
      await this.itemsRepository.createItemPointAssociation(
        itemId,
        recyclingPoint
      )
    }

    return { recyclingPoint }
  }

}