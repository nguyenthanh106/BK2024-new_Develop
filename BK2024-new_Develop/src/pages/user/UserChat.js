import React, { useEffect, useState } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

const UserChat = () => {
    const [userData, setUserData] = useState({
        username: `user${Math.floor(Math.random() * 1000)}`,
        connected: false,
        message: ''
    });

    const [stompClient, setStompClient] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        connect();
        return () => {
            if (stompClient) {
                stompClient.disconnect();
            }
        }
    }, []);

    const connect = () => {
        let Sock = new SockJS('http://localhost:8080/ws');
        const client = over(Sock);
        client.connect({}, onConnected, onError);
        setStompClient(client);
    }

    const onConnected = () => {
        setUserData({ ...userData, connected: true });
        // Subscribe to private channel of the user
        stompClient.subscribe('/user/' + userData.username + '/private', onAdminMessageReceived);
    }


    const onError = (err) => {
        console.log(err);
    }

    const onAdminMessageReceived = (payload) => {
        const adminMessage = JSON.parse(payload.body);
        setMessages(prevMessages => [...prevMessages, adminMessage]); // Hiển thị tin nhắn từ admin
    }


    const handleMessage = (event) => {
        const { value } = event.target;
        setUserData({ ...userData, message: value });
    }

    const sendValue = () => {
        if (stompClient) {
            const chatMessage = {
                senderName: userData.username,
                receiverName: "admin",
                message: userData.message,
                status: "MESSAGE"
            };
            setMessages([...messages, chatMessage]);
            stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
            setUserData({ ...userData, message: "" });
        }
    }

    return (
        <div className="container">
            {userData.connected ? (
                <div className="chat-box">
                    <div className="user-info">
                        Connected as: {userData.username}
                    </div>
                    <div className="chat-content">
                        <ul className="chat-messages">
                            {messages.map((message, index) => (
                                <li key={index}>
                                    <strong>{message.senderName}:</strong> {message.message}
                                </li>
                            ))}
                        </ul>
                        <div className="send-message">
                            <input type="text" className="input-message" placeholder="Enter your message" value={userData.message} onChange={handleMessage} />
                            <button type="button" className="send-button" onClick={sendValue}>Send</button>
                        </div>
                    </div>

                </div>
            ) : (
                <div className="loading">Connecting...</div>
            )}
        </div>
    );
}

export default UserChat;
