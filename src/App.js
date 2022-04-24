import { Suspense, lazy } from "react";
import "./App.css";
import Detail from "pages/Detail/Detail";
import SearchResults from "pages/SearchResults/SearchResults";
import { Route, Link } from "wouter";
import { FavContextProvider } from "context/favsContext";
import { GifsContextProvider } from "context/GifsContext";
import { AuthContextProvider } from "context/authContext";
import Header from "components/Header/Header";
import Login from "./pages/Login/Login";
import Favorites from "pages/Favorites/Favorites";

const HomePage = lazy(() => import("pages/Home/Home"));

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <FavContextProvider>
          <GifsContextProvider>
            <Header />
            <Link to="/" className="titulo">
              GifSticky
            </Link>
            <Suspense fallback={null}>
              <section className="container">
                <Route component={HomePage} path="/" />
                <Route component={Detail} path="/search/:id" />
                <Route
                  component={SearchResults}
                  path="/search/:type/:keyword/:rating?"
                />
                <Route component={Login} path="/login" />
                <Route component={Favorites} path="/favorites" />
                <Route component={() => <h1>Error 404</h1>} path="/404" />
              </section>
            </Suspense>
          </GifsContextProvider>
        </FavContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
