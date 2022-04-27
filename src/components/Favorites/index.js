import {
  ContainerFavorites,
  NotFavorites,
  Favorite,
  FavoriteImg,
  FavoriteSpan,
} from "./Favorites.styles";
import AddFavorites from "components/AddFavorites";
import { useAuth } from "context/authContext";
import { useFav } from "context/favsContext";
import { useLocation, Link } from "wouter";
import { useEffect, useState } from "react";

export default function Favorites() {
  const [favs, setFavs] = useState(false);
  const { getFavs } = useFav();
  const { user } = useAuth();
  const [, navigate] = useLocation();

  if (!user) return navigate("/");

  if (favs.length < 1) return <NotFavorites>No hay favoritos</NotFavorites>;

  if (user) {
    getFavs()
      .then((data) => setFavs(data))
      .catch((error) => console.log(error));
  }

  return (
    <ContainerFavorites>
      {favs &&
        favs.map(({ id, title, url }) => {
          return (
            <Favorite key={id}>
              <AddFavorites fav={{id, title, url}} handleAction={"delete"} />
              <Link to={`/search/${id}`}>
                <FavoriteSpan>{title}</FavoriteSpan>
                <FavoriteImg src={url} alt={title} />
              </Link>
            </Favorite>
          );
        })}
    </ContainerFavorites>
  );
}
