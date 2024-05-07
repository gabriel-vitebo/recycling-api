import fastify from "fastify";
import { itemsRoutes } from "./http/controllers/items/route";

export const app = fastify()

app.register(itemsRoutes)