import { Grid } from "../../models/grid";
import PrismaGridRepository from "../prisma/prismaGridRepository";

class InMemoryGridRepository implements PrismaGridRepository {

    private _grids: Grid[]

    constructor() {

        this._grids = []

    }

    async getAllGridsInModule(id_module: string): Promise<Grid[]>{
        const allGrids = this._grids.filter(item => item.id_module === id_module)

        if(allGrids.length === 0){
            throw new Error("There are no grids in this module")
        }

        return allGrids
    }
    
    async getAll(): Promise<Grid[] | undefined> {
        return this._grids
    }

    async getById(id: string): Promise<Grid | undefined | null> {

        const grid = await this._grids.find(item => item.id === id)
        return grid

    }

    async create(data: Grid): Promise<Grid> {

        this._grids.push(data)
        return data

    }

    async update(data: Grid, id: string): Promise<Grid> {
        const indexOfGridToBeUpdated = await this._grids.findIndex(item => item.id === id)

        if (indexOfGridToBeUpdated === -1) {
            throw new Error("Grid not found")
        }

        const currentGrid = this._grids[indexOfGridToBeUpdated]
        const updatedGrid = {
            ...currentGrid,
            ...data,
            id: currentGrid.id,
        }

        this._grids[indexOfGridToBeUpdated] = updatedGrid
        return updatedGrid

    }

    async delete(id: string): Promise<string> {
        const indexOfGridToBeDeleted = this._grids.findIndex(item => item.id === id)

        if (indexOfGridToBeDeleted === -1) {
            throw new Error("Grid not found")
        }

        this._grids.splice(indexOfGridToBeDeleted, 1)

        return id

    }

}

export default InMemoryGridRepository