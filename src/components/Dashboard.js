import React from "react"
import TaskColumn from "./TaskColumn"

const columns = [
  { title: "To Do", status: "todo" },
  { title: "In Progress", status: "inprogress" },
  { title: "Done", status: "done" }
]

export default function Dashboard() {
  return (
    <div className="flex gap-4">
      {columns.map(c => (
        <TaskColumn key={c.status} status={c.status} title={c.title} />
      ))}
    </div>
  )
}
