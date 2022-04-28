import styled from "@emotion/styled";
import { bps } from "styles";

export const Form = styled.form`
  padding: 0 10px;
  display: flex;
  flex-flow: column wrap;
  margin: 20px 0;
  font-size: 16px;
  ${bps.minWidthMobile}{
    font-size: 12px;
  }
`;

export const Input = styled.input`
  margin: 0 0 15px;
  align-self: center;
  max-width: 600px;
  font-size: 1.5em;
  border-radius: 15px;
  border: none;
  outline: none;
  padding: 5px 20px;
  box-shadow: 0 0 5px #000;

`;

export const FormContainerSelect = styled.div`
  display: flex;
  margin: 0 0 15px;
  flex-flow: row wrap;
  justify-content: center;
`;

export const FormSelect = styled.select`
  border-radius: 10px;
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 1em;
`;
