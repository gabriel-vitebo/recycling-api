import { RecyclingPointsRepository } from "@/repositories/recycling-points-repository";
import { Item, RecyclingPoint } from "@prisma/client";
import { ResourceNotFoundError } from "./erros/resource-not-found-error";
import { ItemsRepository } from "@/repositories/items-repository";

interface GetSpecificRecyclingPointUseCaseRequest {
  id: string
}

interface GetSpecificRecyclingPointUseCaseResponse {
  recyclingPoint: RecyclingPoint
  items: Array<{ title: string; image_url: string }>
}

export class GetSpecificRecyclingPointUseCase {
  constructor(
    private recyclingPointsRepository: RecyclingPointsRepository,
    private itemsRepository: ItemsRepository
  ) { }

  async execute({
    id,
  }: GetSpecificRecyclingPointUseCaseRequest): Promise<GetSpecificRecyclingPointUseCaseResponse> {

    const recyclingPoint = await this.recyclingPointsRepository.getSpecificRecyclingPoint(id)

    if (!recyclingPoint) {
      throw new ResourceNotFoundError()
    }

    const items = await this.itemsRepository.fetchRelatedItems(id)

    return { recyclingPoint, items }
  }

}