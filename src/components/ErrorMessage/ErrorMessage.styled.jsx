import styled from "@emotion/styled";

export const ErrorMessageStyled = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.colors.errorMessage};
`;