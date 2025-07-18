import { Module } from "../models/module"
import InMemoryModuleRepository from "../repositories/inMemory/inMemoryModuleRepository"

class ModuleService {

    constructor(private moduleRepository: InMemoryModuleRepository){}

    async getAll(): Promise<Module[] | undefined>{
        const allModules = await this.moduleRepository.getAll()
        return allModules
    }
    
    async getById(id: string): Promise<Module | undefined>{
        const module = await this.moduleRepository.getById(id)
        
        if (!module){
            throw new Error("Module not exists")
        }
        return module
    }
    
    async create(data: Module): Promise<Module>{
        const createdModule = await this.moduleRepository.create(data)
        return createdModule
    }
    
    async update(data: any, id: string): Promise<Module | undefined>{
        
        const updatedModule = await this.moduleRepository.update(data, id)
        data.id = id
        return updatedModule
        


    }
    
    async delete(id: string): Promise<string | undefined>{
        const deletedModule = await this.moduleRepository.delete(id)
        return deletedModule
    }

}

export default ModuleService