import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryRecyclingPointsRepository } from "../../repositories/in-memory/in-memory-recycling-points-repository"
import { GetSpecificRecyclingPointUseCase } from "../get-specific-recycling-point";
import { ResourceNotFoundError } from "../erros/resource-not-found-error";

let recyclingPointsRepository: InMemoryRecyclingPointsRepository
let sut: GetSpecificRecyclingPointUseCase

describe('Fetch all Items Use Case', () => {
  beforeEach(() => {
    recyclingPointsRepository = new InMemoryRecyclingPointsRepository()
    sut = new GetSpecificRecyclingPointUseCase(recyclingPointsRepository)
  })

  it('should be possible to create a collection point', async () => {
    const { id } = await recyclingPointsRepository.createCollectionPoints({
      name: 'John Doe mercadinho',
      image: 'fake.svg',
      email: 'johnDoe@email.com',
      city: 'imagiland',
      uf: 'DS',
      latitude: -12.56454,
      longitude: -77.5465,
      whatsapp: '5465521',
    })

    const { recyclingPoint } = await sut.execute({ id })

    await expect(recyclingPoint.id).toEqual(expect.any(String))
    await expect(recyclingPoint.name).toEqual('John Doe mercadinho')

  })

  it('should not be possible get a specific point with wrong id', async () => {
    await expect(async () => {
      await sut.execute({
        id: 'non-existing-id'
      })
    }).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})