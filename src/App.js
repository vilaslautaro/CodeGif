import './App.css';
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import SearchResults from './pages/SearchResults/SearchResults'
import { Route, Link } from 'wouter'

function App() {

  return (
    <div className="App">
      <Link to="/" className="titulo">Inicio</Link>
      <section className='container'>
        <Route
          component={Home}
          path="/"
        />
        <Route
          component={Detail}
          path="/gif/:keyword/:id"
        />
        <Route
          component={SearchResults}
          path="/gifs/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
