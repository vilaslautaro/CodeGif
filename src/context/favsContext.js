import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { useAuth } from "context/authContext";

const FavContext = createContext();

export const useFav = () => {
  const context = useContext(FavContext);
  if (!context) throw new Error("There is no Fav provider");
  return context;
};

export const FavContextProvider = ({ children }) => {
  const [dbRef, setDbRef] = useState("");
  const [favs, setFavs] = useState([]);
  const { user } = useAuth();

  const addFav = (fav) => {
    if (!favs.some((favorite) => favorite.id === fav.id)) {
      setFavs([...favs, fav]);
      setDoc(dbRef, { ...favs });
    } else console.log("Ya esta en favoritos");
  };

  const deleteFav = (idFav) => {
    const newFavs = favs.filter((favorite) => favorite.id !== idFav);
    setFavs(newFavs);
  };

  useEffect(() => {
    console.log("el user ha cambiado");
    const userFavs = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        setDbRef(docRef);
        const docUser = await getDoc(docRef);
        if (docUser.exists()) {
          const arraysUser = docUser.data();
          setFavs(Object.values(arraysUser));
        }
      }
    });
    return () => userFavs();
  }, [user]);

  // useEffect(() => {
  //   if (user && dbRef) {
  //     setDoc(dbRef, { ...favs });
  //   }
  // }, [favs, dbRef, user]);

  return (
    <FavContext.Provider value={{ addFav, favs, setFavs, deleteFav }}>
      {children}
    </FavContext.Provider>
  );
};
