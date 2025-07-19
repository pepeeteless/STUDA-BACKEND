import { Grid } from "../models/grid";
import InMemoryGridRepository from "../repositories/inMemory/inMemoryGridRepository";
import PrismaGridRepository from "../repositories/prisma/prismaGridRepository";


class GridService {
    constructor(private gridRepository: InMemoryGridRepository | PrismaGridRepository){}

    async getAllGridsInModule(id_module: string){
        const allGrids = await this.gridRepository.getAllGridsInModule(id_module)
        return allGrids
    }

    async getAll(){
        const allGrids = await this.gridRepository.getAll()
        return allGrids
    }
    
    async getById(id: string){

        const grid = await this.gridRepository.getById(id)
        
         if(!grid){
            throw new Error("Grid not found")
        }

        return grid

    }
    
    async create(data: Grid){

        const createdGrid = await this.gridRepository.create(data)
        return createdGrid
        

    }
    
    async update(data: Grid, id: string){
        const updatedGrid = await this.gridRepository.update(data, id)
        return updatedGrid

    }
    
    async delete(id: string){

        const deletedGrid = await this.gridRepository.delete(id)
        return deletedGrid

    }

}

export default GridService