import { Request, Response } from "express";
import TaskService from "../services/taskService";
import { CreateTaskSchema, GetByIdTaskSchema, UpdateTaskSchema, UpdateTaskSchemaParams,getAllTasksInGridShema } from "../schemas/taskSchema";

import {v4 as uuidv4} from "uuid"
import { DeleteGridSchemaParams } from "../schemas/gridSchema";


class TaskController {

    constructor(private taskService: TaskService) { }

    getAllTasksInGrid = async (req: Request, res: Response) => {
        try {  

            const id_grid = req.params.id_grid
            await getAllTasksInGridShema.validate(id_grid)
            
            const allTasks = await this.taskService.getAllTasksInGrid(id_grid)

            res.status(200).json(allTasks)
            return allTasks

            
        } catch (err: any) {
            res.status(400).json({error: err.message})
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {

            const allTasks = await this.taskService.getAll()
            res.status(200).json(allTasks)
            return allTasks

        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    }

    getByID = async (req: Request, res: Response) => {
        try {

            const { id } = req.params

           await GetByIdTaskSchema.validate(req.params)

            const task = await this.taskService.getByID(id)
            res.status(200).json(task)
            return task


        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    }

    create = async (req: Request, res: Response) => {

        try {
            const validatedData = await CreateTaskSchema.validate(req.body)

            const taskToCreate = {
                ...validatedData,
                id: uuidv4()
            }

            const createdTask = await this.taskService.create(taskToCreate)
            res.status(201).json(createdTask)
            return createdTask

        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }



    }

    update = async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const validatedData = await UpdateTaskSchema.validate(req.body)
            await UpdateTaskSchemaParams.validate(id)

            const taskToUpdate = {
                ...validatedData,
                id: id,
                id_grid: req.body.id_grid
            }

            const updatedTask = await this.taskService.update(taskToUpdate, id)
            res.status(200).json(updatedTask)
            return updatedTask

        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    }

    delete = async (req: Request, res: Response) => {
        try {

            const { id } = req.params

            await DeleteGridSchemaParams.validate(id)

             const deletedTask = await this.taskService.delete(id)
             res.status(200).json(deletedTask)
             return deletedTask

        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    }

}

export default TaskController
