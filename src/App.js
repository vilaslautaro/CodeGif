import './App.css';
import ListOfGifs from './components/ListOfGifs'
import ItemGif from './components/ItemGif'
import { Link, Route } from 'wouter'



function App() {
  
  return (
    <div className="App">
      <h1>Gifs</h1>
      <nav className='menu'>
        <Link className='menu__enlaces' to='/'>Inicio</Link>
        <Link className='menu__enlaces' to='/gifs/Bitcoin'>Bitcoin</Link>
        <Link className='menu__enlaces' to='/gifs/Ethereum'>Ethereum</Link>
        <Link className='menu__enlaces' to='/gifs/Doge'>Doge</Link>
      </nav>
      <Route
        component={ListOfGifs}
        path="/gifs/:keyword"
      />
      <Route 
        component={ItemGif}
        path="/gif/:keyword/:id"
      />
    </div>
  );
}

export default App;
