import styled from "@emotion/styled";
import { bps } from "styles";

export const ContainerFavorites = styled.div`
  margin: 15px auto 5px;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--minmax), 1fr));
  grid-template-rows: masonry;
  gap: 10px;
  ${bps.minWidthMobile} {
    :root {
      --minmax: ${({ theme }) => theme.gifs.minSize};
    }
  }
`;

export const NotFavorites = styled.div`
  margin-top: 100px;
  color: #fff;
  font-size: 40px;
`;

export const Favorite = styled.div`
  border-radius: 15px;
  text-decoration: none;
  width: 100%;
  max-width: 600px;
  height: 300px;
  position: relative;
  margin: 0 auto;
`;

export const FavoriteImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  z-index: 2;
  margin: 0;
  padding: 0;
`;

export const FavoriteSpan = styled.span`
  color: #fff;
  bottom: 0px;
  left: 0;
  border-radius: 0 15px 0 15px;
  text-align: left;
  padding: 5px 12px 9px;
  margin: 0;
  text-transform: uppercase;
  position: absolute;
  z-index: 3;
  background: rgba(0, 0, 0, 0.7);
  font-size: 0.7rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
