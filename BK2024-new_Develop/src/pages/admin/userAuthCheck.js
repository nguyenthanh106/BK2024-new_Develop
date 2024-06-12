import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function useAuthCheck() {
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem('role');
        const accessToken = localStorage.getItem('access_token');

        if (!accessToken || role !== 'ADMIN') {
            alert('You are not authorized to access this page. Please log in as an admin.');
            navigate('/login');
        }
    }, []);
}

export default useAuthCheck;
