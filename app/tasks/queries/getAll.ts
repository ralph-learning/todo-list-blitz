import db from "db"

export default async function getTask() {
  return await db.task.findMany({ orderBy: { createdAt: "desc" } })
}
