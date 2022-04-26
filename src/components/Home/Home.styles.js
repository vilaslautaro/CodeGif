import styled from "@emotion/styled";
import { bps } from "styles";

export const ContainerHome = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: var(--columns);
  ${bps.maxWidthMobile} {
    grid-template-columns: 1fr;
  }
`;

export const ContainerHomeGif = styled.div`
  min-height: 200vh;
  padding: 0 20px;
`;

export const ContainerTitle = styled.h3`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  margin: 0 auto;
  text-align: start;
`;
