import { useAuth } from "context/authContext";
import { useFav } from "context/favsContext";
import "./Favorites.css";

export default function Favorites({ idFav }) {
  const { user } = useAuth();
  const { addFav } = useFav();

  const handleClick = (e) => {
    e.preventDefault();
    if(user === null) return alert('No has iniciado sesion')
    addFav(idFav);
  };

  return (
    <button className="fav" onClick={handleClick}>
      <span role="img" aria-label="gif favorite">
        ❤
      </span>
    </button>
  );
}
