import styled from "@emotion/styled";
import { Link } from "wouter";

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin-bottom: 50px;
  padding: 0 20px;
`;

export const HeaderLink = styled(Link)`
  border-bottom: 1px solid transparent;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  margin-right: 40px;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
      border-bottom: 1px solid #fff;
      transition: all 0.3s ease;
  }
`;
