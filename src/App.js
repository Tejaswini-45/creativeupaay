import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 p-4">
        <Dashboard />
      </div>
    </Provider>
  )
}
export default App
