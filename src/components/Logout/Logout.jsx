import { useNavigate } from "react-router-dom";
import { users, auth } from "../../utils";
import { useEffect } from "react";


const logoutUser = async (token, navigation) => {
    await auth.logout(token);
    users.logoutUser();
    navigation('/login');
}

export const Logout = () => {
    const navigation = useNavigate();

    useEffect(() => {
        let user = users.currentUser();
        if(user) {
            logoutUser(user.token, navigation);
        }
    }, [navigation]);

    return (
        <></>
    );
}