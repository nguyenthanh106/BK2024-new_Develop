import React, { useEffect } from 'react'
import room from '../../assets/images/room-img01.jpg'
import useStatictis from './useStatictis';

const Dashboard = () => {
    const username = localStorage.getItem("username");
    const { statictis } = useStatictis();

    return (
        <>
            <main className="main-content position-relative border-radius-lg ">
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur"
                    data-scroll="false">
                    <div className="container-fluid py-1 px-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-white text-uppercase" href="javascript:;">Trang</a></li>
                                <li className="breadcrumb-item text-sm text-white active text-uppercase" aria-current="page">Thống kê</li>
                            </ol>
                            <h6 className="font-weight-bolder text-white mb-0 text-uppercase">Thống kê</h6>
                        </nav>
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div className="ms-md-auto pe-md-3 d-flex align-items-center">

                            </div>
                            <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-white font-weight-bold px-0">
                                        <i class="ri-user-line me-sm-1"></i>
                                        <span className="d-sm-inline d-none">user: {username}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Tổng doanh thu</p>
                                                <h5 className="font-weight-bolder">
                                                    {statictis.revenue}
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                                                <i class="ri-hotel-bed-line text-lg opacity-10" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Đặt phòng</p>
                                                <h5 className="font-weight-bolder">
                                                    {statictis.rentCount.toString()}

                                                </h5>

                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                                                <i class="ri-hotel-bed-line text-lg opacity-10" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Tổng số phòng</p>
                                                <h5 className="font-weight-bolder">
                                                    {statictis.totalRoom}
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                                                <i class="ri-hotel-bed-line text-lg opacity-10" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <p className="text-sm mb-0 text-uppercase font-weight-bold">Phòng được đặt nhiều nhất</p>
                                                <h6 className="font-weight-bolder">
                                                    {statictis.topRoom.owner?.name}
                                                </h6>
                                                <p className="mb-0">
                                                    <span className="text-sm font-weight-bolder">Số lần đặt:</span> {statictis.topRoom.rentCount}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                                                <i class="ri-hotel-bed-line text-lg opacity-10" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12 mb-lg-0 mb-4">
                            <div className="card z-index-2 h-100">
                                <div className="card-header pb-0 pt-3 bg-transparent">
                                    <h6 className="text-capitalize">Doanh số</h6>
                                    <p className="text-sm mb-0">
                                        <i className="fa fa-arrow-up text-success"></i>
                                        <span className="font-weight-bold">hơn 4%</span> với năm 2023
                                    </p>
                                </div>
                                <div className="card-body p-3">
                                    <div className="chart">
                                        <canvas id="chart-line" className="chart-canvas" height="300"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-7 mb-lg-0 mb-4">
                            <div className="card ">
                                <div className="card-header pb-0 p-3">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-2">Danh sách đặt phòng</h6>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center ">
                                        <tbody>
                                            <tr>
                                                <td className="w-30">
                                                    <div className="d-flex px-2 py-1 align-items-center">
                                                        <div>
                                                            <img src={room} alt="phòng" style={{ width: '50px', height: '50px' }} />
                                                        </div>
                                                        <div className="ms-4">
                                                            <p className="text-xs font-weight-bold mb-0">sở hữu:</p>
                                                            <h6 className="text-sm mb-0">lamdhs</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        <p className="text-xs font-weight-bold mb-0">loại phòng:</p>
                                                        <h6 className="text-sm mb-0">abc</h6>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        <p className="text-xs font-weight-bold mb-0">giá:</p>
                                                        <h6 className="text-sm mb-0">$230,900</h6>
                                                    </div>
                                                </td>
                                                <td className="align-middle text-sm">
                                                    <div className="col text-center">
                                                        <p className="text-xs font-weight-bold mb-0">người đặt:</p>
                                                        <h6 className="text-sm mb-0">abc</h6>
                                                    </div>
                                                </td>
                                                <td className="align-middle text-sm">
                                                    <div className="col text-center">
                                                        <p className="text-xs font-weight-bold mb-0">ngày đặt phòng</p>
                                                        <h6 className="text-sm mb-0">12/12/2003</h6>
                                                    </div>
                                                </td>
                                                <td className="align-middle text-sm">
                                                    <div className="col text-center">
                                                        <p className="text-xs font-weight-bold mb-0">tình trạng thanh toán</p>
                                                        <h6 className="text-sm mb-0">chưa</h6>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                tương tự
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card">
                                <div className="card-header pb-0 p-3">
                                    <h6 className="mb-0">Loại phòng</h6>
                                </div>
                                <div className="card-body p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex align-items-center">
                                                <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                                    <i class="ri-skip-right-line text-white opacity-10"></i>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <h6 className="mb-1 text-dark text-sm">phòng 2 người</h6>
                                                    <span className="text-xs">250 đã đặt, <span className="font-weight-bold">346 chưa đặt</span></span>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                                                    <i class="ri-skip-right-line"></i>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex align-items-center">
                                                <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                                    <i className="ni ni-tag text-white opacity-10"></i>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <h6 className="mb-1 text-dark text-sm">Phòng 1 người</h6>
                                                    <span className="text-xs">123 đã đặt, <span className="font-weight-bold">15 chưa đặt</span></span>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i
                                                    className="ni ni-bold-right" aria-hidden="true"></i></button>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main >


        </>
    )
}

export default Dashboard
