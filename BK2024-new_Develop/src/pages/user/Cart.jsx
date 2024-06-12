import React, { useEffect, useState } from "react";
import img1 from '../../assets/images/room-img01.jpg'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function ReviewPage() {
    const bookedRoom = localStorage.getItem('bookedRoom');
    const [cartItem, setCartItem] = useState(bookedRoom ? JSON.parse(bookedRoom) : {});
    const [totalPrice, setTotalPrice] = useState(cartItem.price);
    const [checkInDate, setCheckInDate] = useState(localStorage.getItem('checkInDate') || '');
    const [checkOutDate, setCheckOutDate] = useState(localStorage.getItem('checkOutDate') || '');
    const [isEmptyCart, setIsEmptyCart] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(cartItem).length === 0 && cartItem.constructor === Object) {
            setIsEmptyCart(true);
        } else {
            setIsEmptyCart(false);
        }
    }, [cartItem]);

    const handleClear = () => {
        localStorage.removeItem('bookedRoom');
        localStorage.removeItem('checkInDate');
        localStorage.removeItem('checkOutDate');
        setCartItem({});
        setTotalPrice(0);
        setCheckInDate('');
        setCheckOutDate('');
        setIsEmptyCart(true);
    };

    const handleCheckInChange = (e) => {
        setCheckInDate(e.target.value);
        localStorage.setItem('checkInDate', e.target.value);
    };

    const handleCheckOutChange = (e) => {
        setCheckOutDate(e.target.value);
        localStorage.setItem('checkOutDate', e.target.value);
    };

    const calculateTotalPrice = () => {
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);

        const timeDiff = checkOut.getTime() - checkIn.getTime();
        const daysStayed = Math.ceil(timeDiff / (1000 * 3600 * 24));
        const totalPrice = cartItem.price * daysStayed;

        setTotalPrice(totalPrice);
    };

    const handlePayment = () => {
        localStorage.setItem('totalPrice', totalPrice);
        navigate('/payment');
    };


    useEffect(() => {
        calculateTotalPrice();
    }, [cartItem.price, checkInDate, checkOutDate]);



    return (
        <section className="vh-100" style={{ backgroundColor: "#80ccff" }}>
            <MDBContainer className="h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol>
                        {isEmptyCart ? (
                            <p className="h2 text-center">Không có phòng nào được chọn!</p>
                        ) : (
                            <>
                                <p>
                                    <span className="h2">Phòng bạn chọn</span>
                                </p>
                                <MDBCard className="mb-4">
                                    <MDBCardBody className="p-4">
                                        <MDBRow className="align-items-center">
                                            <MDBCol md="2">
                                                <MDBCardImage
                                                    fluid
                                                    src={cartItem.roomImages && cartItem.roomImages[0]?.imageUrl || null}
                                                    alt="Generic placeholder image"
                                                />
                                            </MDBCol>
                                            <MDBCol md="2" className="d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Sở hữu</p>
                                                    <p className="fw-normal mb-0">{cartItem.owner.name || null}</p>
                                                </div>
                                            </MDBCol>
                                            <MDBCol md="2" className="d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Loại Phòng</p>
                                                    <p className="lead fw-normal mb-0">
                                                        {cartItem.category.name} / {cartItem.person} người
                                                    </p>
                                                </div>
                                            </MDBCol>
                                            <MDBCol md="1" className="d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">$/ngày đêm</p>
                                                    <p className="lead fw-normal mb-0">{cartItem.price} $</p>
                                                </div>
                                            </MDBCol>
                                            <MDBCol md="2" className="d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Check in</p>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        value={checkInDate}
                                                        onChange={handleCheckInChange}
                                                    />
                                                </div>
                                            </MDBCol>
                                            <MDBCol md="2" className="d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Check out</p>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        value={checkOutDate}
                                                        onChange={handleCheckOutChange}
                                                    />
                                                </div>
                                            </MDBCol>

                                            <MDBCol md="1" className="d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Total</p>
                                                    <p className="lead fw-normal mb-0">${totalPrice}</p>
                                                </div>
                                            </MDBCol>

                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard className="mb-5">
                                    <MDBCardBody className="p-4">
                                        <div className="float-end">
                                            <p className="mb-0 me-5 d-flex align-items-center">
                                                <span className="small text-muted me-2">Order total:</span>
                                                <span className="lead fw-normal">{totalPrice}</span>
                                            </p>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>

                                <div className="d-flex justify-content-end">
                                    <Button color="light" size="md" className="me-2">
                                        Không vừa ý bạn? Tiếp tục chọn!
                                    </Button>
                                    <Button color="info" size="md" className="me-2" onClick={handlePayment}>Tiến hành thanh toán</Button>
                                    <Button color="warning" size="md" onClick={handleClear} >Xoá phòng bạn chọn</Button>
                                </div>
                            </>
                        )}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
