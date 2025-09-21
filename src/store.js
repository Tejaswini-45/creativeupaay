import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'

const loadState = () => {
  try {
    const serialized = localStorage.getItem('tasks');
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
}
const saveState = (state) => {
  try {
    localStorage.setItem('tasks', JSON.stringify(state));
  } catch {}
}
const store = configureStore({
  reducer: { tasks: tasksReducer },
  preloadedState: { tasks: loadState() || [] }
})
store.subscribe(() => saveState(store.getState().tasks))
export default store
