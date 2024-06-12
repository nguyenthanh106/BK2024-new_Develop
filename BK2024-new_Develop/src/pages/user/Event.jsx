import React from 'react'
import { Container, Row } from 'reactstrap'
import CommonSection from '../../shared/CommonSection'
import '../../styles/event.css'
import h1 from '../../assets/images/gallery-01.jpg'

const Event = () => {
    return (
        <>
            <CommonSection title={"Tất cả sự kiện"} />

            <Container className='mt-5'>
                <Row>
                    <div className="inn-body-section pad-bot-55">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="head-typo typo-com">
                                        <h2>Events: April 2017</h2>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>

                                        <div className="row events">
                                            <div className="col-md-2"> <img src={h1} alt="" /> </div>
                                            <div className="col-md-8">
                                                <h3>Food factory</h3> <span>Date: December 9, 2017</span>
                                                <p>Many desktop publishing packages and web page editors now use</p>
                                            </div>
                                            <div className="col-md-2"> <a href="#" className=" event-regi">Register</a> </div>
                                        </div>

                                        <div className="row events">
                                            <div className="col-md-2"> <img src={h1} alt="" /> </div>
                                            <div className="col-md-8">
                                                <h3>Room design group event</h3> <span>Date: December 9, 2017</span>
                                                <p>Many desktop publishing packages and web page editors now use</p>
                                            </div>
                                            <div className="col-md-2"> <a href="#" className="waves-effect waves-light event-regi">Register</a> </div>
                                        </div>

                                        <div className="row events">
                                            <div className="col-md-2"> <img src="images/extra/6.jpg" alt="" /> </div>
                                            <div className="col-md-8">
                                                <h3>Romance pair dance</h3> <span>Date: December 9, 2017</span>
                                                <p>Many desktop publishing packages and web page editors now use</p>
                                            </div>
                                            <div className="col-md-2"> <a href="#" className="waves-effect waves-light event-regi">Register</a> </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Event
