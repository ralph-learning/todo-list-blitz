import { ChangeEvent, useState } from "react"
import { useMutation } from "blitz"

import updateTaskMutation from "../mutations/update"
import deleteTaskMutation from "../mutations/delete"

import { ITask } from "../types"

export default function Task({ label, completed = false, id, onDelete }: ITask) {
  const [updateTask] = useMutation(updateTaskMutation)
  const [deleteTask] = useMutation(deleteTaskMutation)

  const [taskCompleted, setTaskCompleted] = useState(completed)

  async function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { checked } = event.currentTarget

    try {
      setTaskCompleted(checked)
      await updateTask({ id, completed: checked })
    } catch (error) {
      setTaskCompleted(!checked)
      console.error(error)
    }
  }

  async function handleDelete() {
    try {
      await deleteTask(id)
      onDelete(id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <label style={{ display: "block" }}>
      <input type="checkbox" onChange={handleChange} checked={taskCompleted} />
      {label}
      <button onClick={handleDelete}>X</button>
    </label>
  )
}
