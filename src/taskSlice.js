import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  // Example initial task
  // { id: nanoid(), title: 'Example', description: 'Demo task', status: 'todo' }
]

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, description, status) {
        return {
          payload: { id: nanoid(), title, description, status }
        }
      }
    },
    moveTask(state, action) {
      const { id, status } = action.payload
      const task = state.find(t => t.id === id)
      if (task) task.status = status
    },
    // add filter logic as needed
  }
})

export const { addTask, moveTask } = tasksSlice.actions
export default tasksSlice.reducer
