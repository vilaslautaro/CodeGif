import styled from "@emotion/styled";

export const GifContainer = styled.div`
  position: relative;
`;

export const Gif = styled.div`
  border-radius: 15px;
  display: inline-block;
  margin: 10px 20px;
  position: relative;
  text-decoration: none;
  width: 100%;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const GifImg = styled.img`
  border-radius: 15px;
  width: 100%;
  z-index: 2;
`;

export const GifTitle = styled.span`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0px 15px 0px 15px;
  bottom: -2px;
  color: #fff;
  font-size: 0.7rem;
  left: 0;
  margin: 0;
  margin: 10px 0 5px;
  padding: 5px 12px 9px;
  position: absolute;
  text-transform: uppercase;
  z-index: 3;
`;
