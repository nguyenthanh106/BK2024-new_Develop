import React, { useState } from 'react';
import { Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import './room-card.css';
const RoomCard = ({ room }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalPrice, setTotalPrice] = useState(room.price);
    const [bookingData] = useState({});
    const navigate = useNavigate();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handlePersonChange = (e) => {
        setTotalPrice(room.price * e.target.value);
    }

    const handleBooking = () => {
        const bookedRoomData = {
            id: room.id,
            location: room.location,
            facility: room.facility,
            price: room.price,
            person: room.person,
            totalPrice: totalPrice,
            owner: room.owner,
            category: room.category,
            roomImages: room.roomImages,
            checkIn: bookingData.checkIn,
            checkOut: bookingData.checkOut
        };
        localStorage.setItem('bookedRoom', JSON.stringify(bookedRoomData));

        navigate('/cart');
    }

    return (
        <>
            <Card className="my-3">
                <div className="room__img ">
                    {room?.roomImages?.length > 0 && (
                        // eslint-disable-next-line jsx-a11y/img-redundant-alt
                        <img
                            src={process.env.PUBLIC_URL + room?.roomImages[0]?.imageUrl}
                            width={300}
                            height={200}
                            alt={`Room ${room.id} First Image`}
                        />
                    )}

                </div>
                <CardBody>
                    <div className="card__top d-flex align-items-center justify-content-between">
                        <span className='room__location d-flex align-items-center gap-1'>
                            <i className="ri-map-pin-line"></i>{room.location}
                        </span>
                        <span className='room__rating d-flex align-items-center gap-1'>
                            <i className="ri-star-fill"></i>
                        </span>
                    </div>
                    <h5 className="room__title">
                        <Link to={`/rooms/${room.id}`}>{room.id}</Link>
                    </h5>
                    <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                        <h5>${room.price}<span>/room</span></h5>
                        <button className="btn btn-secondary" onClick={toggleModal}>
                            Book Now
                        </button>
                    </div>
                </CardBody>
            </Card>

            <Modal isOpen={isModalOpen} toggle={toggleModal} size="lg">
                <ModalHeader toggle={toggleModal}>{room?.owner?.name}</ModalHeader>
                <ModalBody className="modal-body">
                    <Row>
                        <Col md="6">
                            {room.roomImages && room.roomImages.length > 0 && (
                                room.roomImages.map((image, index) => (
                                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                                    <img
                                        key={index}
                                        src={image?.imageUrl}
                                        width={300}
                                        height={200}
                                        alt={`Room ${room.id} Image ${index + 1}`}
                                    />
                                ))
                            )}
                        </Col>
                        <Col md="6">
                            <h3>{room.location}</h3>
                            <form >
                                <div className="form-group">
                                    <label htmlFor="facility">Facility:</label>
                                    <p id="facility">{room.facility}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Price:</label>
                                    <span id="price">{room.price}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="person">Person:</label>
                                    <input
                                        type="number"
                                        id="person"
                                        name="person"
                                        value={room.person}
                                        onChange={(e) => { handlePersonChange(e) }}
                                        readonly
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="totalPrice">Total Price:</label>
                                    <input
                                        type="number"
                                        id="totalPrice"
                                        name="totalPrice"
                                        value={totalPrice}
                                        onChange={(e) => setTotalPrice(e.target.value)}
                                    />
                                </div>
                            </form>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary">View detail</button>
                    <button className="btn btn-success" onClick={handleBooking}>Book now</button>
                    <button className="btn btn-danger" onClick={toggleModal}>Close</button>
                </ModalFooter>
            </Modal>

        </>
    );
}

export default RoomCard;
