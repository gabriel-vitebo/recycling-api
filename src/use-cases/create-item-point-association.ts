import { ItemsRepository } from "@/repositories/items-repository";
import { Point_item, RecyclingPoint } from "@prisma/client";

interface CreateItemPointAssociationUseCaseRequest {
  itemId: string;
  point: RecyclingPoint;
}

interface CreateItemPointAssociationUseCaseResponse {
  pointItem: Point_item
}

export class CreateItemPointAssociationUseCase {
  constructor(
    private itemsRepository: ItemsRepository
  ) { }

  async execute({
    itemId,
    point
  }: CreateItemPointAssociationUseCaseRequest): Promise<CreateItemPointAssociationUseCaseResponse> {
    const pointItem = await this.itemsRepository.createItemPointAssociation(itemId, point)

    return { pointItem }
  }

}