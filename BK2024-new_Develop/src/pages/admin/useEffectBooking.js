import { useState, useEffect } from "react";
import axios from "axios";

const useRoomData = () => {
    const host = "http://localhost:8080/api";

    const [room, setRooms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const addRoom = async (roomData) => {
        try {
            const response = await axios.post(`${host}/rooms`, roomData);
            if (response.status === 201) {
                getAllRooms();
                return true;
            }
        } catch (error) {
            console.error("Error adding room:", error);
            throw error;
        }
    };

    const deleteRoom = async (roomId) => {
        try {
            const response = await axios.delete(`${host}/rooms/${roomId}`);
            if (response.status === 200) {
                getAllRooms();
                return true;
            }
        } catch (error) {
            console.error("Error deleting room:", error);
            throw error;
        }
    };

    const updateRoom = async (roomId, roomData) => {
        try {
            const response = await axios.put(`${host}/rooms/${roomId}`, roomData);
            if (response.status === 200) {
                getAllRooms();
                return true;
            }
        } catch (error) {
            console.error("Error updating room:", error);
            throw error;
        }
    };

    const getRoomById = async (roomId) => {
        try {
            const response = await axios.get(`${host}/rooms/${roomId}`);
            if (response.status === 200) {
                const roomData = response.data;
                return roomData;
            }
        } catch (error) {
            console.error("Error fetching room by ID:", error);
            throw error;
        }
    };

    const getAllRooms = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${host}/rooms`);
            if (response.status === 200) {
                const roomsData = response.data;
                setRooms(roomsData);
                console.log(roomsData);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching rooms:", error);
            throw error;
        }
    };


    useEffect(() => {
        getAllRooms();
    }, []);

    return {
        getAllRooms,
        room,
        isLoading,
        addRoom,
        deleteRoom,
        updateRoom,
        getRoomById,
    };
};

export default useRoomData;
