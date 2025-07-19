import { Task } from "../models/task";
import InMemoryTaskRepository from "../repositories/inMemory/inMemoryTaskRepository";
import PrismaTaskRepository from "../repositories/prisma/prismaTaskRepository";


class TaskService {

    constructor(private taskRepository: InMemoryTaskRepository | PrismaTaskRepository){}

    async getAllTasksInGrid(id_grid: string){
        const allTasks = await this.taskRepository.getAllTasksInGrid(id_grid)
        return allTasks
    }

    async getAll() {

        const allTasks = await this.taskRepository.getAll()
        return allTasks

    }

    async getByID(id: string) {

        const task = await this.taskRepository.getByID(id)
        return task

    }

    async create(data: Task) {

        const createdTask = await this.taskRepository.create(data)
        return createdTask

    }

    async update (data: Task, id: string) {

        const updatedTask = await this.taskRepository.update(data, id)
        return updatedTask

    }

    async delete(id: string) {

        const deletedTask = await this.taskRepository.delete(id)
        return deletedTask

    }

}

export default TaskService