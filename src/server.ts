import { env } from "./env";
import { app } from "./app";
import path from "node:path";


app.register(require('@fastify/static'), {
  root: path.resolve(__dirname, '..', 'uploads'),
  prefix: '/uploads/'
})

app.listen({
  host: '0.0.0.0',
  port: env.PORT
}).then(() => {
  console.log(`Server running on port ${env.PORT}`)
})