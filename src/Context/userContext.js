import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentUser, signOut } from 'aws-amplify/auth'; // Use Auth from aws-amplify

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({ isAuthenticated: false, email: null });

    useEffect(() => {
        getCurrentUser()
            .then(userData => {
                setUser({
                    isAuthenticated: true,
                    email: userData['signInDetails']['loginId'] // Check this path in console
                });
            })
            .catch(error => {
                console.error("User not logged in:", error);
                setUser({ isAuthenticated: false, email: null });
            })
            .finally(() => setLoading(false));
    }, []);

    const login = (email) => {
        setUser({ isAuthenticated: true, email });
    };

    const logout = () => {
        signOut();
        setUser({ isAuthenticated: false, email: null });
    };

    return (
        <UserContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
