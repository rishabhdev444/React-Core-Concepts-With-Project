import {useQuery} from 'react-query'
import Axios from 'axios'
import './App.css';
export const Home=()=>{
    /*
    ///// On way to use - useQuery 

    const fetchFacts=async ()=>{
        return await Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    }
    const {data}=useQuery('cats',fetchFacts);
    */

    //Second way to use - useQuery
    const {
        data:catFact,
        isLoading,
        isError,
        refetch
    }=useQuery('cats',()=>{ 
        return Axios.get("https://catfact.ninja/fact")
        .then((res) => res.data); 
    });

    if (isError) {
        return <h1> Sorry, there was an error </h1>;
      }
    
      if (isLoading) {
        return (
            <div class="center">
            <div class="loader">.</div>
        </div> 
        )
      }

    return (
        <div>
        <h1>
            This is HomePage
        </h1>
        <p>{catFact?.fact}</p>
        <button onClick={refetch}>Update Data</button>
        </div>
    )
}