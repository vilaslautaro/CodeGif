import ReactDOM from "react-dom";
import {ContainModal, ModalText} from './ModalFav.styles'

function ModalFav({ children, type }) {
  return (
    <ContainModal type={type}>
      <ModalText>{children}</ModalText>
    </ContainModal>
  );
}

export default function ModalFavorite({ text, type = "true" }) {
  return ReactDOM.createPortal(
    <ModalFav type={type}>{text}</ModalFav>,
    document.getElementById("modal-fav-root")
  );
}
