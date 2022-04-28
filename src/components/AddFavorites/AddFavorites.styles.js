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
  &:hover {
    transform: scale(1.1);
    background:  rgb(0,0,0);
    transition: all 0.3s ease;
  }
  &:active > span {
    transition: all 0.3s ease;
    color: #b20100;
  }
`;

export const Span = styled.span`
  
  color: #fd0101;
  font-size: 25px;
`;
