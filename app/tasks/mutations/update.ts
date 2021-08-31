import db from "db"

type InsertInput = {
  id: number
  completed: boolean
}

export default async function updateTask(input: InsertInput) {
  await db.task.update({
    where: { id: input.id },
    data: { completed: input.completed },
  })
}
