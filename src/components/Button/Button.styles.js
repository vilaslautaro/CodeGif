import { Link as LinkWouter } from "wouter";
import styled from "@emotion/styled";

export const Link = styled(LinkWouter)`
  align-self: center;
  background: linear-gradient(90deg, rgba(119,5,175,1) 0%, rgba(42,0,255,1) 100%);
  border-radius: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.3em;
  font-weight: 600;
  padding: 7px 25px;
  transition: 0.5s ease all;
  width: fit-content;
  &:hover {
    background: linear-gradient(90deg, rgba(119,5,175,1) 0%, rgba(165,5,175,1) 100%);
    transition: 0.5s ease all;
  },
  &[disabled] {
    opacity: 0.3;
    pointer-events: none;
    transition: 0.3s ease all;
  }
`;

export const Button = Link.withComponent('button')