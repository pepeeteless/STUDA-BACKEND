import { Router } from "express"
import ModuleController from "../controllers/moduleController"
import ModuleService from "../services/moduleService"
import InMemoryModuleRepository from "../repositories/inMemory/inMemoryModuleRepository"
import PrismaModuleRepository from "../repositories/prisma/prismaModuleRepository"

    //Change instance to test in Memory Repository!!!

//const moduleController = new ModuleController(new ModuleService(new InMemoryModuleRepository())) // LOCAL REPOSITORY
const moduleController = new ModuleController(new ModuleService(new PrismaModuleRepository())) // PRISMA REPOSTORY

const modulesRoutes = Router()


modulesRoutes.get("/", moduleController.getAll) // getAll Modules
modulesRoutes.get("/:id", moduleController.getById) // Get Module by ID

modulesRoutes.post("/", moduleController.create) // Create a new module
modulesRoutes.put("/:id", moduleController.update) // Edit a module
modulesRoutes.delete("/:id", moduleController.delete) // Delete a module

export default modulesRoutes
