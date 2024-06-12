import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.jpg'
import worldImg from '../assets/images/world.png'

import SearchBar from '../shared/SearchBar';
import Subtitle from '../shared/Subtitle'
import FeaturedRoomList from '../components/Featured-rooms/FeaturedRoomList';
import h1 from '../assets/images/h1.png';
import h2 from '../assets/images/h2.png';
import h3 from '../assets/images/h3.png';
import h4 from '../assets/images/h4.png';
import world from '../assets/images/world.png';

const Home = () => {
    return (
        <>
            {/**==============section 1=============== */}
            < section >
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle subtitle={'123123'} />
                                    <img src={worldImg} alt="" />
                                </div>
                                <h1>
                                    1233333333333
                                    <span className='highlight'>abc</span>
                                </h1>
                                <p>
                                    ádadasdasddddddddddddddddddđ
                                </p>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-4"  >
                                <img src={heroVideo} alt="" />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-5">
                                <img src={heroImg02} alt="" />
                            </div>
                        </Col>
                        <SearchBar />
                    </Row>
                </Container>
            </section >
            {/**==============section 2=================== */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5'>
                            <Subtitle subtitle={'Phòng'} />
                            <h2 className='featured__room-title'>Phòng nổi bật</h2>
                        </Col>
                        <FeaturedRoomList />
                    </Row>
                </Container>
            </section>
            {/**==============section 3=================== */}
            <section>
                <div className="offer">
                    <Container>
                        <Row>
                            <div className="col-md-6">
                                <div className="offer-l"> <span className="ol-1"></span> <span className="ol-2">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i></span>
                                    <span className="ol-4">Standardized Budget Rooms</span>
                                    <span className="ol-3"></span> <span className="ol-5">$99/-</span>
                                    <ul>
                                        <li>
                                            <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img
                                                src={h1} alt="" />
                                            </a><span>Free WiFi</span>
                                        </li>
                                        <li>
                                            <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img
                                                src={h2} alt="" /> </a><span>Breakfast</span>
                                        </li>
                                        <li>
                                            <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img
                                                src={h3} alt="" /> </a><span>Pool</span>
                                        </li>
                                        <li>
                                            <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img
                                                src={h4} alt="" /> </a><span>Television</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="offer-r">
                                    <div className="or-1"> <span className="or-11">go</span> <span className="or-12">Stays</span> </div>
                                    <div className="or-2"> <span className="or-21">Get</span> <span className="or-22">70%</span> <span
                                        className="or-23">Off</span> <span className="or-24">use code: RG5481WERQ</span> <span
                                            className="or-25"></span> </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div >
            </section >
            {/**==============section 4=================== */}
            <section>
                <Container>
                    <Row>
                        <div className="text-center">
                            <h1>Why choose us</h1>
                            <p>Here are reasons you should plan trip with us</p>
                        </div>
                        <div className="mt-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card text-center border-0">
                                        <img src={location} className="card-img-top mx-auto" alt="image" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                        <div className="card-body">
                                            <h5 className="card-title">Handpicked Hotels</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-center border-0">
                                        <img src={world} className="card-img-top mx-auto" alt="image" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                        <div className="card-body">
                                            <h5 className="card-title">Handpicked Hotels</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-center border-0">
                                        <img src={ballon} className="card-img-top mx-auto" alt="image" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                        <div className="card-body">
                                            <h5 className="card-title">Handpicked Hotels</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section >
        </>
    )
}

export default Home
