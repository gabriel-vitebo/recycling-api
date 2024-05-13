import { RecyclingPointsRepository } from "@/repositories/recycling-points-repository";
import { RecyclingPoint } from "@prisma/client";
import { ResourceNotFoundError } from "./erros/resource-not-found-error";

interface GetSpecificRecyclingPointUseCaseRequest {
  id: string
}

interface GetSpecificRecyclingPointUseCaseResponse {
  recyclingPoint: RecyclingPoint
}

export class GetSpecificRecyclingPointUseCase {
  constructor(
    private recyclingPointsRepository: RecyclingPointsRepository
  ) { }

  async execute({
    id,
  }: GetSpecificRecyclingPointUseCaseRequest): Promise<GetSpecificRecyclingPointUseCaseResponse> {

    const recyclingPoint = await this.recyclingPointsRepository.getSpecificRecyclingPoint(id)

    if (!recyclingPoint) {
      throw new ResourceNotFoundError()
    }

    return { recyclingPoint }
  }

}