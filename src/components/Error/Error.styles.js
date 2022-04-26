import styled from "@emotion/styled";

export const ContainerError = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 95%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const ErrorTitle = styled.h1`
  color: red;
  font-size: 40px;
  text-transform: uppercase;
  margin: 80px 0 30px;
  text-align: center;
`;

export const ErrorDescription = styled.p`
  color: #fff;
  font-size: 25px;
  margin: 0px 0 40px;
  text-align: center;
`;
