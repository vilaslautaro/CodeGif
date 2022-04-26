import { useAuth } from "context/authContext";
import { useFav } from "context/favsContext";
import Modal from "components/Modal";
import { useState } from "react";
import { Fav, Span } from "./AddFavorites.styles";
import Login from "components/Login";

export default function AddFavorites({ fav, handleAction }) {
  const { user } = useAuth();
  const { addFav, deleteFav } = useFav();
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (!user) return setShowModal(true);
    if (handleAction === "add") return addFav(fav);
    if (handleAction === "delete") return deleteFav(fav);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    setShowModal(false);
  };

  return (
    <>
      <Fav onClick={handleClick}>
        <Span role="img" aria-label="gif favorite">
          ❤
        </Span>
      </Fav>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login onLogin={handleLogin} />
        </Modal>
      )}
    </>
  );
}
