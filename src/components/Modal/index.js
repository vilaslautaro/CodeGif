import ReactDOM from "react-dom";
import { Modal, ModalContent, CloseModal } from "./Modal.styles";

function ModalComponent({ children, onClose }) {
  return (
    <Modal>
      <ModalContent>
        <CloseModal onClick={onClose}>✖</CloseModal>
        {children}
      </ModalContent>
    </Modal>
  );
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <ModalComponent onClose={onClose}>{children}</ModalComponent>,
    document.getElementById("modal-root")
  );
}
