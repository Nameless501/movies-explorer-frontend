import { useState, useEffect } from "react";
import UserContext from "../context/UserContext";

import * as MainAPI from '../../../utils/MainAPI';

export function CurrentUserProvider({ children }) {
    const [userData, setUserData] = useState({});
    const [userIsLogged, setUserStatus] = useState(false);

    function setCurrentUser(data) {
        setUserData(data);
        setUserStatus(true);
    }

    function removeCurrentUser() {
        setUserData({});
        setUserStatus(false)
    }

    useEffect(() => {
        MainAPI.checkToken()
            .then(setCurrentUser)
            .catch(err => console.log(err));
    }, []);

    return (
        <UserContext.Provider
            value={{
                userIsLogged,
                userData,
                setCurrentUser,
                removeCurrentUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
}