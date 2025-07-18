import { CreateGridSchema, DeleteGridSchemaParams, GetByIdGridSchema, UpdateGridSchema, UpdateGridSchemaParams, GetAllGridsInModuleSchema } from "../schemas/gridSchema";
import GridService from "../services/gridService";

import { Request, Response } from "express";

import {v4 as uuidv4} from 'uuid'

class GridController {
    constructor(private gridService: GridService) { }

    getAllGridsInModule = async (req: Request, res: Response) => {
     
        try {

            const id_module = req.params.id_module
            await GetAllGridsInModuleSchema.validate(id_module)
            const allGrids = await this.gridService.getAllGridsInModule(id_module)
            res.status(200).json(allGrids)
            return allGrids

        } catch (err: any) {
            
            res.status(400).json({error: err.message})

        }

    }

    getAll = async (req: Request, res: Response) => {

        try {

            const allGrids = await this.gridService.getAll()
            res.status(200).json(allGrids)
            return allGrids

        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }

    }

    getById = async (req: Request, res: Response) => {

        try {

            const { id } = req.params

            await GetByIdGridSchema.validate(req.params)

            const grid = await this.gridService.getById(id)
            res.status(200).json(grid)
            return grid

        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }


    }

    create = async (req: Request, res: Response) => {

        try {

            await CreateGridSchema.validate(req.body)
            const id = uuidv4()
            req.body.id = id

            const createdGrid = await this.gridService.create(req.body)
            res.status(200).json(createdGrid)
            return createdGrid


        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }


    }

    update = async (req: Request, res: Response) => {

        try {

            const { id } = req.params
            
            await UpdateGridSchema.validate(req.body)
            await UpdateGridSchemaParams.validate(id)

            const updatedGrid = await this.gridService.update(req.body, id)
            res.status(200).json(updatedGrid)
            return updatedGrid



        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }

    }

    delete = async (req: Request, res: Response) => {

        try {

            const { id } = req.params

            await DeleteGridSchemaParams.validate(id)

            const deletedGrid = await this.gridService.delete(id)
            res.status(200).json(deletedGrid)
            return deletedGrid

        } catch (err: any) {
            res.status(400).json({ error: err.message });

        }

    }

}

export default GridController