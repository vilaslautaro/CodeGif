import styled from "@emotion/styled";
import { Link } from "wouter";

export const GifContainer = styled.div`
  position: relative;
`;

export const Gif = styled(Link)`
  border-radius: 15px;
  height: 300px;
  margin: 0;
  position: relative;
  text-decoration: none;
  width: 99%;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const GifImg = styled.img`
  border-radius: 15px;
  height: 300px;
  margin: 0;
  padding: 0;
  width: 100%;
  z-index: 2;
`;

export const GifSpan = styled.span`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0 15px 0 15px;
  bottom: 0px;
  color: #fff;
  font-size: 0.7rem;
  left: 0;
  margin: 0;
  padding: 5px 12px 9px;
  position: absolute;
  text-align: left;
  text-transform: uppercase;
  z-index: 3;
`;
