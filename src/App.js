import './App.css';
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import SearchResults from './pages/SearchResults/SearchResults'
import { Route, Link } from 'wouter'
import {GifsContextProvider} from './context/GifsContext';

function App() {

  return (
      <div className="App">
        <Link to="/" className="titulo">Inicio</Link>
        <section className='container'>
          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={Detail}
              path="/gif/:id"
            />
            <Route
              component={SearchResults}
              path="/gifs/:keyword"
            />
          </GifsContextProvider>
        </section>
      </div>
  );
}

export default App;
