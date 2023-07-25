import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const NavigationLinksStyled = styled.nav`
  background: ${({ theme }) => theme.colors.navigationBackground};
  height: ${({ theme }) => theme.sizes.navigationHeight}px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 ${({ theme }) => theme.space[4]}px 0 ${({ theme }) => theme.space[4]}px;
  
  & a:nth-last-of-type(1) {
    padding-right: 0;
  }
`;

export const NavigationLinkStyled = styled(NavLink)`
  padding-right: ${({ theme }) => theme.space[4]}px;
  text-decoration: none;
  transition: text-decoration 1s, font-size 1s;
  
  &:hover {
    text-decoration: underline;
    font-size: 20px;
  }
`;

