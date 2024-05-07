import fastify from "fastify";
import { itemsRoutes } from "./http/controllers/items/route";
import path from "node:path";
import { recyclingPointsRoutes } from "./http/controllers/recycling-point/route";

export const app = fastify()

app.register(require('@fastify/static'), {
  root: path.resolve(__dirname, '..', 'uploads'),
  prefix: '/uploads/'
})

app.register(itemsRoutes)
app.register(recyclingPointsRoutes)