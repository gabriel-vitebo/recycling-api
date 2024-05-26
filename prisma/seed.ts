import { env } from "../src/env";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface DataSchema {
  title: string,
  image: string,
  image_url: string,
}

async function main() {
  const data: DataSchema[] = [
    { title: 'Lâmpadas', image: 'lampadas.svg', image_url: `${env.UPLOADS_BASE_URL}/lampadas.svg` },
    { title: 'Pilhas e Baterias', image: 'baterias.svg', image_url: `${env.UPLOADS_BASE_URL}/baterias.svg` },
    { title: 'Papéis e Papelão', image: 'papeis-papelao.svg', image_url: `${env.UPLOADS_BASE_URL}/papeis-papelao.svg` },
    { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg', image_url: `${env.UPLOADS_BASE_URL}/eletronicos.svg` },
    { title: 'Resíduos Orgânicos', image: 'organicos.svg', image_url: `${env.UPLOADS_BASE_URL}/organicos.svg` },
    { title: 'Óleo de Cozinha', image: 'oleo.svg', image_url: `${env.UPLOADS_BASE_URL}/oleo.svg` },
  ];

  for (const item of data) {
    await prisma.item.create({
      data: item,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })