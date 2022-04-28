import { Header, HeaderLink, HeaderButton } from "./Header.styles";
import { useRoute, useLocation } from "wouter";
import { useAuth } from "../../context/authContext";
import { useFav } from "context/favsContext";
import ModalFavorite from "components/ModalFav";
import { useEffect } from "react";

export default function HeaderComponent() {
  const {setUserLogout, setFavs, showModalFav, setShowModalFav} = useFav()
  const { user, logout } = useAuth();
  const [matchLogin] = useRoute("/login");
  const [matchFavorite] = useRoute('/favorites')
  const [, navigate] = useLocation();

  useEffect(() => {
    if(showModalFav){
      setTimeout(() => {
        setShowModalFav(false)
      }, 3000);
    }
  },[showModalFav, setShowModalFav])

  const handleLogout = async (e) => {
    
    e.preventDefault()
    try {
      if(matchFavorite){
        navigate('/')
      }
      await logout();
      window.sessionStorage.removeItem("user");
      setUserLogout(true)
      setFavs([])
      setShowModalFav({ text: "Successful logout", type: "true" });
    } catch (error) {
      setShowModalFav({ text: "Sorry, an error has occurred", type: "false" });
    }
  };

  return (
    <>
    <Header>
      {user ? (
        <>
          <HeaderLink to={"/favorites"}>Favorites</HeaderLink>
          <HeaderButton onClick={handleLogout}>
            Logout
          </HeaderButton>
        </>
      ) : matchLogin ? (
        <HeaderLink to="/register">Register</HeaderLink>
      ) : (
        <>
          <HeaderLink to="/login">Login</HeaderLink>
          <HeaderLink to="/register">Register</HeaderLink>
        </>
      )}
    </Header>
    {showModalFav && <ModalFavorite text={showModalFav.text} type={showModalFav.type} />}
    </>
  );
}
