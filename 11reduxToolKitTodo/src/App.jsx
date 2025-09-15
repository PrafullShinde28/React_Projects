
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'  // <-- Add this


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='t-30 tcolor-red'>Learn About Redux Toolkit</h1>
                 <AddTodo/>
                 <Todos/>
    
    </>
  )
}

export default App
