import React, { createContext, useState } from 'react';
import { users, investors, news, startups } from '../assets/db';
import { useNavigate } from 'react-router-dom';

export const StartUpContext = createContext();

const StartUpContextProvider = (props) => {

    const [currentUser, setCurrentUser] = useState(null);
    const userNavigate = useNavigate();
    const login = (userName, passWord) => {
        const user = users.find((u) =>
            u.username === userName && u.password === passWord
        );

        if (user) {
            setCurrentUser(user);
            userNavigate('/');
            return true;
        }
        return false;
    };

   

    const value = {
        users, startups, investors, news,
        currentUser, setCurrentUser, login
    };


    return (
        <StartUpContext.Provider value={value}>
            {props.children}
        </StartUpContext.Provider>
    );
}

export default StartUpContextProvider; 
