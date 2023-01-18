import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Habit } from './components/Habits'

function App() {
  const [count, setCount] = useState(0)

  return (

    <Habit />
  )
}

export default App
