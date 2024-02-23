import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let newArr=[1,2,3];
  let newObj={
    name:"Hello"
  }

  return (
    <>
      <h1 className='bg-white text-black rounded-xl p-4 mb-4'>Tailwind CSS</h1>

      <Card username="Rishabh" someObj={newArr} btnText="Click Me"/>
      <Card username="Dev" someObj={newObj} btnText="Visit me"/>

    </>
  )
}

export default App
