import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import axios from 'axios';


export default function Basic() {
    const [checkInDate, setCheckInDate] = useState(localStorage.getItem('checkInDate') || '');
    const [checkOutDate, setCheckOutDate] = useState(localStorage.getItem('checkOutDate') || '');
    const bookedRoom = localStorage.getItem('bookedRoom');
    const [cartItem, setCartItem] = useState(bookedRoom ? JSON.parse(bookedRoom) : {});
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const totalPriceFromStorage = localStorage.getItem('totalPrice');
        if (totalPriceFromStorage) {
            setTotalPrice(parseFloat(totalPriceFromStorage));
        }
    }, []);
    const [paymentStatus, setPaymentStatus] = useState('');
    const createOrder = async (totalAmount, orderInfo) => {
        try {
            const response = await axios.post('/create-order', {
                totalAmount: totalAmount,
                orderInfo: orderInfo
            });
            return response.data;
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    };
    const handlePayment = async () => {
        try {
            // Tạo payload
            const payload = {
                user: { id: 2 },
                room: { id: cartItem.id }, // Thay đổi id phòng tùy theo hệ thống của bạn
                person: cartItem.person,
                price: cartItem.price,
                totalPrice: totalPrice,
                isPaid: true, // Tạm thời đặt là đã thanh toán
                checkInDate: localStorage.getItem('checkInDate'),
                checkOutDate: localStorage.getItem('checkOutDate')
            };

            // Gửi dữ liệu lên server
            const response = await axios.post('http://localhost:8080/api/order', payload); // Thay URL_CUA_API bằng URL thực của API của bạn
            console.log('Response from server:', response.data);
            const paymentUrl = await createOrder(totalPrice, 'Order information'); // Thay 'Order information' bằng thông tin đơn hàng thực tế của bạn
            window.location.href = paymentUrl;
        } catch (error) {
            console.error('Error while making payment:', error);
            // Xử lý lỗi nếu cần
        }
    };
    return (

        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody className="p-4">
                                <MDBRow>
                                    <MDBCol lg="7">
                                        <MDBTypography tag="h5">
                                            <a href="#!" className="text-body">
                                                <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
                                                shopping
                                            </a>
                                        </MDBTypography>

                                        <hr />

                                        <MDBCard className="mb-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div>
                                                            <MDBCardImage
                                                                src={cartItem.roomImages && cartItem.roomImages[0]?.imageUrl || null}
                                                                fluid className="rounded-3" style={{ width: "65px" }}
                                                                alt="Shopping item" />
                                                        </div>
                                                        <div className="ms-3">
                                                            <MDBTypography tag="h5">
                                                                {cartItem.owner.name}
                                                            </MDBTypography>
                                                            <p className="small mb-0">{cartItem.location}</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div style={{ width: "100px" }}>
                                                            <MDBTypography tag="h5" className="fw-normal mb-0">
                                                                {cartItem.person} person
                                                            </MDBTypography>
                                                        </div>
                                                        <div style={{ width: "80px" }}>
                                                            <MDBTypography tag="h5" className="mb-0">
                                                                {cartItem.price}$
                                                            </MDBTypography>
                                                        </div>
                                                        <a href="#!" style={{ color: "#cecece" }}>
                                                            <MDBIcon fas icon="trash-alt" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>


                                    </MDBCol>

                                    <MDBCol lg="5">
                                        <MDBCard className="bg-primary text-white rounded-3">
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <MDBTypography tag="h5" className="mb-0">
                                                        Card details
                                                    </MDBTypography>
                                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                        fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                                                </div>

                                                <p className="small">Card type</p>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-visa fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-amex fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                                                </a>

                                                <form className="mt-4">
                                                    <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
                                                        placeholder="Cardholder's Name" contrast />

                                                    <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
                                                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                                                    <MDBRow className="mb-4">
                                                        <MDBCol md="6">
                                                            <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
                                                                minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                                                        </MDBCol>
                                                        <MDBCol md="6">
                                                            <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
                                                                maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                                                        </MDBCol>
                                                    </MDBRow>
                                                </form>

                                                <hr />
                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Total(Incl. taxes)</p>
                                                    <p className="mb-2">${totalPrice}</p>
                                                </div>

                                                <Button color="info" block size="md" onClick={handlePayment}>
                                                    Checkout
                                                </Button>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}