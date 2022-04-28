import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const TYPES = {
  true: "linear-gradient(90deg, rgba(0,213,7,1) 0%, rgba(0,139,21,1) 100%)",
  false: "linear-gradient(90deg, rgba(213,0,0,1) 0%, rgba(128,0,0,1) 100%)",
};

const ContainModal = styled.div`
  z-index: 20;
  position: fixed;
  top: 120px;
  right: 0;
  background: ${(props) => TYPES[props.type]};
  color: #000;
  border-radius: 20px 0 0 20px;
`;

const ModalText = styled.p`
  color: #fff;
  font-weight: 600;
  margin: 0;
  font-size: 20px;
  padding: 10px 20px;
`;

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
