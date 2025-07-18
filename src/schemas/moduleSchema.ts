import { array, object, string } from "yup";

export const GetByIdModuleSchema = object().shape({
    id: string().required().uuid()
})

export const CreateModuleSchema = object().shape({
    name: string().required(),
    description: string().required()
})

export const UpdateModuleSchema = object().shape({
    name: string().required(),
    description: string().notRequired(),
})

export const UpdateModuleSchemaParams = string().required().uuid()

export const DeleteModuleSchemaParams = string().required().uuid()

 

