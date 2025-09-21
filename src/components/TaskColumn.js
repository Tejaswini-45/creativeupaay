import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTask, moveTask } from "../tasksSlice"

export default function TaskColumn({ status, title }) {
  const tasks = useSelector(state => state.tasks.filter(t => t.status === status))
  const dispatch = useDispatch()
  const [titleInput, setTitleInput] = useState("")
  const [descInput, setDescInput] = useState("")

  return (
    <div className="bg-white rounded p-4 flex-1">
      <h2 className="font-bold mb-2">{title}</h2>
      <form className="mb-4"
        onSubmit={e => {
          e.preventDefault()
          if (titleInput) {
            dispatch(addTask(titleInput, descInput, status))
            setTitleInput("")
            setDescInput("")
          }
        }}>
        <input
          className="border p-1 mr-2"
          value={titleInput}
          onChange={e => setTitleInput(e.target.value)}
          placeholder="Task title"
        />
        <input
          className="border p-1 mr-2"
          value={descInput}
          onChange={e => setDescInput(e.target.value)}
          placeholder="Description"
        />
        <button className="bg-blue-500 text-white px-2 py-1 rounded" type="submit">Add</button>
      </form>
      {tasks.map(task => (
        <div className="bg-gray-100 rounded p-2 mb-2" key={task.id}>
          <div className="font-semibold">{task.title}</div>
          <div className="text-sm text-gray-600">{task.description}</div>
          <div className="mt-2 flex gap-2">
            {["todo", "inprogress", "done"]
              .filter(s => s !== status)
              .map(s =>
                <button
                  key={s}
                  className="text-xs underline"
                  onClick={() => dispatch(moveTask({ id: task.id, status: s }))}
                >Move to {s.charAt(0).toUpperCase() + s.slice(1)}</button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
