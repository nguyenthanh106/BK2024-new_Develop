import React, { useEffect, useState } from 'react';
import CommonSection from '../../shared/CommonSection';
import '../../styles/room.css';
import RoomCard from '../../shared/RoomCard';
import SearchBar from '../../shared/SearchBar';
import { Col, Container, Row, Spinner } from 'reactstrap';
import useEffectBooking from '../admin/useEffectBooking';

const Room = () => {
    const { room } = useEffectBooking();
    const [isLoading, setIsLoading] = useState(true);
    const [searchedRooms, setSearchedRooms] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const handleSearch = (data) => {
        setSearchedRooms(data);
    };

    return (
        <>
            <CommonSection title={"Tất cả phòng"} />
            <section>
                <Container>
                    <Row>
                        <SearchBar onSearch={handleSearch} />
                        {searchedRooms.map((room, index) => (
                            <Col lg='3' key={index}>
                                <RoomCard key={index} room={room} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section className='pt-0'>

                <Container>
                    {isLoading ? (
                        <div className="text-center align-items-center">
                            <Spinner color="primary" />
                        </div>
                    ) : (
                        <Row>
                            {room.map((room, index) => {
                                return (
                                    <Col lg='3' key={index}>
                                        {<RoomCard room={room} />}
                                    </Col>
                                );
                            })}
                        </Row>
                    )}
                </Container>
            </section>
        </>
    );
}

export default Room;
