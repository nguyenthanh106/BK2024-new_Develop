import axios from "axios";
import { useEffect, useState } from "react";

const useFeatureRoom = () => {
    const host = "http://localhost:8080/api";
    const [topFeatureRoom, setTopFeatureRoom] = useState([]);

    const getTopRoom = async () => { 
        try {
            const response = await axios.get(`${host}/rooms/getTopRoom`); 
            console.log(response)
            if (response.status === 200) {
                
                const roomsData = response.data;
                setTopFeatureRoom(roomsData);
            }
        } catch (error) {
            console.error("Error fetching rooms:", error);
            throw error;
        }
    }

    console.log(topFeatureRoom);

    useEffect(() => {   
        getTopRoom();
    }
    , []);

    return {
        topFeatureRoom,
    }
}

export default useFeatureRoom;