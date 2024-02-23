import './App.css';
import {useState} from 'react';
import Axios from 'axios'
function App() {

  const [excuse,setExcuse]=useState("")
//Using Axios to fetch
  const fetchData=(excuse)=>{
    Axios.get( `https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res)=>{
        setExcuse(res.data[0].excuse);
    })
  };

  //Using Fetch 
  // const fetchData=(excuse)=>{
  //   fetch(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then(res=>res.json()).then((data)=>{
  //     console.log(data[0].excuse)
  //       setExcuse(data[0].excuse);
  //   })
  // };

  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
        <button onClick={()=>fetchData("party")}>For Party</button>
        <button onClick={()=>fetchData("family")}>For Family</button>
        <button onClick={()=>fetchData("office")}>For Office</button>
        <h1>{excuse}</h1>
    </div>
  );
}

export default App;
