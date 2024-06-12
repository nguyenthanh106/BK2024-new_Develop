import { useEffect, useRef } from 'react';

export default function Logout() {
    const loggedOutRef = useRef(false);

    useEffect(() => {
        const logout = async () => {
            try {
                localStorage.removeItem("access_token");
                localStorage.removeItem("username");
                window.location.href = "/home"
            } catch (error) {
                console.log("Error logging out:", error);
                throw error;
            }
        };

        if (!loggedOutRef.current && window.location.pathname === '/logout') {
            logout();
            loggedOutRef.current = true;
        }
    }, []);

    return null;
};
