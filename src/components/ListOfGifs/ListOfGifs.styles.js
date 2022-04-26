import styled from "@emotion/styled";
import { bps } from "styles";

export const ContainerGifs = styled.div`
  margin: 15px 0 5px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--minmax), 1fr) );
  grid-template-rows: masonry;
  gap: 10px;
  ${bps.minWidthMobile}{
    :root{
        --minmax: ${({ theme }) => theme.gifs.minSize};
      }
  }
`;
