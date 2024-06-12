import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
    const [stompClient, setStompClient] = useState(null);
    const [userData, setUserData] = useState({
        username: `user${Math.floor(Math.random() * 1000)}`,
        connected: false,
        message: ''
    });

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
        stompClient.subscribe('/user/' + userData.username + '/private', onAdminMessageReceived);
    }

    const onError = (err) => {
        console.log(err);
    }

    const onAdminMessageReceived = (payload) => {
        const adminMessage = JSON.parse(payload.body);
        setMessages(prevMessages => [...prevMessages, adminMessage]); // Hiển thị tin nhắn từ admin
        alert("có tin nhắn từ admin");
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
        <div>
            <div className="chat-messages-container">
                {messages.map((message, index) => (
                    <div key={index}>
                        <strong>{message.senderName}:</strong> {message.message}
                    </div>
                ))}

            </div>

            <textarea
                className="chat-textarea"
                placeholder="Nhập tin nhắn..."
                value={userData.message}
                onChange={handleMessage}
            />
            <Button color="primary" className="send-button" onClick={sendValue}>
                Gửi
            </Button>
        </div>
    );
};

export default ChatWindow;
