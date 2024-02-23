import { useState } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask,setNewTask]=useState("")

  const addTask=()=>{
    const newTodoList=[...todoList,newTask];
    setTodoList(newTodoList);
  }
  return (
    <>
      <h2>Todo App</h2>
      <div>
        <div className='addTask'>
          <input onChange={(e)=>{
            setNewTask(e.target.value)
          }} type="text" />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div>
          {todoList.map((task)=>{
            return <h3>{task}</h3>;
          })}
        </div>
      </div>
    </>
  )
}

export default App
