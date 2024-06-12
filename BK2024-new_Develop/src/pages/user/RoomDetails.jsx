import React, { useRef, useState } from 'react'
import '../../styles/room-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import roomData from '../../assets/data/rooms'
import calculateAvgRating from '../../utils/avgRating'
import avatar from '../../assets/images/avatar.jpg'
import Booking from '../../components/Booking/Booking'
const RoomDetail = () => {
    const { id } = useParams();
    const reviewMsgRef = useRef('')
    const [roomRating, setRoomRating] = useState(null)

    const room = roomData.find(room => room.id === id);

    const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = room;

    const { totalRating, avgRating } = calculateAvgRating(reviews)

    // const options = { day: 'numeric', month: 'long', year: 'numeric' }

    const submitHandler = e => {
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value
        // test show ms
        // alert(`${reviewText}, ${roomRating}`);

    }
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <div className="room__content">
                                <img src={photo} alt="" />
                                <div className="room__info">
                                    <h2>{title}</h2>
                                    <div className="d-flex align-items-center gap-5">
                                        <span className='room__rating d-flex align-items-center gap-1'>
                                            <i className="ri-star-fill" style={{ 'color': "var(--secondary-color)" }}></i> {avgRating === 0 ? null : avgRating}
                                            {totalRating === 0 ? ("Not rated") : (<span>({reviews.length})</span>)}
                                        </span>
                                        <span>
                                            <i className="ri-map-pin-fill"></i>{address}
                                        </span>

                                    </div>
                                    <div className="room__extra-details">
                                        <span>
                                            <i className="ri-map-pin-2-fill"></i>{city}
                                        </span>
                                        <span>
                                            <i className="ri-money-dollar-circle-line"></i>${price}/person
                                        </span>
                                        <span>
                                            <i className="ri-group-line"></i>{maxGroupSize} people
                                        </span>
                                    </div>
                                    <h5>
                                        Description
                                    </h5>
                                    <p>{desc}</p>
                                </div>
                                {/* ============Hotel Rooms================== */}

                                {/* ============room review==================== */}
                                <div className="room__reviews mt-4">
                                    <h4>Reviews({reviews?.length} reviews)</h4>
                                    <Form onSubmit={submitHandler}>
                                        <div className="d-flex align-items-center gap-3 rating__group">
                                            <span onClick={() => setRoomRating(1)}>
                                                1 <i className="ri-star-fill"></i>
                                            </span>
                                            <span onClick={() => setRoomRating(2)}>
                                                2 <i className="ri-star-fill"></i>
                                            </span>
                                            <span onClick={() => setRoomRating(3)}>
                                                3 <i className="ri-star-fill"></i>
                                            </span>
                                            <span onClick={() => setRoomRating(4)}>
                                                4 <i className="ri-star-fill"></i>
                                            </span>
                                            <span onClick={() => setRoomRating(5)}>
                                                5 <i className="ri-star-fill"></i>
                                            </span>
                                        </div>
                                        <div className="review__input mt-3">
                                            <input type="text" ref={reviewMsgRef} placeholder='chửi đi' required />
                                            <button className="btn primary__btn text-white" type='submit'>
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                    <ListGroup className='user__reviews'>
                                        {
                                            reviews?.map(review => (
                                                <div className="review__item">
                                                    <img src={avatar} alt="" />
                                                    <div className="w-100">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h5>
                                                                    muhib
                                                                </h5>
                                                                <p>
                                                                    03-03-2024
                                                                </p>
                                                            </div>
                                                            <span className='d-flex align-items-center'>
                                                                5<i className="ri-star-fill"></i>
                                                            </span>
                                                        </div>
                                                        <h6>Amazing good job em</h6>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </ListGroup>
                                </div>
                                {/* ============room review end================ */}
                                <div className="inn-detail-p1 inn-com room-soc-share mt-5">
                                    <div className="detail-title">
                                        <h2>Share this Hotel</h2>
                                        <p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p>
                                    </div>
                                    <ul>
                                        <li><a class="text-decoration-none" href="#"><i class="ri-facebook-circle-fill"></i> Facebook</a> </li>
                                        <li><a class="text-decoration-none" href="#"><i class="ri-google-fill"></i> Google+</a> </li>
                                        <li><a class="text-decoration-none" href="#"><i class="ri-twitter-fill"></i> Twitter</a>
                                        </li>
                                        <li><a class="text-decoration-none" href="#"><i class="ri-linkedin-fill"></i> LinkedIn</a>
                                        </li>
                                        <li><a class="text-decoration-none" href="#"><i class="ri-whatsapp-fill"></i> Whats App</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg='4'>
                            <Booking room={room} avgRating={avgRating} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default RoomDetail
