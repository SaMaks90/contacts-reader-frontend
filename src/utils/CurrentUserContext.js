import { createContext, useState, useEffect } from "react";
import { users, auth } from "../utils";

const checkCurrentUser = async (token, setCurrentUser) => {
    const result = await auth.currentUser(token);
    if(result.message) {
        users.logoutUser();
    }else{
        setCurrentUser(users.currentUser());
    }
}

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        let user = users.currentUser();
        if(user) {
            checkCurrentUser(user.token, setCurrentUser);
        }
    }, []);

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
};