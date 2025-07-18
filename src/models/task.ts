export interface Task {
    id: string,
    id_grid: string,
    name: string,
    category: string,
    date: Date,
    timeInMinutes: number,
    file?: any,
    observation?: string | null,
    satisfaction: number
}