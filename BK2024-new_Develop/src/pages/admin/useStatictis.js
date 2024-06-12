import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useStatictis = () => {
    const host = "http://localhost:8080/api";

    const [statictis, setStatictis] = useState({
        revenue: 0,
        rentCount: 0,
        revenuePerMonth: 0,
        topRoom: {},
        totalRoom: 0
    });

    const getRevenue = async () => {
        try {
            const response = await axios.get(`${host}/sorts/total`);
            if (response.status === 200) {
                setStatictis(prevStats => ({
                    ...prevStats,
                    revenue: response.data.revenue
                }));
                console.log(response.data.revenue);
            }
        } catch (error) {
            console.error("Error fetching statistics:", error);
            throw error;
        }
    }

    const getCountOrder = async () => {
        try {
            const response = await axios.get(`${host}/sorts/all`);
            if (response.status === 200) {
                const countOrder = response.data;
                setStatictis(prevStats => ({
                    ...prevStats,
                    rentCount: countOrder.length
                }));
                console.log(countOrder)
            }
        } catch (error) {
            console.error("Error fetching statistics:", error);
            throw error;
        }
    }

    const getTotalRoom = async () => {
        try {
            const response = await axios.get(`${host}/sorts/totalRoom`);
            if (response.status === 200) {
                setStatictis(prevStats => ({
                    ...prevStats,
                    totalRoom: response.data.totalRoom
                }));
            }
        } catch (error) {
            console.error("Error fetching statistics:", error);
            throw error;
        }
    }

    const getTop1Room = async () => {
        try {
            const response = await axios.get(`${host}/sorts/getTopRoom`);
            if (response.status === 200) {
                setStatictis(prevStats => ({
                    ...prevStats,
                    topRoom: response.data
                }));
            }
        } catch (error) {
            console.error("Error fetching statistics:", error);
            throw error;
        }
    }

    useEffect(() => {
        getRevenue();
        getCountOrder();
        getTotalRoom();
        getTop1Room();
    }, []);

    return {
        statictis,
    }
};

export default useStatictis;