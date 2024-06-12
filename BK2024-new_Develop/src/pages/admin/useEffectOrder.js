import { useState, useEffect } from "react";
import axios from "axios";

const useOrderData = () => {
    const host = "http://localhost:8080/api/admin/order";

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const addOrder = async (orderData) => {
        try {
            const response = await axios.post(host, orderData);
            if (response.status === 201) {
                getAllOrders();
                return true;
            }
        } catch (error) {
            console.error("Error adding order:", error);
            throw error;
        }
    };

    const deleteOrder = async (orderId) => {
        try {
            const response = await axios.delete(`${host}/${orderId}`);
            if (response.status === 204) {
                getAllOrders();
                return true;
            }
        } catch (error) {
            console.error("Error deleting order:", error);
            throw error;
        }
    };

    const updateOrder = async (orderId, orderData) => {
        try {
            const response = await axios.put(`${host}/${orderId}`, orderData);
            if (response.status === 200) {
                getAllOrders();
                return true;
            }
        } catch (error) {
            console.error("Error updating order:", error);
            throw error;
        }
    };

    const getOrderById = async (orderId) => {
        try {
            const response = await axios.get(`${host}/${orderId}`);
            if (response.status === 200) {
                const orderData = response.data;
                return orderData;
            }
        } catch (error) {
            console.error("Error fetching order by ID:", error);
            throw error;
        }
    };

    const getAllOrders = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(host);
            if (response.status === 200) {
                const ordersData = response.data;
                setOrders(ordersData);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
            throw error;
        }
    };

    useEffect(() => {
        getAllOrders();
    }, []);

    return {
        orders,
        isLoading,
        addOrder,
        deleteOrder,
        updateOrder,
        getOrderById,
    };
};

export default useOrderData;
