import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useAuthenticate = () => {
    const host = "http://localhost:8080/api";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${host}/login`, {
                username,
                password
            });

            if (response.status === 200) {
                localStorage.setItem("access_token", response.data.access_token);
                localStorage.setItem("user_id", response.data.user.id);
                localStorage.setItem("username", response.data.user.username);
                localStorage.setItem("role", response.data.user.roles[0].roleName);
                alert("Login successful!");
                navigate('/home');
            } else {
                alert('Login failed');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('Invalid username or password');
            }
        }
    };

    const getUser = async () => {
        try {
            const response = await axios.get(`${host}/get?username=${localStorage.getItem("username")}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            });
            setUser(response.data);
        } catch (error) {
            console.error('Error getting user:', error);
        }
    };

    const updateUserProfile = async (data) => {
        const userId = localStorage.getItem("user_id");
        const accessToken = localStorage.getItem("access_token");

        const config = {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        };

        try {
            const url = `${host}/update-user-account/${userId}`;
            const response = await axios.put(url, data, config);

            if (response.status === 200) {
                setUser(response.data);
                console.log('Profile updated successfully:', response.data);
            } else {
                console.error('No data returned from the server on update');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return { handleLogin, user, username, setUsername, password, setPassword, updateUserProfile };
};

export default useAuthenticate;
