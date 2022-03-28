import './App.css';
import ListOfGifs from './components/ListOfGifs'
import { Routes, Route, Link } from "react-router-dom";
import {createContext} from 'react';

function App() {

  


  return (
    <div className="App">
      <h1>Gifs</h1>
      <Routes>
        <Link className="app__Enlaces" to="/gif/Bitcoin">Bitcoin</Link>
        <Link className="app__Enlaces" to="/gif/Ethereum">Ethereum</Link>
        <Link className="app__Enlaces" to="/gif/Doge">Doge</Link>
        <Link className="app__Enlaces" to="/gif/NFT">NFT</Link>
        <Route
          path="/gif/:keyword"
          element={ <ListOfGifs/> }
        />
      </Routes>
    </div>
  );
}

export default App;
