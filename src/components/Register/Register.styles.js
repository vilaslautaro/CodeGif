import styled from "@emotion/styled";
import {
  Form as FormFormik,
  Field,
  ErrorMessage as ErrorMessageFormik,
} from "formik";

export const TitleForm = styled.h3`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  margin: 20px auto;
`

export const ContainerForm = styled.div`
  margin: 0 10px;
`;

export const Form = styled(FormFormik)`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
`;

export const Input = styled(Field)`
  background: #fff;
  border-radius: 10px;
  border: none;
  display: block;
  font-size: 20px;
  line-height: 2;
  margin: 5px 0 0;
  padding: 4px 8px;
  width: 95%;
`;

export const Label = styled.label`
  color: #fff;
  display: block;
  font-size: 20px;
  margin: 0 auto 20px;
  text-align: start;
`;

export const ErrorMessage = styled(ErrorMessageFormik)`
  color: red;
  font-size: 16px;
  margin: 5px 0 0px;
  text-align: start;
`;
