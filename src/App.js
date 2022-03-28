import './App.css';
import {useState} from 'react'
import ListOfGifs from './components/ListOfGifs'



function App() {

  const [searchValue, setSearchValue] = useState('bitcoin')

  const newSearch= value => {
    setSearchValue(value)
  }

  return (
    <div className="App">
      <h1>Gifs</h1>
      <header>
        <nav>
          <button onClick={() => newSearch('ethereum')}>Ethereum</button>
          <button onClick={() => newSearch('doge')}>Doge</button>
        </nav>
      </header>
      <ListOfGifs search={searchValue} />
    </div>
  );
}

export default App;
