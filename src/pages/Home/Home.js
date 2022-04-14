import "./Home.css";

import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import Spinner from "components/Spinner/Spinner";
import useGifs from "hooks/useGifs";
import LazyTrending from "components/TrendingSearches/LazyTrending";
import SearchForm from "components/SearchForm/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const { loading, gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Codegif</title>
        <meta
          name="description"
          content="app where you can search for your favorite gifs"
        />
      </Helmet>
      <div>
        <SearchForm initialType={"gifs"} />
      </div>
      <div className="container__home">
        <div className="container__homeGifs">
          <h3 className="container__titulo">Last Search</h3>
          {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        </div>
        <LazyTrending />
      </div>
    </>
  );
}
