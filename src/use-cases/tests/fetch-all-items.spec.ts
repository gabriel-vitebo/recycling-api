import { InMemoryItemsRepository } from "../../repositories/in-memory/in-memory-items-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { FetchAllItemsUseCase } from "../fetch-all-items";

let itemsRepository: InMemoryItemsRepository
let sut: FetchAllItemsUseCase

describe('Fetch all Items Use Case', () => {
  beforeEach(() => {
    itemsRepository = new InMemoryItemsRepository()
    sut = new FetchAllItemsUseCase(itemsRepository)
  })

  it('should be possible fetch all items', async () => {
    const result = await sut.execute({
      page: 1,
    })

    const items = result.serializedItems

    expect(items).toEqual([
      expect.objectContaining(
        { id: '1', title: 'Lâmpadas', image_url: `http://localhost:3333/uploads/lampadas.svg` },
      ),
      expect.objectContaining(
        { id: '2', title: 'Pilhas e Baterias', image_url: `http://localhost:3333/uploads/baterias.svg` },
      ),
      expect.objectContaining(
        { id: '3', title: 'Papéis e Papelão', image_url: `http://localhost:3333/uploads/papeis-papelao.svg` },
      ),
      expect.objectContaining(
        { id: '4', title: 'Resíduos Eletrônicos', image_url: `http://localhost:3333/uploads/eletronicos.svg` },
      ),
      expect.objectContaining(
        { id: '5', title: 'Resíduos Orgânicos', image_url: `http://localhost:3333/uploads/organicos.svg` },
      ),
      expect.objectContaining(
        { id: '6', title: 'Óleo de Cozinha', image_url: `http://localhost:3333/uploads/oleo.svg` },
      ),
    ])
  })
})