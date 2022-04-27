import { createContext, useContext, useState, useEffect } from "react";
import {
  setDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { useAuth } from "context/authContext";

const FavContext = createContext();

export const useFav = () => {
  const context = useContext(FavContext);
  if (!context) throw new Error("There is no Fav provider");
  return context;
};

export const FavContextProvider = ({ children }) => {
  const [favs, setFavs] = useState(false);
  const { user } = useAuth();

  const addFav = async (fav) => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docUser = await getDoc(docRef);
    if (docUser.exists()) {
      const data = docUser.data();
      if (data.favorites.some((favorite) => favorite.id === fav.id)) {
        console.log("ya esta en favoritos");
      } else {
        updateFavs(fav, docRef);
      }
    } else {
      setFirstFav(fav, docRef);
    }
  };

  const setFirstFav = async (fav, docRef) => {
    const structureUser = {
      favorites: [{ id: fav.id, url: fav.url, title: fav.title }],
    };
    await setDoc(docRef, structureUser);
  };

  const updateFavs = async (fav, docRef) => {
    await updateDoc(docRef, {
      favorites: arrayUnion({ id: fav.id, url: fav.url, title: fav.title }),
    });
  };

  const deleteFav = async (fav) => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(docRef, {
      favorites: arrayRemove(fav),
    });
  };

  const getFavs = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docUser = await getDoc(docRef);
    const data = docUser.data();
    setFavs(data.favorites);
  };

  useEffect(() => {
    if (auth.currentUser) {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const unsubscribe = onSnapshot(docRef, (doc) => {
        const data = doc.data();
        console.log("Current data: ", doc.data());
        setFavs(data.favorites);
      });

      return unsubscribe();
    }
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     getFavs();
  //     return () => getFavs();
  //   }
  // }, [user]);

  return (
    <FavContext.Provider value={{ addFav, deleteFav, getFavs, favs }}>
      {children}
    </FavContext.Provider>
  );
};
