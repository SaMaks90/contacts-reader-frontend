import styled from "@emotion/styled";
import { Field, Form } from "formik";

export const SectionLoginStyled = styled.section`
  padding: ${({ theme }) => theme.space[4]}px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  align-items: self-start;
  flex-direction: column;
`;

export const FieldStyled = styled(Field)`
`;

export const ButtonStyled = styled.button`
  margin-top: ${({ theme }) => theme.space[3]}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelStyled = styled.label`
  width: ${({ theme }) => theme.sizes.loginLabelWidth}px;
  margin-top: ${({ theme }) => theme.space[3]}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ErrorMessageFormStyled = styled.span`
  color: ${({ theme }) => theme.colors.errorMessage};
  display: flex;
  align-items: center;
  justify-content: center;
`;