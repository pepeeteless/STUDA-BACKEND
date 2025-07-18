
import { Module } from "../../models/module"

class InMemoryModuleRepository {

    private _modules: Module[]

    constructor() {
        this._modules = []
    }
 
    async getAll(): Promise<Module[] | undefined> {
        return this._modules
    }

    async getById(id: string): Promise<Module | undefined> {
        const module = this._modules.find(item => item.id === id)
        return module
    }

    async create(data: Module): Promise<Module> {
        this._modules.push(data)
        return data
    }

    async update(data: Module, id: string): Promise<Module> {
        const indexOfModuleToBeUpdated = this._modules.findIndex(item => item.id === id)

        if(indexOfModuleToBeUpdated === -1){
            throw new Error("Module not found")
        }

        const current = this._modules[indexOfModuleToBeUpdated]

        this._modules[indexOfModuleToBeUpdated] = {
            ...current,
            ...data,
        }

        return data


    }

    async delete(id: string): Promise<string> {
        const indexOfModuleToBeDeleted = this._modules.findIndex(item => item.id === id)

        if (indexOfModuleToBeDeleted === -1) {
            throw new Error("Module not found")
        }

        this._modules.splice(indexOfModuleToBeDeleted, 1)
        return id
    }

}

export default InMemoryModuleRepository