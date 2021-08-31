import { useQuery } from "blitz"
import React, { useEffect, useState } from "react"

import Layout from "app/core/layouts/Layout"
import Task from "../components/Task"

import getTasks from "../queries/getAll"
import FormTask from "../components/FormTask"

function Tasks() {
  const [tasks, { setQueryData }] = useQuery(getTasks, undefined)

  function handeDelete(id: number) {
    const newTasks = [...tasks] // make a copy
    const taskIndex = newTasks.findIndex((task) => task.id === id)

    // remove tasks
    newTasks.splice(taskIndex, 1)
    // set in the state without the task removed
    setQueryData([...newTasks])
  }

  return (
    <>
      <h1>Tasks</h1>
      <FormTask tasks={tasks} setTasks={setQueryData} />

      {tasks.map(({ id, label, completed }) => (
        <Task key={id} id={id} label={label} completed={completed} onDelete={handeDelete} />
      ))}

      {tasks.length === 0 && <p>Empty</p>}
    </>
  )
}

Tasks.getLayout = (page) => <Layout title="Task">{page}</Layout>

export default Tasks
