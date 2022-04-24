import { createContext, useContext, useState, useEffect, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase/config";

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

  const addFav = (fav) => {
    if (!favs.some((favorite) => favorite.id === fav.id)) {
      setFavs([...favs, fav]);
    } else console.log("Ya esta en favoritos");
  };

  const deleteFav = (idFav) => {
    const newFavs = favs.filter(favorite => favorite.id !== idFav)
    setFavs(newFavs)
  }

  useEffect(() => {
    if (thirdRender.current) {
      setDoc(dbRef, { ...favs });
    }
    if (secondRender.current) {
      thirdRender.current = true;
    }
    if (firstRender.current) {
      secondRender.current = true;
    }

    firstRender.current = true;
  }, [favs, dbRef]);

  useEffect(() => {
    const userFavs = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        setDbRef(docRef);
        const docUser = await getDoc(docRef);
        if (docUser.exists()) {
          const arraysUser = docUser.data();
          setFavs(Object.values(arraysUser));
        } else {
          setFavs([]);
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
