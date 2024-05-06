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

    const items = result.items

    expect(items).toEqual([
      expect.objectContaining(
        { id: '1', title: 'Lâmpadas', image: 'lampadas.svg' },
      ),
      expect.objectContaining(
        { id: '2', title: 'Pilhas e Baterias', image: 'baterias.svg' },
      ),
      expect.objectContaining(
        { id: '3', title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
      ),
      expect.objectContaining(
        { id: '4', title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
      ),
      expect.objectContaining(
        { id: '5', title: 'Resíduos Orgânicos', image: 'organicos.svg' },
      ),
      expect.objectContaining(
        { id: '6', title: 'Óleo de Cozinha', image: 'oleo.svg' },
      ),
    ])
  })
})