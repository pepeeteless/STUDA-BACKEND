import { PrismaClient } from "../../../generated/prisma";
import { Task } from "../../models/task";

const prisma = new PrismaClient()

class PrismaTaskRepository {

    async getAllTasksInGrid(id_grid: string): Promise<Task[]> {
        const allTasksInGrid = await prisma.task.findMany({
            where: {
                id_grid
            }
        })
        console.log(allTasksInGrid)
        return allTasksInGrid
    }

    async getAll(): Promise<Task[] | undefined> {
        const allTasks = await prisma.task.findMany({
    
        })
        console.log(allTasks)
        return allTasks
    }

    async getByID(id: string): Promise<Task | undefined | null> {
        const task = await prisma.task.findFirst({
            where: {
                id
            }
        })
        console.log(task)
        return task
    }

    async create(data: Task): Promise<Task> {
        const createdTask = await prisma.task.create({
            data
        })
        console.log(createdTask)
        return createdTask
    }

    async update(data: Task, id: string): Promise<Task> {
      const updatedModule = await prisma.task.update({
        data,
        where: {
            id
        }
      })
      console.log(updatedModule)
      return updatedModule
    }

    async delete(id: string): Promise<string> {
       const deletedTask = await prisma.task.delete({
        where: {
            id
        }
       })
       console.log(deletedTask)
       return id
    }

}

export default PrismaTaskRepository