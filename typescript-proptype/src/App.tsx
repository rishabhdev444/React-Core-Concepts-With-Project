import './App.css';
import {Person, City} from './components/Person';

function App() {
  return (
    <div className="App">
     <Person
        name={"Dev"}
        email={"rishabh@gmail.com"}
        age={24}
        isMarried={true}
        friends={["keshav","gaurav","kd","ritik","prakhar"]}
        city={City.Aligarh}
        />
    </div>
  );
}

export default App;
