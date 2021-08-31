import { useState } from "react"
import { useMutation } from "blitz"

import insertTask from "../mutations/insert"
import { IFormTasksProps } from "../types"

export default function FormTask({ tasks, setTasks }: IFormTasksProps) {
  const [todoInput, setTodoInput] = useState("")
  const [create] = useMutation(insertTask)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const task = await create({ label: todoInput })

    setTasks([task, ...tasks])
    setTodoInput("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={({ currentTarget }) => setTodoInput(currentTarget.value)}
        value={todoInput}
      />
    </form>
  )
}
