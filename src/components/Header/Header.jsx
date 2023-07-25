import { useContext } from "react";
import { NavigationLinksStyled, NavigationLinkStyled } from "./Header.styled";
import { UserContext } from "../../utils";

export const Header = () => {
    const { currentUser } = useContext(UserContext.UserContext);

    if(currentUser) {
        let { email } = currentUser.user;
        let username = email.slice(0, email.indexOf('@'));
        return (
            <NavigationLinksStyled>
                <NavigationLinkStyled to={'/'} end>Contact List</NavigationLinkStyled>
                <NavigationLinkStyled to={'/logout'}>{username}, logout</NavigationLinkStyled>
            </NavigationLinksStyled>
        );
    }

    return (
        <NavigationLinksStyled>
            <NavigationLinkStyled to={'/register'}>Register</NavigationLinkStyled>
            <NavigationLinkStyled to={'/login'}>Login</NavigationLinkStyled>
        </NavigationLinksStyled>
    );
};