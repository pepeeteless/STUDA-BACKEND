import { Task } from "../../models/task";
import PrismaTaskRepository from "../prisma/prismaTaskRepository";

class InMemoryTaskRepository implements PrismaTaskRepository {

    private _tasks: Task[]

    constructor() {

        this._tasks = []

    }

    async getAllTasksInGrid(id_grid: string): Promise<Task[]>{
        const allTasks = this._tasks.filter(item => item.id_grid === id_grid)
        
        if(allTasks.length === 0){
            throw new Error("There are no Tasks in this Grid")
        }

        return allTasks
    }

    async getAll(): Promise<Task[] | undefined> {
        return this._tasks
    }

    async getByID(id: string): Promise<Task | undefined | null> {

        const task = await this._tasks.find(item => item.id === id)

        if (!task) {
            throw new Error("Task not found")
        }

        return task

    }

    async create(data: Task): Promise<Task> {

        this._tasks.push(data)

        
        return data

    }

    async update(data: Task, id: string): Promise<Task> {
        const indexOfTaskToBeUpdated = this._tasks.findIndex(item => item.id === id)

        if (indexOfTaskToBeUpdated === -1) {
            throw new Error("task not found")
        }

        const currentTask = this._tasks[indexOfTaskToBeUpdated]
        const updatedTask = {
            ...currentTask,
            ...data,
            id: currentTask.id,
           

        }

        this._tasks[indexOfTaskToBeUpdated] = updatedTask
        

        return updatedTask

    }

    async delete(id: string): Promise<string> {
        const indexOfTaskToBeDeleted = this._tasks.findIndex(item => item.id === id)

        if (indexOfTaskToBeDeleted === -1) {
            throw new Error("Task not found")
        }

        const TaskToDelete = this._tasks[indexOfTaskToBeDeleted]

        this._tasks.splice(indexOfTaskToBeDeleted, 1)
      
        return id
    }

}

export default InMemoryTaskRepository