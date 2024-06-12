import React, { useState, useEffect } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Routers from '../../routers/Routers';
import { Button, Collapse, Card, CardBody } from 'reactstrap';
import ChatWindow from './ChatWindow';
import '../../styles/chat.css';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <div className="layout-container">
            <Header />
            <Routers />
            <Footer />
            <div className="chat-button-container">
                <Button color="primary" onClick={toggleChat}>
                    Chat
                </Button>
            </div>
            <Collapse isOpen={isOpen} className="chat-collapse">
                <Card className="chat-card">
                    <CardBody>
                        {/* Sử dụng ChatWindow */}
                        <ChatWindow />
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}

export default Layout;
