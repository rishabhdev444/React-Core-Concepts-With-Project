import { useState, useCallback, useEffect, useRef } from "react"

function App() {
 const [length, setLength]=useState(8);
 const [numberAllowed, setNumberAllowed]=useState(false);
 const [charAllowed, setCharAllowed]=useState(false);
 const [password, setPassword]=useState("");

 //useRef Hook
 const pwdRef=useRef(null);

 const pwdGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(numberAllowed) str+="0123456789";
  if(charAllowed) str+="~!@#$%^&*()_-+=[]{}";

  for (let index = 0; index <= length; index++) {
    let charInd=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(charInd)
    
  }

  setPassword(pass);

 },[length,numberAllowed,charAllowed,setPassword])

 const copyPwdToCB=useCallback(()=>{
  pwdRef.current?.select();
  // pwdRef.current?.setSelectionRange(0,5); //to select the range of password
    window.navigator.clipboard.writeText(password);
    
 },[password])


 useEffect(()=>{
    pwdGenerator()
 },[length,numberAllowed,charAllowed,pwdGenerator])


  return (
    <>
     
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className='text-2xl text-center text-white my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={pwdRef}/>

          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" id="copied" onClick={copyPwdToCB}>Copy</button>
        </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input type="range" min={6} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}} className="curson-pointer"/>
              <label> Length :{length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed(prev=>!prev);}}/>
              <label> Number </label>
            </div>

            <div className="flex items-center gap-x-1">
              <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{setCharAllowed(prev=>!prev);}}/>
              <label> Characters </label>
            </div>

            

          </div>
      </div>
    </>
  )
}

export default App
