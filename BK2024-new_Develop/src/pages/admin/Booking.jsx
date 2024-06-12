import React from 'react'
import room from '../../assets/images/room-img01.jpg'

const Booking = () => {
    return (
        <>
            <main className="main-content position-relative border-radius-lg ">
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur"
                    data-scroll="false">
                    <div className="container-fluid py-1 px-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-white text-uppercase" href="javascript:;">Trang</a></li>
                                <li className="breadcrumb-item text-sm text-white active text-uppercase" aria-current="page">danh sách đặt phòng</li>
                            </ol>
                            <h6 className="font-weight-bolder text-white mb-0 text-uppercase">danh sách</h6>
                        </nav>
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div class="input-group">
                                    <span class="input-group-text text-body"><i class="ri-search-line" aria-hidden="true"></i></span>
                                    <input type="text" class="form-control" placeholder="Nhập ở đây..." />
                                </div>
                            </div>
                            <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item d-flex align-items-center">
                                    <a href="javascript:;" className="nav-link text-white font-weight-bold px-0">
                                        <i className="ri-user-line me-sm-1"></i>
                                        <span className="d-sm-inline d-none">tên đăng nhập</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav >

                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className="card-header pb-0">
                                    <h6>Danh sách</h6>
                                </div>
                                <div className="card-body px-0 pt-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Chủ sở hữu</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">loại phòng</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">địa chỉ
                                                    </th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                        giá</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                        Người đặt</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                        sđt người đặt</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                        ngày đặt</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                        ngày nhận phòng</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">thanh toán
                                                    </th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                        số lượng phòng</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                        tổng giá</th>
                                                    <th className="text-secondary opacity-7"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src={room} alt="user1" style={{ width: '50px', height: '50px' }} />
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">John Michael</h6>
                                                                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">deluxe</p>
                                                        <p className="text-xs text-secondary mb-0">2 người</p>
                                                    </td>

                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">Hồ chí minh</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">1000K</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">lamdhs</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">0123123</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">16/12/12</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">17/12/12</span>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="badge badge-sm bg-gradient-success">chưa</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">17</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">1 tỷ</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip"
                                                            data-original-title="Edit user">
                                                            Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Booking
