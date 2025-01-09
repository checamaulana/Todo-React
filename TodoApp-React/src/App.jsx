import { useState } from 'react'


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

  const deleteTodo = (id) => { 
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-red-300 py-8">
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

        <ul className = "space-y-3">
          {todos.map(todo => (
            <li key={todo.id} className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-lg mb-2">
              <span
                className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default App