import './styles/global.css';
import { Habit } from './components/Habits'

function App() {

  return (
    <div>
      <Habit completed={3} />
      <Habit completed={5} />
      <Habit completed={9} />
      <Habit completed={1} />
    </div>
  )
}

export default App
