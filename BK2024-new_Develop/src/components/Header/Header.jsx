import React, { useRef, useEffect } from 'react'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import './header.css'

const nav__links = [
    { path: '/home', display: 'Trang Chủ' },
    { path: '/rooms', display: 'Phòng' },
    { path: "/cart", display: "Giỏ hàng" },
    { path: "/event", display: "Sự Kiện" },
];

const Header = () => {
    const headerRef = useRef(null);
    const isSigned = localStorage.getItem('access_token');
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc()
        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    }, [])

    return (
        <header className='header' ref={headerRef}>
            <Container>
                <Row className="align-items-center justify-content-between flex-wrap">
                    <Col xs="12" md="4" className="logo">
                        <img src={logo} alt="" />
                    </Col>

                    <Col xs="12" md="6" className="d-none d-md-block">
                        <ul className="menu d-flex justify-content-start gap-5">
                            {nav__links.map((item, index) => (
                                <li className='nav__item' key={index}>
                                    <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link" : ""}>{item.display}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    {isSigned ? (
                        role === 'ADMIN' ? (
                            <Col xs="3" md="2">
                                <div className="dropdown">
                                    <button className="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Hello, {username}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="/profile">Thông tin tài khoản</a></li>
                                        <li><a className="dropdown-item" href="/order">Lịch sử đơn hàng</a></li>
                                        <li><a className="dropdown-item" href="/admin">Admin management</a></li>
                                        <li><a className="dropdown-item" href="/logout">Đăng xuất</a></li>
                                    </ul>
                                </div>
                            </Col>
                        ) : (
                            <Col xs="3" md="2">
                                <div className="dropdown">
                                    <button className="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Hello, {username}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="/profile">Thông tin tài khoản</a></li>
                                        <li><a className="dropdown-item" href="/order">Lịch sử đơn hàng</a></li>
                                        <li><a className="dropdown-item" href="/logout">Đăng xuất</a></li>
                                    </ul>
                                </div>
                            </Col>
                        )
                    ) : (
                        <Col xs="12" md="2" className="nav__btns d-flex mt-3 justify-content-end gap-2">
                            <div>
                                <Link className="btn btn-default" to="/login">Login</Link>
                                <Link className="btn  btn-secondary" to="/register">Register</Link>
                            </div>
                        </Col>
                    )}
                    <Col xs="12" className="d-md-none mobile__menu">
                        <i className="ri-menu-line"></i>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;
