import { createContext, useContext, useState, useEffect } from "react";
import {
  setDoc,
  doc,
  getDoc,
  query,
  where,
  onSnapshot,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  deleteField,
  arrayRemove,
} from "firebase/firestore";
import { db, auth } from "../firebase/config";
// import { useAuth } from "context/authContext";

const FavContext = createContext();

export const useFav = () => {
  const context = useContext(FavContext);
  if (!context) throw new Error("There is no Fav provider");
  return context;
};

export const FavContextProvider = ({ children }) => {

  const addFav = async (fav) => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docUser = await getDoc(docRef);
    if (docUser.exists()) {
      // validacion de gif repetido
      // codigo gif repetido es true
      // else gif repetido es false
      updateFavs(fav, docRef);
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
    const userData = docUser.data();
    const favs = userData.favorites;
    return favs;
  };

  return (
    <FavContext.Provider value={{ addFav, deleteFav, getFavs }}>
      {children}
    </FavContext.Provider>
  );
};
