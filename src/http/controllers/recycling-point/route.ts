import { FastifyInstance } from "fastify";
import { createRecyclingPoints } from "./create-recycling-point";
import { getSpecificRecyclingPoint } from "./get-specific-recycling-point";
import { fetchRecyclingPoint } from "./fetch-recycling-point";

import multer from 'fastify-multer'
import multerConfig from "../../../config/multer";

const upload = multer(multerConfig)

export async function recyclingPointsRoutes(app: FastifyInstance) {
  app.post('/points', { preHandler: upload.single('image') }, createRecyclingPoints)
  app.get('/points', fetchRecyclingPoint)
  app.get('/points/:id', getSpecificRecyclingPoint)
}