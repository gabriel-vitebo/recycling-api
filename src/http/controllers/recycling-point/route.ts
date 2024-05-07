import { FastifyInstance } from "fastify";
import { createRecyclingPoints } from "./create-recycling-point";

export async function recyclingPointsRoutes(app: FastifyInstance) {
  app.post('/points', createRecyclingPoints)
}