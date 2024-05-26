import fastify from "fastify";
import { itemsRoutes } from "./http/controllers/items/route";
import path from "node:path";
import { recyclingPointsRoutes } from "./http/controllers/recycling-point/route";
import multipart from '@fastify/multipart'
import { env } from "./env";

export const app = fastify()

app.register(multipart)

console.log({
  root: path.resolve(__dirname, '..', 'tmp', 'uploads'),
  dirname: __dirname
})

const rootPath = env.NODE_ENV === 'dev'
  ? path.resolve(__dirname, '..', 'tmp', 'uploads')
  : path.resolve(__dirname, '..', '..', 'tmp', 'uploads')

app.register(require('@fastify/static'), {
  root: rootPath,
  prefix: '/uploads/'
})

app.register(itemsRoutes)
app.register(recyclingPointsRoutes)