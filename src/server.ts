import fastify from "fastify";
import { env } from "./env";

const app = fastify()

app.listen({
  host: '0.0.0.0',
  port: env.PORT
}).then(() => {
  console.log(`Server running on port ${env.PORT}`)
})