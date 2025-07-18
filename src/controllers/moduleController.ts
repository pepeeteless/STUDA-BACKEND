import { Request, Response } from "express";
import ModuleService from "../services/moduleService";
import { CreateModuleSchema, DeleteModuleSchemaParams, GetByIdModuleSchema, UpdateModuleSchema, UpdateModuleSchemaParams } from "../schemas/moduleSchema";
import { v4 as uuidv4 } from "uuid"
import { Module } from "../models/module";

class ModuleController {

    constructor(private moduleService: ModuleService) { }

    getAll = async (req: Request, res: Response): Promise<Module[] | undefined> => {
        try {
            const allModules = await this.moduleService.getAll()
            res.status(200).json(allModules)
            return allModules

        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    }

    getById = async (req: Request, res: Response): Promise<Module | undefined> => {
        try {

            const { id } = req.params

            await GetByIdModuleSchema.validate(req.params)

            const module = await this.moduleService.getById(id)
            res.status(200).json(module)
            return module

        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    }

    create = async (req: Request, res: Response): Promise<Module | undefined> => {
        try {

            await CreateModuleSchema.validate(req.body)

            const id = uuidv4()
            req.body.id = id

            const createdModule = await this.moduleService.create(req.body)
            res.status(200).json(createdModule)
            return createdModule

        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }

    }

    update = async (req: Request, res: Response): Promise<Module | undefined> => {
        try {
            const { id } = req.params

            await UpdateModuleSchema.validate(req.body)
            await UpdateModuleSchemaParams.validate(id)

            const updatedModule = await this.moduleService.update(req.body, id)
            res.status(200).json(updatedModule)
            return updatedModule


        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }



    }

    delete = async (req: Request, res: Response): Promise<string | undefined> => {

        try {

            const { id } = req.params

            await DeleteModuleSchemaParams.validate(id)

            const deletedModule = await this.moduleService.delete(id)

            res.status(200).json(deletedModule)
            return deletedModule

        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }


    }

}

export default ModuleController