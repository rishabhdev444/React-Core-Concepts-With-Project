import { useState } from "react"

function App() {

  const [color,setColor]=useState("olive")

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" > 
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-xl">
            <button className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
            <button className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor:"brown"}} onClick={()=>setColor("brown")}>Brown</button>
            <button className="outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>Purple</button>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default App
