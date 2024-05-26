import fastify from "fastify";
import { itemsRoutes } from "./http/controllers/items/route";
import path from "node:path";
import { recyclingPointsRoutes } from "./http/controllers/recycling-point/route";
import multipart from '@fastify/multipart'

export const app = fastify()

app.register(multipart)

console.log({
  root: path.resolve(__dirname, '..', 'tmp', 'uploads'),
})

app.register(require('@fastify/static'), {
  root: path.resolve(__dirname, '..', 'tmp', 'uploads'),
  prefix: '/uploads/'
})

app.register(itemsRoutes)
app.register(recyclingPointsRoutes)