import { RecyclingPointsRepository } from "@/repositories/recycling-points-repository";
import { RecyclingPoint } from "@prisma/client";
import { ResourceNotFoundError } from "./erros/resource-not-found-error";

interface FetchRecyclingPointUseCaseRequest {
  city: string,
  uf: string,
  items: string,
}

interface FetchRecyclingPointUseCaseResponse {
  recyclingPoint: RecyclingPoint[]
}

export class FetchRecyclingPointUseCase {
  constructor(
    private recyclingPointsRepository: RecyclingPointsRepository,
  ) { }

  async execute({
    city,
    uf,
    items
  }: FetchRecyclingPointUseCaseRequest): Promise<FetchRecyclingPointUseCaseResponse> {

    const parsedItems = items
      .split(',')
      .map((item) => item.trim())

    const recyclingPoint = await this.recyclingPointsRepository.fetchRecyclingPoint(
      city,
      uf,
      parsedItems
    )

    if (!recyclingPoint) {
      throw new ResourceNotFoundError()
    }

    return { recyclingPoint }

  }

}