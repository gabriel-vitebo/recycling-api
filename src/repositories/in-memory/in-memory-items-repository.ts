import { Item } from "@prisma/client";
import { ItemsRepository } from "../items-repository";
import { Decimal } from "@prisma/client/runtime/library";
import { randomUUID } from "crypto";

interface ItemPointAssociation {
  itemId: string;
  recyclingPointId: string;
}

export class InMemoryItemsRepository implements ItemsRepository {
  public items: Item[] = [
    { id: '1', title: 'Lâmpadas', image: 'lampadas.svg', image_url: `http://localhost:3333/uploads/lampadas.svg` },
    { id: '2', title: 'Pilhas e Baterias', image: 'baterias.svg', image_url: `http://localhost:3333/uploads/baterias.svg` },
    { id: '3', title: 'Papéis e Papelão', image: 'papeis-papelao.svg', image_url: `http://localhost:3333/uploads/papeis-papelao.svg` },
    { id: '4', title: 'Resíduos Eletrônicos', image: 'eletronicos.svg', image_url: `http://localhost:3333/uploads/eletronicos.svg` },
    { id: '5', title: 'Resíduos Orgânicos', image: 'organicos.svg', image_url: `http://localhost:3333/uploads/organicos.svg` },
    { id: '6', title: 'Óleo de Cozinha', image: 'oleo.svg', image_url: `http://localhost:3333/uploads/oleo.svg` },
  ]

  public itemPointAssociation: ItemPointAssociation[] = [];

  async fetchAllItems(page: number) {
    const data = this.items
    const items = data.slice((page - 1) * 20, page * 20)

    return items;

  }

  async fetchAllItemsIds() {
    return this.items.map((item) => item.id)
  }

  async createItemPointAssociation(itemId: string, point: { id: string; image: string; name: string; email: string; whatsapp: string; latitude: Decimal; longitude: Decimal; city: string; uf: string; }) {
    const association = {
      id: randomUUID(),
      itemId,
      recyclingPointId: point.id
    }

    this.itemPointAssociation.push(association)

    return association
  }
}