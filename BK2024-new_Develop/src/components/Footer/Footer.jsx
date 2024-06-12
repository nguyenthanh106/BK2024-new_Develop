import React from "react";
import footer1 from '../../assets/images/footer1.jpg';
import footer2 from '../../assets/images/footer2.jpg';
import footer3 from '../../assets/images/footer3.jpg';
import footer4 from '../../assets/images/footer4.jpg';
import footer5 from '../../assets/images/footer5.jpg';
import footer6 from '../../assets/images/footer6.jpg';

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            <section className="bg-light text-dark">
                <div className="container text-center text-md-start">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Chào mừng bạn đến với trải nghiệm <br></br> đặt phòng hoàn hảo!
                            </h6>
                            <p>
                                Khám phá và đặt phòng với hàng ngàn lựa chọn từ các khách sạn hàng đầu, để một kỳ nghỉ lý tưởng trở thành hiện thực.
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4 ">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Câu hỏi thường gặp
                            </h6>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">Làm thế nào để tôi đặt phòng khách sạn?</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">Tôi có thể tìm hiểu thông tin về các tiện nghi của khách sạn ở đâu?</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">Làm thế nào để tôi biết đặt phòng của mình đã được xác nhận?</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset text-decoration-none">Tôi cần hỗ trợ hoặc có câu hỏi cụ thể, làm thế nào để liên hệ với bạn?</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Top điểm du lịch</h6>
                            <div className="row  mx-auto ">
                                <div className="col-md-4">
                                    <img className="footer-image" src={footer1} alt="" />
                                </div>
                                <div className="col-md-4">
                                    <img className="footer-image" src={footer2} alt="" />
                                </div>
                                <div className="col-md-4">
                                    <img className="footer-image" src={footer3} alt="" />
                                </div>
                            </div>
                            <div className="row  mx-auto mt-3">
                                <div className="col-md-4 ">
                                    <img className="footer-image" src={footer4} alt="" />
                                </div>
                                <div className="col-md-4">
                                    <img className="footer-image" src={footer5} alt="" />
                                </div>
                                <div className="col-md-4">
                                    <img className="footer-image" src={footer6} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center bg-light text-dark p-2">
                <hr />
                © {new Date().getFullYear()} Booking.com - Khách sạn tốt giá rẻ.
            </div>
        </footer>
    )
}
export default Footer;