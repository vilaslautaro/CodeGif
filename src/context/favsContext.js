import { createContext, useContext } from "react";
import { setDoc } from "firebase/firestore";
import useGetFavs from "hooks/useGetFavs";

const FavContext = createContext();
export const useFav = () => {
  const context = useContext(FavContext);
  if (!context) throw new Error("There is no Fav provider");
  return context;
};

export const FavContextProvider = ({ children }) => {
  const {favs, dbRef, setFavs} = useGetFavs()

  const addFav = (idFav) => {
      if (!favs.includes(idFav)) {
        setDoc(dbRef, { favorites: [...favs, idFav] }, { merge: true });
        setFavs([...favs, idFav])
      } else console.log("Ya esta en favoritos");
  };

  return (
    <FavContext.Provider value={{ addFav }}>
      {children}
    </FavContext.Provider>
  );
};
