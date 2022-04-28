import styled from "@emotion/styled";

export const Modal = styled.div`
  backdrop-filter: blur(4px);
  background: rgb(255, 255, 255, 0.8);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 30;
`;

export const ModalContent = styled.div`
  background: #111;
  border-radius: 10px;
  display: block;
  height: 80vh;
  margin: 10vh auto;
  padding: 10px 20px;
  position: relative;
  width: 280px;
`;

export const CloseModal = styled.button`
  background: transparent;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.3em;
  font-weight: 600;
  padding: 7px 0;
  text-align: start;
  transition: 0.3s ease;
  width: fit-content;
  &:hover {
    color: red;
    transition: 0.3s ease;
  }
`;
