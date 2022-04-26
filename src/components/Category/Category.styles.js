import styled from "@emotion/styled";
import { Link } from "wouter";

export const CategoryTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin: 50px 0 20px;
`;

export const CategoryBox = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 95%;
  margin: 0 auto;
`;

export const CategoryContain = styled.li`
  text-align: center;
  list-style: none;
  margin: 8px 10px;
  text-transform: uppercase;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 9px;
  &:nth-child(1n) {
    background: rgb(238, 251, 0);
  },
  &:nth-child(2n) {
    background: rgb(0, 255, 255);
  },
  &:nth-child(3n) {
    background: rgb(255, 0, 230);
  }
`;

export const CategoryLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
