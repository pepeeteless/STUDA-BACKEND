import { PrismaClient } from "../../../generated/prisma";
import { Grid } from "../../models/grid";

const prisma = new PrismaClient()

class PrismaGridRepository {

    async getAllGridsInModule(id_module: string): Promise<Grid[]> {
        const allGridsInModule = await prisma.grid.findMany({
            where: {
                id_module
            }
        })
        console.log(allGridsInModule)
        return allGridsInModule
    }

    async getAll(): Promise<Grid[] | undefined> {
        const allGrids = await prisma.grid.findMany({
            include: {
                tasks: true
            }
        })
        console.log(allGrids)
        return allGrids
    }

    async getById(id: string): Promise<Grid | undefined | null> {
        const grid = await prisma.grid.findFirst({
            where: {
                id
            },
            include: {
                tasks: true
            }
        })
        console.log(grid)
        return grid
    }

    async create(data: Grid): Promise<Grid> {
        const createdGrid = await prisma.grid.create({
            data
        })
        console.log(createdGrid)
        return createdGrid
    }

    async update(data: Grid, id: string): Promise<Grid> {
        const updatedGrid = await prisma.grid.update({
            data,
            where: {
                id
            }
        })
        console.log(updatedGrid)
        return updatedGrid
    }

    async delete(id: string): Promise<string> {
        const deletedGrid = await prisma.grid.delete({
            where: {
                id
            }
        })
        console.log(deletedGrid)
        return id
    }

}

export default PrismaGridRepository