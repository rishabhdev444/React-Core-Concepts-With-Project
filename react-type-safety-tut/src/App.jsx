import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/Person'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Person
        name={"Dev"}
        email={"rishabh@gmail.com"}
        age={24}
        isMarried={true}
        friends={["keshav","gaurav","kd","ritik","prakhar"]}
        />


       </div>
    </>
  )
}

export default App
