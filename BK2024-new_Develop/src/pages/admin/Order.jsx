import React, { useState } from "react";
import useEffectOrder from "./useEffectOrder";
import { Spinner } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const { orders, isLoading } = useEffectOrder();

    const navigate = useNavigate();

    const handleEdit = (order, event) => {
        event.preventDefault();
        navigate("/admin/editBooking", { state: { selectedRoom: order } });
    };
    return (
        <>
            <main className="main-content position-relative border-radius-lg ">
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur"
                    data-scroll="false">
                    <div className="container-fluid py-1 px-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-white text-uppercase" href="/">Trang</a></li>
                                <li className="breadcrumb-item text-sm text-white active text-uppercase" aria-current="page">danh sách phòng</li>
                            </ol>
                            <h6 className="font-weight-bolder text-white mb-0 text-uppercase">Phòng</h6>
                        </nav>
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div class="input-group">
                                    <span class="input-group-text text-body"><i class="ri-search-line" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" placeholder="Nhập ở đây..." />
                                </div>
                            </div>
                            {/* <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item d-flex align-items-center">
                                    <button className="btn text-white font-weight-bold px-0" onClick={(e) => { handleSearch(e.target.value) }}>
                                        <i className="ri-user-line me-sm-1"></i>
                                        <span className="d-sm-inline d-none">user: {localStorage.getItem("username")}</span>
                                    </button>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </nav>

                <div>
                    <h2>Order List</h2>
                    {isLoading ? (
                        <div className="text-center align-items-center mt-5">
                            <Spinner color='warning' className="mt-5" />
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-12" >
                                <div className="card mb-4">
                                    <div className="card-header pb-0">
                                        <h6>Phòng</h6>
                                    </div>
                                    <div className="card-body px-0 pt-0 pb-2">
                                        <div className="table-responsive p-0">
                                            <table className="table align-items-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Chủ sở hữu</th>
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Người đặt</th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Địa chỉ
                                                        </th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">checkin
                                                        </th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            checkout</th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">giá
                                                        </th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">tổng giá
                                                        </th>
                                                        <th className="text-secondary opacity-7"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {orders.map((order) => (
                                                        <tr key={order.id}>
                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">{order.orderDetail.room.owner.name}</span>
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">{order.orderDetail.user.fullname}</span>
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">{order.orderDetail.room.location}</span>
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">{order.orderDetail.checkIn}</span>
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">{order.orderDetail.checkOut}</span>
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">{order.orderDetail.price}</span>
                                                            </td>
                                                            <td className="align-middle text-center">
                                                                <span className="text-secondary text-xs font-weight-bold">{order.orderDetail.totalPrice}</span>
                                                            </td>
                                                            <td className="align-middle">
                                                                <button className="btn btn-xs mt-3 text-secondary  text-xs" data-toggle="tooltip"
                                                                    data-original-title="Edit user" onClick={(event) => handleEdit(order, event)}>
                                                                    Edit
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>

    );
};

export default Order;
