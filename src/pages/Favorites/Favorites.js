import AddFavorites from "components/AddFavorites/AddFavorites";
import { useAuth } from "context/authContext";
import { useFav } from "context/favsContext";
import { useLocation, Link } from "wouter";
import "./Favorites.css";

export default function Favorites() {
  const { favs } = useFav();
  const { user } = useAuth();
  const [, navigate] = useLocation();

  if (!user) return navigate("/");

  if (favs.length < 1) return <div className="not__favorites">No hay favoritos</div>;

  return (
    <div className="container__favorites">
      {favs.map(({ id, title, url }) => {
        return (
          <div key={id} className="favorites">
            <AddFavorites fav={id} handleAction={"delete"} />
            <Link to={`/search/${id}`} className="favorites__link">
              <span className="favorites__title">{title}</span>
              <img className="favorites__img" src={url} alt={title} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
