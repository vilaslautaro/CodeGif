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

export default function Favorites() {
  const { favs } = useFav();
  const { user } = useAuth();
  const [, navigate] = useLocation();

  if (!user) return navigate("/");

  if (favs.length < 1) return <NotFavorites>No hay favoritos</NotFavorites>;

  return (
    <ContainerFavorites>
      {favs.map(({ id, title, url }) => {
        return (
          <Favorite key={id}>
            <AddFavorites fav={id} handleAction={"delete"} />
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
