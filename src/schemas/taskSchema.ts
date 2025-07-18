import { date, number, object, string } from "yup";

export const getAllTasksInGridShema = string().required().uuid()

export const GetByIdTaskSchema = object().shape({

id: string().required().uuid()

})

export const CreateTaskSchema = object().shape({
    id_grid: string().uuid(),
    name: string().required(),
    category: string().required(),
    date: date().required().max(new Date(), "A data não pode ser no futuro"),
    time: string().required().matches(/^(\d{1,2}h(\d{1,2}min)?|\d{1,3}min)$/, 'Formato inválido (ex: 2h30min ou 45min)'),
    satisfaction: number().required(),
    observation: string().notRequired()

    
})

export const UpdateTaskSchema = object().shape({
    name: string().required(),
    category: string().required(),
    date: date().required().max(new Date(), "A data não pode ser no futuro"),
    time: string().required().matches(/^(\d{1,2}h(\d{1,2}min)?|\d{1,3}min)$/, 'Formato inválido (ex: 2h30min ou 45min)'),
    satisfaction: number().required(),
    observation: string().notRequired()
})

export const UpdateTaskSchemaParams = string().required().uuid()

export const DeleteTaskSchemaParams = string().required().uuid()