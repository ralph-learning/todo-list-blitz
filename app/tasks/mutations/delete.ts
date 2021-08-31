import db from "db"

export default async function deleteTask(id) {
  return await db.task.delete({ where: { id } })
}
