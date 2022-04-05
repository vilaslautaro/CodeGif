import { Suspense, lazy } from 'react'
import './App.css';
import Detail from './pages/Detail/Detail'
import SearchResults from './pages/SearchResults/SearchResults'
import { Route, Link } from 'wouter'
import { GifsContextProvider } from './context/GifsContext';

const HomePage = lazy(
  () => import('./pages/Home/Home')
)

function App() {

  return (
    <div className="App">
      <Link to="/" className="titulo">Inicio</Link>
      <Suspense fallback={null} >
        <section className='container'>
          <GifsContextProvider>
            <Route
              component={HomePage}
              path="/"
            />
            <Route
              component={Detail}
              path="/gif/:id"
            />
            <Route
              component={SearchResults}
              path="/:type/:keyword/:rating?"
            />
            <Route
              component={() => <h1>Error 404</h1>}
              path="/404"
            />
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  );
}

export default App;
