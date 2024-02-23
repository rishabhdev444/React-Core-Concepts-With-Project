import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0);

  const addValue=()=>{ 
    if(counter<5) setCounter(counter+1);
  }

  const removeValue=()=>{
    if(counter>0) setCounter(counter-1);
  }
  
  return (
    <>
      <h1>Counter App</h1>
      <h2 class="addValue">Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
