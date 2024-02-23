import {QueryClient,QueryClientProvider} from 'react-query'
import './App.css';
import { Home } from './Home';

function App() {
  const client=new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false, /*This will prevent the data to update whenever we switch the tabs*/
      }
    }
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Home/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
