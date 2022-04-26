import { useFav } from "context/favsContext";
import { Header, HeaderLink, HeaderButton } from "./Header.styles";
import { useRoute } from "wouter";
import { useAuth } from "../../context/authContext";

export default function HeaderComponent() {
  const { user, logout } = useAuth();
  const { setFavs } = useFav();
  const [match] = useRoute("/login");

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      await logout();
      window.sessionStorage.removeItem("user");
      setFavs([]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Header>
      {user ? (
        <>
          <HeaderLink to={"/favorites"}>Favorites</HeaderLink>
          <HeaderButton onClick={handleLogout}>
            Logout
          </HeaderButton>
        </>
      ) : match ? (
        <HeaderLink to="/register">Register</HeaderLink>
      ) : (
        <>
          <HeaderLink to="/login">Login</HeaderLink>
          <HeaderLink to="/register">Register</HeaderLink>
        </>
      )}
    </Header>
  );
}
