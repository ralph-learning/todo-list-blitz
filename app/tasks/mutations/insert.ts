import db from "db"

type InsertInput = {
  label: string
}

export default async function inserTask(input: InsertInput) {
  return await db.task.create({
    data: {
      label: input.label,
      completed: false,
    },
  })
}
