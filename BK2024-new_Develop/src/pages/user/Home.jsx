import React from 'react'
import '../../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../../assets/images/hero-img01.jpg'
import heroImg02 from '../../assets/images/hero-img02.jpg'
import heroVideo from '../../assets/images/hero-video.jpg'
import worldImg from '../../assets/images/world.png'
import SearchBar from '../../shared/SearchBar';
import Subtitle from '../../shared/Subtitle'
import FeaturedRoomList from '../../components/Featured-rooms/FeaturedRoomList';
import h1 from '../../assets/images/customization.png';
import h2 from '../../assets/images/customization.png';
import h3 from '../../assets/images/customization.png';
import h4 from '../../assets/images/customization.png';
import tienloi from '../../assets/images/tienloi.jpg';
import uudai from '../../assets/images/uudai.jpg';
import tincay from '../../assets/images/tincay.jpg';

const Home = () => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle subtitle={'Khám phá và Đặt Phòng!'} />
                                    <img src={worldImg} alt="" />
                                </div>
                                <h1>
                                    Khám phá thế giới với trải nghiệm  hoàn hảo của chúng tôi!
                                    <span className='highlight'></span>
                                </h1>
                                <p>
                                    Tạo những kỷ niệm đáng nhớ với mỗi chuyến đi, bắt đầu ngay hôm nay với chúng tôi!"
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
            </section>
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
                                    <span className="ol-4">PHÒNG NGÂN SÁCH <br></br>TIÊU CHUẨN</span>
                                    <span className="ol-3"></span> <span className="ol-5">$99/-</span>
                                    <ul>
                                        <li>
                                            <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img
                                                src={h1} alt="" />
                                            </a><span>Free Wifi</span>
                                        </li>
                                        <li>
                                            <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img
                                                src={h2} alt="" /> </a><span>Bữa sáng</span>
                                        </li>
                                        <li>
                                            <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img
                                                src={h3} alt="" /> </a><span>Hồ bơi</span>
                                        </li>
                                        <li>
                                            <a href="#!" className="waves-effect waves-light btn-large offer-btn"><img
                                                src={h4} alt="" /> </a><span>Tivi</span>
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
                </div>
            </section>
            <section>
                <Container>
                    <Row>
                        <div className="text-center">
                            <h1>Về chúng tôi</h1>
                            <p>Dưới đây là những lý do bạn nên lên kế hoạch cho chuyến đi cùng chúng tôi</p>
                        </div>
                        <div className="mt-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card text-center border-0">
                                        <img src={tienloi} className="card-img-top mx-auto" alt="" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                        <div className="card-body">
                                            <h5 className="card-title">Dễ dàng và Tiện lợi</h5>
                                            <p className="card-text">Trang web của chúng tôi cung cấp quy trình đặt phòng đơn giản và tiện lợi. Với chỉ vài bước đơn giản, khách hàng có thể tìm kiếm, so sánh và đặt phòng từ một loạt các khách sạn hàng đầu trên toàn thế giới mà không gặp phải bất kỳ sự bất tiện nào.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-center border-0">
                                        <img src={uudai} className="card-img-top mx-auto" alt="" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                        <div className="card-body">
                                            <h5 className="card-title">Ưu đãi và Khuyến mãi</h5>
                                            <p className="card-text">Chúng tôi cung cấp các ưu đãi và khuyến mãi hấp dẫn, bao gồm giảm giá đặc biệt, gói nghỉ dưỡng, dịch vụ bổ sung miễn phí và nhiều hơn nữa. Điều này giúp khách hàng tiết kiệm được chi phí và có trải nghiệm lưu trú tốt hơn.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card text-center border-0">
                                        <img src={tincay} alt="" className="card-img-top mx-auto" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                                        <div className="card-body">
                                            <h5 className="card-title">Chất lượng và Đáng tin cậy</h5>
                                            <p className="card-text">Trang web của chúng tôi là một nền tảng đáng tin cậy cho việc đặt phòng khách sạn. Chúng tôi cung cấp thông tin chi tiết về các khách sạn, bao gồm hình ảnh, đánh giá từ khách hàng trước đó, giúp khách hàng có cái nhìn toàn diện và tự tin khi đặt phòng.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <div className="text-center">
                            <h1>Sự kiện</h1>
                            <p>Dưới đây là những lý do bạn nên lên kế hoạch cho chuyến đi cùng chúng tôi</p>
                        </div>
                        <div className="row mt-5">
                            <iframe src="https://www.youtube.com/embed/mG4G8crGQ34?autoplay=0&showinfo=0&controls=0" allowfullscreen title="Hotel Video"></iframe>
                            <div className="col-md-6">
                                <div className="bot-gal h-blog">
                                    <h4>Tin tức và sự kiện mới</h4>
                                    <ul>
                                        <li>
                                            <a href="#!"> <img src="images/users/2.png" alt="" />
                                                <h5>Joseph, write a review</h5> <span>3 Dec, 2017</span>
                                                <p>Curabitur mi odio, tempus quis risus cursus, iaculis tempor augue.</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!"> <img src="images/users/3.png" alt="" />
                                                <h5>Joseph, write a review</h5> <span>3 Dec, 2017</span>
                                                <p>Curabitur mi odio, tempus quis risus cursus, iaculis tempor augue.</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!"> <img src="images/users/4.png" alt="" />
                                                <h5>Joseph, write a review</h5> <span>3 Dec, 2017</span>
                                                <p>Curabitur mi odio, tempus quis risus cursus, iaculis tempor augue.</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!"> <img src="images/users/5.png" alt="" />
                                                <h5>Joseph, write a review</h5> <span>3 Dec, 2017</span>
                                                <p>Curabitur mi odio, tempus quis risus cursus, iaculis tempor augue.</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home
