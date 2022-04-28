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
  const [userLogout, setUserLogout] = useState(false);
  const [showModalFav, setShowModalFav] = useState(false);
  const [favs, setFavs] = useState(false);
  const { user } = useAuth();

  const addFav = async (fav) => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docUser = await getDoc(docRef);
    if (docUser.exists()) {
      const data = docUser.data();
      if (data.favorites.some((favorite) => favorite.id === fav.id)) {
        setShowModalFav({
          text: "This favourite is already on your list",
          type: "false",
        });
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
    try {
      await setDoc(docRef, structureUser);
      setShowModalFav({ text: "Favourite successfully added", type: "true" });
    } catch (error) {
      setShowModalFav({ text: "Sorry, an error has occurred", type: "false" });
    }
  };

  const updateFavs = async (fav, docRef) => {
    const structureFav = { id: fav.id, url: fav.url, title: fav.title };
    try {
      await updateDoc(docRef, {
        favorites: arrayUnion(structureFav),
      });
      setShowModalFav({ text: "Favourite successfully added", type: "true" });
    } catch (error) {
      setShowModalFav({ text: "Sorry, an error has occurred", type: "false" });
    }
  };

  const deleteFav = async (fav) => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    try {
      await updateDoc(docRef, {
        favorites: arrayRemove(fav),
      });
      setShowModalFav({ text: "Favourite successfully deleted", type: "true" });
    } catch (error) {
      setShowModalFav({ text: "Sorry, an error has occurred", type: "false" });
    }
  };

  useEffect(() => {
    let unsubscribe = () => {};
    if (auth.currentUser) {
      setUserLogout(false);
      const docRef = doc(db, "users", auth.currentUser.uid);
      unsubscribe = onSnapshot(docRef, (doc) => {
        const data = doc.data();
        setFavs(data.favorites);
      });
    }
    if (userLogout) {
      return unsubscribe();
    }
  }, [user, userLogout]);

  return (
    <FavContext.Provider
      value={{
        addFav,
        deleteFav,
        favs,
        setUserLogout,
        setFavs,
        showModalFav,
        setShowModalFav,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};
