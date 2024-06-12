import React from 'react'
import { Container, Row } from 'reactstrap'
import '../../styles/user.css'

const AccountUser = () => {
    return (
        <>
            <Container>
                <Row>
                    <div className="dashboard">

                        <div className="db-cent">
                            <div className="db-cent-1">
                                <p>Hi Jana Novakova,</p>
                                <h4>Welcome to your dashboard</h4>
                            </div>
                            <div className="db-cent-2">
                                <div className="db-2-main-1">
                                    <div className="db-2-main-2"><span>My Bookings</span>
                                        <p>All the Lorem Ipsum generators on the</p>
                                        <h2>12</h2>
                                    </div>
                                </div>
                                <div className="db-2-main-1">
                                    <div className="db-2-main-2">  <span>Events</span>
                                        <p>All the Lorem Ipsum generators on the</p>
                                        <h2>04</h2>
                                    </div>
                                </div>
                                <div className="db-2-main-1">
                                    <div className="db-2-main-2"> <span>Payment</span>
                                        <p>All the Lorem Ipsum generators on the</p>
                                        <h2>16</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="db-cent-3">
                                <div className="db-cent-table db-com-table">
                                    <div className="db-title">
                                        <h3><img src="images/icon/dbc5.png" alt="" /> My Bookings</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                            suffered alteration in some form</p>
                                    </div>
                                    <table className="bordered responsive-table">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>City</th>
                                                <th>Arrival</th>
                                                <th>Departure</th>
                                                <th>Members</th>
                                                <th>Payment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td>Alvin</td>
                                                <td>+01 4215 3521</td>
                                                <td><span className="db-tab-hi">New york,</span>USA</td>
                                                <td>12may</td>
                                                <td>20may</td>
                                                <td>12</td>
                                                <td><a href="#" className="db-success">Success</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>02</td>
                                                <td>Liam</td>
                                                <td>+01 2484 6521</td>
                                                <td><span className="db-tab-hi">Bangalore,</span>India</td>
                                                <td>18apr</td>
                                                <td>24apr</td>
                                                <td>12</td>
                                                <td><a href="#" className="db-success">Success</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>03</td>
                                                <td>Logan</td>
                                                <td>+01 6524 6521</td>
                                                <td><span className="db-tab-hi">Los Angeles,</span>USA</td>
                                                <td>05dec</td>
                                                <td>12dec</td>
                                                <td>12</td>
                                                <td><a href="#" className="db-not-success">Pending</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>04</td>
                                                <td>Michael</td>
                                                <td>+01 3652 1425</td>
                                                <td><span className="db-tab-hi">Bristol,</span>UK</td>
                                                <td>14jen</td>
                                                <td>24jen</td>
                                                <td>12</td>
                                                <td><a href="#" className="db-not-success">Pending</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>05</td>
                                                <td>Alvin</td>
                                                <td>+01 4215 3521</td>
                                                <td><span className="db-tab-hi">New york,</span>USA</td>
                                                <td>12may</td>
                                                <td>20may</td>
                                                <td>12</td>
                                                <td><a href="#" className="db-success">Success</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="db-cent-3">
                                <div className="db-cent-table db-com-table">
                                    <div className="db-title">
                                        <h3><img src="images/icon/dbc6.png" alt="" /> My Events</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                            suffered alteration in some form</p>
                                    </div>
                                    <table className="bordered responsive-table">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>City</th>
                                                <th>Arrival</th>
                                                <th>Departure</th>
                                                <th>Members</th>
                                                <th>Payment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td>Alvin</td>
                                                <td>+01 4215 3521</td>
                                                <td><span className="db-tab-hi">New york,</span>USA</td>
                                                <td>12may</td>
                                                <td>20may</td>
                                                <td>12</td>
                                                <td><a href="#" className="db-success">Success</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>02</td>
                                                <td>Liam</td>
                                                <td>+01 2484 6521</td>
                                                <td><span className="db-tab-hi">Bangalore,</span>India</td>
                                                <td>18apr</td>
                                                <td>24apr</td>
                                                <td>12</td>
                                                <td><a href="#" className="db-success">Success</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>03</td>
                                                <td>Logan</td>
                                                <td>+01 6524 6521</td>
                                                <td><span className="db-tab-hi">Los Angeles,</span>USA</td>
                                                <td>05dec</td>
                                                <td>12dec</td>
                                                <td>12</td>
                                                <td><a href="#" className="db-not-success">Pending</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>04</td>
                                                <td>Michael</td>
                                                <td>+01 3652 1425</td>
                                                <td><span className="db-tab-hi">Bristol,</span>UK</td>
                                                <td>14jen</td>
                                                <td>24jen</td>
                                                <td>12</td>
                                                <td><a href="#" className="db-not-success">Pending</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>05</td>
                                                <td>Alvin</td>
                                                <td>+01 4215 3521</td>
                                                <td><span className="db-tab-hi">New york,</span>USA</td>
                                                <td>12may</td>
                                                <td>20may</td>
                                                <td>12</td>
                                                <td><a href="#" className="db-success">Success</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="db-cent-3">
                                <div className="db-cent-acti">
                                    <div className="db-title">
                                        <h3><img src="images/icon/dbc1.png" alt="" /> My Activity</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                            suffered alteration in some form</p>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="db-cent-wr-img"> <img src="images/users/3.png" alt="" /> </div>
                                            <div className="db-cent-wr-con">
                                                <h6>Hotel Booking Canceled</h6> <span className="lr-revi-date">21th July, 2016</span>
                                                <p>The hotel is clean, convenient and good value for money. Staff are courteous and
                                                    helpful. However, they need more training to be efficient.</p>
                                                <ul>
                                                    <li><a href="#!"><i className="fa fa-facebook" aria-hidden="true"></i></a> </li>
                                                    <li><a href="#!"><i className="fa fa-google-plus" aria-hidden="true"></i></a> </li>
                                                    <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a> </li>
                                                    <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a> </li>
                                                    <li><a href="#!"><i className="fa fa-youtube" aria-hidden="true"></i></a> </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="db-cent-wr-img"> <img src="images/users/3.png" alt="" /> </div>
                                            <div className="db-cent-wr-con">
                                                <h6>Hotel Payment Success</h6> <span className="lr-revi-date">08th August, 2016</span>
                                                <p>The hotel is clean, convenient and good value for money. Staff are courteous and
                                                    helpful. However, they need more training to be efficient.</p>
                                                <ul>
                                                    <li><a href="#!"><i className="fa fa-facebook" aria-hidden="true"></i></a> </li>
                                                    <li><a href="#!"><i className="fa fa-google-plus" aria-hidden="true"></i></a> </li>
                                                    <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a> </li>
                                                    <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a> </li>
                                                    <li><a href="#!"><i className="fa fa-youtube" aria-hidden="true"></i></a> </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </Row>
            </Container>
        </>
    )
}

export default AccountUser
