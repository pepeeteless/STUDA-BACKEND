import { date, number, object, string } from "yup";

export const getAllTasksInGridShema = string().required().uuid()

export const GetByIdTaskSchema = object().shape({

id: string().required().uuid()

})

export const CreateTaskSchema = object().shape({
    id_grid: string().uuid().required(),
    name: string().required(),
    category: string().required(),
    date: date().required().max(new Date(), "A data não pode ser no futuro"),
    timeInMinutes: number().transform(value => Number(value)).required(),
    satisfaction: number().transform(value => Number(value)).required(),
    observation: string().notRequired()

    
})

export const UpdateTaskSchema = object().shape({
    name: string().required(),
    category: string().required(),
    date: date().required().max(new Date(), "A data não pode ser no futuro"),
    timeInMinutes: number().transform(value => Number(value)).required(),
    satisfaction: number().transform(value => Number(value)).required(),
    observation: string().notRequired()
})

export const UpdateTaskSchemaParams = string().required().uuid()

export const DeleteTaskSchemaParams = string().required().uuid()