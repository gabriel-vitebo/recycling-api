# Recycling Collection.

Esse é uma api Criada para facilitar a coleta de resíduos.

## Tecnologias Usadas
  - Nodejs
  - TypeScript
  - Docker
  - Fastify
  - Postgresql
  - Git
  - Zod
  - Vitest

## Requisitos:
- [Docker](https://www.docker.com/)
- [Node.JS](https://nodejs.org/en)
- [Git](https://git-scm.com/)

## Rodando API na sua máquina
  - Crie ou abra uma pasta onde deseja clonar o repositório
  - Clique em "<> Code" e copie o link da maneira que deseja clonar (HTTPS, SSH, GitHub CLI)
  - No seu terminal, dentro da pasta que deseja clonar, execute:
    ```
    git clone https://github.com/gabriel-vitebo/recycling-api.git
    ```
    aqui estou utilizando HTTPS
  - Entre na pasta do repositório clonado, e execute o comando:
    ```
    npm install
    ```
  - Crie um arquivo chamado `.env` na raiz do projeto e cheque as variáveis necessárias na pasta `src/env/index.ts`.

  - Rode o comando
    ```
    npm run dev
    ```
  - Se tudo der certo, você deve visualizar no seu terminal a mensagem
    ```
    HTTP Server Running on Port 3333 
    ```
  - Agora, vamos rodar o Docker para subir o banco de dados postgresql, execute o comando:
    ```
    docker-compose up -d
    ```

  - Vamos rodar as migrates:
    ```
    npx prisma migrate dev
    ```

  - Depois das migrates, vamos rodar a seed:
    ```
    npx prisma db seed
    ```
    Essa seed vai adicionar os itens no banco de dados

  - Se tudo der certo, a aplicação já esta rodando na sua máquina pronto para testar

### Utilizando a API


## Recycling Point
 ### Rota para criar ponto de coleta

- `POST`:
  ```
  http://localhost:3333/points
  ```

<b>IMPORTANTE</b>

<p>A imagem deve ser colocada em um arquivo file, se colocar o nome da imagem em uma string não irá funcionar, podemos colocar "Multipart", colocando todos os campos com os devidos valores, e em imagem selecionar "file"</p>

<ul>
  <li>Todos os campos são obrigatórios</li>
</ul>


  ```json
  {
    "name": "John Doe",
    "image": file,
    "email": "johnDoe@email.com",
    "whatsapp": "99999999",
    "latitude": 0,
    "longitude": 0,
    "city": "JohnDoeCity",
    "uf": "JD",
    "itemsIds": ["item_id_1", "item_id_2"]
  }
  ```
  - Os itemsIds podem ser consultados na tabela Item
  - Rodando o comando
  `npx prisma studio` você terá acesso a tabela Item
  - Caso não saiba como pegar latitude e longitude, [Clique aqui e descubra como pega as coordenadas](https://support.google.com/maps/answer/18539?hl=pt-BR&co=GENIE.Platform%3DDesktop)

  Status Code: `201`

### Rota para buscar pontos de coletas

- `GET`:
  ```
  http://localhost:3333/points
  ```

Pela query, faça as pesquisas
```
"city": "JohnDoeCity",
"uf": "JD",
"items": "item_id_1,item_id_2"
```

Status Code: `200`

### Rota para buscar ponto de coleta especifico

- `GET`:
```
http://localhost:3333/points/:id
```

Pelo parâmetro da requisição, passe o ID do ponto que deseja buscar
```
 http://localhost:3333/points/1
```

Status Code: `200`

## Itens
 ### Rota para buscar todos os itens

- `GET`:
  ```
  http://localhost:3333/items
  ```

Status Code: `200`


### Feito com ❤️ por Gabriel Vitebo 👋🏽 Entre em contato!

<div > 
  <a href="https://www.instagram.com/gabrielvitebo/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" style="border-radius: 10px"/></a>
  <a href="https://www.linkedin.com/in/gabriel-alves-vitebo-2978ab177/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="border-radius: 10px" target="_blank"></a>
  <a href="mailto:vitebo@outlook.com" ><img src="https://img.shields.io/badge/-vitebo@outlook.com-%230077B5?style=for-the-badge&logo=MicrosoftOutlook&logoColor=white&link=mailto:vitebo@outlook.com" style="border-radius: 10px" target="_blank"></a>
</div>