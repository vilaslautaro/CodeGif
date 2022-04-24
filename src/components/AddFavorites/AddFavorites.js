import { useAuth } from "context/authContext";
import { useFav } from "context/favsContext";
import "./AddFavorites.css";

export default function AddFavorites({ fav, handleAction }) {
  const { user } = useAuth();
  const { addFav, deleteFav } = useFav();

  const handleClick = (e) => {
    e.preventDefault();
    if(!user) return alert('No has iniciado sesion')
    if(handleAction === "add") return addFav(fav);
    if(handleAction === "delete") return deleteFav(fav)
  };

  return (
    <button className="fav" onClick={handleClick}>
      <span role="img" aria-label="gif favorite">
        ❤
      </span>
    </button>
  );
}
