import {array, object, string} from "yup"

export const GetAllGridsInModuleSchema = string().required().uuid()

export const GetByIdGridSchema = object().shape({

    id: string().required().uuid()

})

export const CreateGridSchema = object().shape({
    id_module: string().uuid(),
    name: string().required(),
    description: string(),
    tasks: array().strip()

})

export const UpdateGridSchema = object().shape({
    description: string().required(),
    name: string().required(),
})

export const UpdateGridSchemaParams = string().required().uuid()

export const DeleteGridSchemaParams = string().required().uuid()