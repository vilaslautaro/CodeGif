import styled from "@emotion/styled";

export const Fav = styled.button`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0 0 0 10px;
  border: none;
  cursor: pointer;
  height: 40px;
  position: absolute;
  right: 0px;
  top: 0px;
  transition: all 0.3s ease;
  width: 40px;
  z-index: 2;
  & :hover {
    filter: brightness(1.2);
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;

export const Span = styled.span`
  color: red;
  font-size: 25px;
`;
