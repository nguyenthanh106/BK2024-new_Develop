import axios from 'axios';
import { useState, useEffect } from 'react';

const useUser = () => {
    const host = "http://localhost:8080/api";
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    
    const getAllUser = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('access_token');
            if (!token) {
                console.log('No access token available.');
                setLoading(false);
                return;
            }
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };
            const response = await axios.get(`${host}/admin/users`, config);
            if (response.status === 200) {
                setUser(response.data);
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllUser();
    }, []);

    return { user, loading };
};

export default useUser;
