import { Router } from "express";

import GridController from "../controllers/gridController";
import GridService from "../services/gridService";
import InMemoryGridRepository from "../repositories/inMemory/inMemoryGridRepository";

const gridController = new GridController(new GridService(new InMemoryGridRepository()))
const gridRoutes = Router()

gridRoutes.get("/", gridController.getAll) // getAll Grids
gridRoutes.get("/:id", gridController.getById) // Get grid by ID
gridRoutes.get("/module/:id_module",gridController.getAllGridsInModule) // Get all grids in Module

gridRoutes.post("/", gridController.create) // Create a new grid
gridRoutes.put("/:id", gridController.update) // Edit a grid
gridRoutes.delete("/:id", gridController.delete) // Delete a grid

export default gridRoutes

