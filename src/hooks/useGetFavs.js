import { useEffect, useState } from "react";
import { useAuth } from "context/authContext";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export default function useGetFavs() {
  const { user } = useAuth();
  const [favs, setFavs] = useState([]);
  const [dbRef, setDbRef] = useState();

  useEffect(() => {
    async function userFavs(){
      if (user) {
        const docRef = doc(db, "users", user.uid);
        setDbRef(docRef);
        const docUser = await getDoc(docRef);
        if (docUser.exists()) {
          const arraysUser = docUser.data();
          setFavs(arraysUser.favorites);
        }
      }
    }

    return () => userFavs()
  }, [user]);
  
  return { favs, dbRef, setFavs };
}
