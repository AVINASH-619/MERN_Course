import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log("Call the APP")
  const increment=()=>
  {
    setCount(count+1)
  }
  return (
    <div>
      <h1 >{count}</h1>
      <button onClick={increment}>{count}</button>
    </div>
  )
}

export default App
