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
  items: string[]

}

interface CreateRecyclingPointUseCaseResponse {
  recyclingPoint: RecyclingPoint
}

export class CreateRecyclingPointUseCase {
  constructor(
    private recyclingPointsRepository: RecyclingPointsRepository
  ) { }

  async execute({
    name,
    image,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf
  }: CreateRecyclingPointUseCaseRequest): Promise<CreateRecyclingPointUseCaseResponse> {
    const recyclingPoint = await this.recyclingPointsRepository.createCollectionPoints({
      name,
      image: 'fake-image.svg',
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    })

    return { recyclingPoint }
  }

}