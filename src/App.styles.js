import styled from "@emotion/styled";
import { Link } from "wouter";

export const ContainerApp = styled.div`
  background: rgb(0, 0, 0);
  margin: 0 auto;
  max-width: 1400px;
  padding: 30px 0;
  text-align: center;
`;

export const Title = styled(Link)`
  color: #fff;
  font-size: 25px;
  font-size: 3rem;
  margin: 50px 0 0px;
  text-align: center;
  text-decoration: none;
  width: 100%;
  &:hover {
    border-bottom: 1px solid #fff;
    transition: 0.3s ease;
  }
`;

export const Section = styled.section`
  margin: 0px;
`;
