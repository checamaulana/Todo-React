import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => { 
    e.preventDefault()
    if (input.trim() !== '') { 
      setTodos([...todos, { id: Date.now(), text: input, isCompleted: false }])
      setInput('')
    } 
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todos.id === id ? { ...todo, completed: !todo.completed } : todo

    ))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Todo App</h1>
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Add a new todo" 
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </form>
        </div>
    </div>
  )
}

export default App