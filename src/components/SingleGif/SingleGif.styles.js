import styled from "@emotion/styled";

export const GifContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export const Gif = styled.div`
  border-radius: 15px;
  display: inline-block;
  margin: 10px 20px;
  max-heigth: 500px;
  max-width: 700px;
  text-decoration: none;
  width: 90%;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const GifImg = styled.img`
  border-radius: 15px;
  width: 100%;
`;

export const GifTitle = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  margin: 20px 0 10px;
  text-transform: uppercase;
`;
