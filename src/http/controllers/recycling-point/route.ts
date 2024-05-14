import { FastifyInstance } from "fastify";
import { createRecyclingPoints } from "./create-recycling-point";
import { getSpecificRecyclingPoint } from "./get-specific-recycling-point";
import { fetchRecyclingPoint } from "./fetch-recycling-point";

export async function recyclingPointsRoutes(app: FastifyInstance) {
  app.post('/points', createRecyclingPoints)
  app.get('/points', fetchRecyclingPoint)
  app.get('/points/:id', getSpecificRecyclingPoint)
}