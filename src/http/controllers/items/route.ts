import { FastifyInstance } from "fastify";
import { fetchAllItems } from "./fetch-all-items";

export async function itemsRoutes(app: FastifyInstance) {
  app.get('/items', fetchAllItems)
}