import { ContainerHome, ContainerHomeGif, ContainerTitle } from "./Home.styles";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner/Spinner";
import useGifs from "hooks/useGifs";
import LazyTrending from "components/TrendingSearches/LazyTrending";
import SearchForm from "components/SearchForm";

export default function Home() {
  const { loading, gifs } = useGifs();
  return (
    <>
      <div>
        <SearchForm initialType={"gifs"} />
      </div>
      <ContainerHome>
        <ContainerHomeGif>
          <ContainerTitle>Gifs</ContainerTitle>
          {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        </ContainerHomeGif>
        <LazyTrending />
      </ContainerHome>
    </>
  );
}
