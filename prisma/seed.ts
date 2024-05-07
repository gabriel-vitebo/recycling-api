import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface DataSchema {
  title: string,
  image: string,
  image_url: string,
}

async function main() {
  const data: DataSchema[] = [
    { title: 'Lâmpadas', image: 'lampadas.svg', image_url: `http://localhost:3333/uploads/lampadas.svg` },
    { title: 'Pilhas e Baterias', image: 'baterias.svg', image_url: `http://localhost:3333/uploads/baterias.svg` },
    { title: 'Papéis e Papelão', image: 'papeis-papelao.svg', image_url: `http://localhost:3333/uploads/papeis-papelao.svg` },
    { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg', image_url: `http://localhost:3333/uploads/eletronicos.svg` },
    { title: 'Resíduos Orgânicos', image: 'organicos.svg', image_url: `http://localhost:3333/uploads/organicos.svg` },
    { title: 'Óleo de Cozinha', image: 'oleo.svg', image_url: `http://localhost:3333/uploads/oleo.svg` },
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