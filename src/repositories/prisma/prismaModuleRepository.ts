import { PrismaClient } from "../../../generated/prisma";
import { Module } from "../../models/module";

const prisma = new PrismaClient()


class PrismaModuleRepository {


    async getAll(): Promise<Module[] | undefined> {
        const allModules = await prisma.module.findMany({
            include: {
                grids: true
            }
        })
        console.log(allModules)
        return allModules
    }

    async getById(id: string): Promise<Module | undefined | null> {
        const module = await prisma.module.findFirst({
            where: {
                id
            },
            include: {
                grids: true
            }
        })
        console.log(module)
        return module
    }

    async create(data: Module): Promise<Module> {
        const createdModule = await prisma.module.create({
            data
        })
        console.log(createdModule)
        return createdModule
    }

    async update(data: Module, id: string): Promise<Module> {
        const updatedModule = await prisma.module.update({
            data,
            where: {
                id
            }
        })
        console.log(updatedModule)
        return updatedModule
    }

    async delete(id: string): Promise<string> {
        const deletedModule = await prisma.module.delete({
            where: {
                id
            }
        })
        console.log(deletedModule)
        return id
    }

}

export default PrismaModuleRepository