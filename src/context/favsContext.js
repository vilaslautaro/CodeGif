import { createContext, useContext, useState, useEffect, useRef } from "react";
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
  const firstRender = useRef(false);
  const secondRender = useRef(false);
  const thirdRender = useRef(false);
  const [favs, setFavs] = useState([]);
  const { user } = useAuth();

  const addFav = (fav) => {
    if (!favs.some((favorite) => favorite.id === fav.id)) {
      setFavs([...favs, fav]);
    } else console.log("Ya esta en favoritos");
  };

  const deleteFav = (idFav) => {
    const newFavs = favs.filter((favorite) => favorite.id !== idFav);
    setFavs(newFavs);
  };

  useEffect(() => {
    if (thirdRender.current) {
      if (user) {
        setDoc(dbRef, { ...favs });
      }
    }
    if (secondRender.current) {
      thirdRender.current = true;
    }
    if (firstRender.current) {
      secondRender.current = true;
    }

    firstRender.current = true;
  }, [favs, dbRef, user]);

  useEffect(() => {
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
  }, []);

  return (
    <FavContext.Provider value={{ addFav, favs, setFavs, deleteFav }}>
      {children}
    </FavContext.Provider>
  );
};
