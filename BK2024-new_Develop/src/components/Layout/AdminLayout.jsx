// AdminLayout.jsx
import React, { useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

import AdminRoutes from '../../routers/AdminRoutes';
import img from '../../assets/images/logo.jpg'

const AdminLayout = () => {
    const nav__links = [
        {
            path: '/admin',
            display: 'Doanh Thu'
        },
        {
            path: '/admin/hotel',
            display: 'Khách sạn'
        },
        {
            path: '/admin/room',
            display: 'Phòng'
        },
        {
            path: '/admin/user',
            display: 'Người dùng'
        },

        {
            path: '/admin/payment',
            display: 'Thanh toán'
        },
        {
            path: '/admin/order',
            display: 'Đơn hàng'
        }
    ]
    return (
        <>
            <div className="min-height-300 bg-primary-dl position-absolute w-100"></div>
            <aside
                className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 "
                id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                        aria-hidden="true" id="iconSidenav"></i>
                    <a className="navbar-brand m-0" href=" "
                        target="_blank">
                        <img src={img} alt="" />
                        <span className="ms-1 font-weight-bold text-uppercase">Quản lý</span>
                    </a>
                </div>
                <hr className="horizontal dark mt-0" />
                <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        {nav__links.map((link, index) => (
                            <li key={index} className="nav-item">
                                <NavLink className="nav-link" to={link.path} activeClassName="active">
                                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                        {link.path === '/admin' && (
                                            <i className="ri-hotel-line text-success text-sm opacity-10 fs-5"></i>
                                        )}
                                        {link.path === '/admin/user' && (
                                            <i className="ri-hotel-line text-success text-sm opacity-10 fs-5"></i>
                                        )}
                                        {link.path === '/admin/hotel' && (
                                            <i className="ri-hotel-line text-success text-sm opacity-10 fs-5"></i>
                                        )}
                                        {link.path === '/admin/room' && (
                                            <i className="ri-hotel-bed-line text-warning text-sm opacity-10 fs-5"></i>
                                        )}
                                        {
                                            link.path === '/admin/booking' && (
                                                <i className="ri-hotel-bed-line text-warning text-sm opacity-10 fs-5"></i>
                                            )
                                        }
                                        {link.path === '/admin/payment' && (
                                            <i className="ri-hotel-bed-line text-warning text-sm opacity-10 fs-5"></i>
                                        )}
                                        {link.path === '/admin/order' && (
                                            <i className="ri-hotel-bed-line text-warning text-sm opacity-10 fs-5"></i>
                                        )}
                                    </div>
                                    <span className="nav-link-text ms-1">{link.display}</span>
                                </NavLink>
                            </li>
                        ))}
                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Chỉnh sửa</h6>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="./pages/sign-up.html">
                                <div
                                    className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">

                                    <i className="ri-key-line text-info text-sm opacity-10 fs-5"></i>
                                </div>
                                <span className="nav-link-text ms-1">Phòng</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="./pages/sign-up.html">
                                <div
                                    className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">

                                    <i className="ri-key-line text-info text-sm opacity-10 fs-5"></i>
                                </div>
                                <span className="nav-link-text ms-1">Chủ sở hữu</span>
                            </a>
                        </li>

                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Tài khoản</h6>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " href="./pages/sign-up.html">
                                <div
                                    className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">

                                    <i className="ri-key-line text-info text-sm opacity-10 fs-5"></i>
                                </div>
                                <span className="nav-link-text ms-1">Đăng xuất</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <AdminRoutes />

        </>
    );
}

export default AdminLayout;
