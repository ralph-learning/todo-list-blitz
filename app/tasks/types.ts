import { Task } from "db"

export type ITask = Omit<Task, "createdAt"> & {
  onDelete: (id: number) => void
}

export type IFormTasksProps = {
  tasks: Task[]
  setTasks: any
}
