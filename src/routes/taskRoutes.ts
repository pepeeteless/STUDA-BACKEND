import { Router } from "express"
import TaskController from "../controllers/taskController"
import TaskService from "../services/taskService"
import InMemoryTaskRepository from "../repositories/inMemory/inMemoryTaskRepository"


const taskController = new TaskController(new TaskService(new InMemoryTaskRepository()))
const taskRoutes = Router()

taskRoutes.get("/",taskController.getAll) // Get all Tasks
taskRoutes.get("/:id", taskController.getByID) // Get Task By ID
taskRoutes.get('/grid/:id_grid', taskController.getAllTasksInGrid) // Get all Tasks in grid

taskRoutes.post("/", taskController.create) // Create a new Task
taskRoutes.put("/:id", taskController.update) // Edit task
taskRoutes.delete("/:id", taskController.delete) // Delete Task


export default taskRoutes