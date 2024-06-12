import React from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
const Booking = ({ room, avgRating }) => {
    const { price, reviews } = room

    const handleChange = e => {

    }
    return (
        <div className='booking'>
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>${price}<span>/per person</span></h3>
                <span className='room__rating d-flex align-items-center'>
                    <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                    ({reviews?.length})
                </span>
            </div>
            {/* ================booking form============== */}
            <div className="booking__form">
                <h5>Information</h5>
                <Form className='booking__info-form'>
                    <FormGroup>
                        <input type="text" placeholder='họ tên' id='fullName' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder='sdt' id='phone' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='' id='bookAt' required onChange={handleChange} />
                        <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>
            {/* ================booking bottom============== */}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>${price} <i class="ri-close-fill"></i>1 person</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Service charge</h5>
                        <span>$10</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total</h5>
                        <span>$100</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className='btn primary__btn w-100 mt-4'>Booking Now</Button>
            </div>
        </div>
    )
}

export default Booking
