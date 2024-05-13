import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryRecyclingPointsRepository } from "../../repositories/in-memory/in-memory-recycling-points-repository"
import { CreateRecyclingPointUseCase } from "../create-recycling-point";
import { InMemoryItemsRepository } from "../../repositories/in-memory/in-memory-items-repository";

let recyclingPointsRepository: InMemoryRecyclingPointsRepository
let itemsRepository: InMemoryItemsRepository
let sut: CreateRecyclingPointUseCase

describe('Fetch all Items Use Case', () => {
  beforeEach(() => {
    recyclingPointsRepository = new InMemoryRecyclingPointsRepository()
    itemsRepository = new InMemoryItemsRepository()
    sut = new CreateRecyclingPointUseCase(recyclingPointsRepository, itemsRepository)
  })

  it('should be possible to create a collection point', async () => {
    const { recyclingPoint } = await sut.execute({
      name: 'John Doe mercadinho',
      image: 'fake.svg',
      email: 'johnDoe@email.com',
      city: 'imagiland',
      uf: 'DS',
      latitude: -12.56454,
      longitude: -77.5465,
      whatsapp: '5465521',
      itemsIds: ['1', '2', '3']
    })

    await expect(recyclingPoint.id).toEqual(expect.any(String))

  })
})