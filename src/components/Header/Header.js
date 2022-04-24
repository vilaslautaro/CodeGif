import { useFav } from "context/favsContext";
import { Link, useRoute } from "wouter";
import { useAuth } from "../../context/authContext";
import "./header.css";

export default function Header() {
  const { user, logout } = useAuth();
  const { setFavs } = useFav();
  const [match] = useRoute("/login");

  const content = match ? null : (
    <>
    <Link className="header__link login" to="/login">
      Login
    </Link>
    <Link className="header__link login" to="/register">
      Register
    </Link>
    </>
  );

  const handleLogout = async () => {
    try {
      await logout();
      window.sessionStorage.removeItem("user");
      setFavs();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <header className="header">
      {user ? (
        <>
          <Link to={"/favorites"} className="header__link link__fav">
            Favorites
          </Link>
          <Link to={"/"} className="header__link" onClick={handleLogout}>
            Logout
          </Link>
        </>
      ) : {content} }
    </header>
  );
}
