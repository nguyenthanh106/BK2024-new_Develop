import React from 'react'
import mastercard from '../../assets/images/mastercard.png'
import visa from '../../assets/images/visa.png'
const Payment = () => {
    return (
        <>
            <main class="main-content position-relative border-radius-lg ">

                <div class="container-fluid py-4">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-xl-6 mb-xl-0 mb-4">
                                    <div class="card bg-transparent shadow-xl">
                                        <div class="overflow-hidden position-relative border-radius-xl"
                                            style={{ backgroundImage: "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-visa.jpg')" }}>

                                            <span class="mask bg-gradient-dark"></span>
                                            <div class="card-body position-relative z-index-1 p-3">
                                                <i class="ri-wifi-line text-white p-2"></i>

                                                <h5 class="text-white mt-4 mb-5 pb-2">
                                                    4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</h5>
                                                <div class="d-flex">
                                                    <div class="d-flex">
                                                        <div class="me-4">
                                                            <p class="text-white text-sm opacity-8 mb-0">Chủ thẻ</p>
                                                            <h6 class="text-white mb-0">Lâm Dương</h6>
                                                        </div>
                                                        <div>
                                                            <p class="text-white text-sm opacity-8 mb-0">Hạn thẻ</p>
                                                            <h6 class="text-white mb-0">11/22</h6>
                                                        </div>
                                                    </div>
                                                    <div class="ms-auto w-20 d-flex align-items-end justify-content-end">
                                                        <img class="w-60 mt-2" src={mastercard} alt="logo" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="card">
                                                <div class="card-header mx-5 p-2 text-center">
                                                    <div class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">

                                                        <i class="ri-bank-line opacity-10"></i>
                                                    </div>
                                                </div>
                                                <div class="card-body pt-0 p-3 text-center">
                                                    <h6 class="text-center mb-0">Salary</h6>
                                                    <span class="text-xs">Belong Interactive</span>
                                                    <hr class="horizontal dark my-3" />
                                                    <h5 class="mb-0">+$2000</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mt-md-0 mt-4">
                                            <div class="card">
                                                <div class="card-header mx-5 p-2 text-center">
                                                    <div class="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">

                                                        <i class="ri-paypal-line opacity-10"></i>
                                                    </div>
                                                </div>
                                                <div class="card-body pt-0 p-3 text-center">
                                                    <h6 class="text-center mb-0">Paypal</h6>
                                                    <span class="text-xs">Freelance Payment</span>
                                                    <hr class="horizontal dark my-3" />
                                                    <h5 class="mb-0">$455.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 mb-lg-0 mb-4">
                                    <div class="card mt-4">
                                        <div class="card-header pb-0 p-3">
                                            <div class="row">
                                                <div class="col-6 d-flex align-items-center">
                                                    <h6 class="mb-0">Payment Method</h6>
                                                </div>
                                                <div class="col-6 text-end">
                                                    <a class="btn bg-gradient-dark mb-0" href="javascript:;"><i
                                                        class="fas fa-plus"></i>&nbsp;&nbsp;Add New Card</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body p-3">
                                            <div class="row">
                                                <div class="col-md-6 mb-md-0 mb-4">
                                                    <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                                                        <img class="w-10 me-3 mb-0" src={mastercard} alt="logo" />
                                                        <h6 class="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852</h6>
                                                        <i class="fas fa-pencil-alt ms-auto text-dark cursor-pointer" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Edit Card"></i>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                                                        <img class="w-10 me-3 mb-0" src={visa} alt="logo" />
                                                        <h6 class="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248</h6>
                                                        <i class="fas fa-pencil-alt ms-auto text-dark cursor-pointer" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Edit Card"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <div class="card-header pb-0 p-3">
                                    <div class="row">
                                        <div class="col-6 d-flex align-items-center">
                                            <h6 class="mb-0">Hóa đơn</h6>
                                        </div>
                                        <div class="col-6 text-end">
                                            <button class="btn btn-outline-primary btn-sm mb-0">Xem tất cả</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body p-3 pb-0">
                                    <ul class="list-group">
                                        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div class="d-flex flex-column">
                                                <h6 class="mb-1 text-dark font-weight-bold text-sm">March, 01, 2020</h6>
                                                <span class="text-xs">#MS-415646</span>
                                            </div>
                                            <div class="d-flex align-items-center text-sm">
                                                $180
                                                <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i
                                                    class="fas fa-file-pdf text-lg me-1"></i> PDF</button>
                                            </div>
                                        </li>
                                        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div class="d-flex flex-column">
                                                <h6 class="text-dark mb-1 font-weight-bold text-sm">February, 10, 2021</h6>
                                                <span class="text-xs">#RV-126749</span>
                                            </div>
                                            <div class="d-flex align-items-center text-sm">
                                                $250
                                                <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i
                                                    class="fas fa-file-pdf text-lg me-1"></i> PDF</button>
                                            </div>
                                        </li>
                                        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div class="d-flex flex-column">
                                                <h6 class="text-dark mb-1 font-weight-bold text-sm">April, 05, 2020</h6>
                                                <span class="text-xs">#FB-212562</span>
                                            </div>
                                            <div class="d-flex align-items-center text-sm">
                                                $560
                                                <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i
                                                    class="fas fa-file-pdf text-lg me-1"></i> PDF</button>
                                            </div>
                                        </li>
                                        <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div class="d-flex flex-column">
                                                <h6 class="text-dark mb-1 font-weight-bold text-sm">June, 25, 2019</h6>
                                                <span class="text-xs">#QW-103578</span>
                                            </div>
                                            <div class="d-flex align-items-center text-sm">
                                                $120
                                                <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i
                                                    class="fas fa-file-pdf text-lg me-1"></i> PDF</button>
                                            </div>
                                        </li>
                                        <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                                            <div class="d-flex flex-column">
                                                <h6 class="text-dark mb-1 font-weight-bold text-sm">March, 01, 2019</h6>
                                                <span class="text-xs">#AR-803481</span>
                                            </div>
                                            <div class="d-flex align-items-center text-sm">
                                                $300
                                                <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i
                                                    class="fas fa-file-pdf text-lg me-1"></i> PDF</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mt-4">
                            <div class="card">
                                <div class="card-header pb-0 px-3">
                                    <h6 class="mb-0">Thông tin thanh toán</h6>
                                </div>
                                <div class="card-body pt-4 p-3">
                                    <ul class="list-group">
                                        <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                                            <div class="d-flex flex-column">
                                                <h6 class="mb-3 text-sm">Lamdhs</h6>
                                                <span class="mb-2 text-xs">tên chủ thanh toán: <span class="text-dark font-weight-bold ms-sm-2">Dương Lâm</span></span>
                                                <span class="mb-2 text-xs">Email: <span
                                                    class="text-dark ms-sm-2 font-weight-bold">lamdhs@fpt.com</span></span>
                                                <span class="text-xs">VAT Number: <span
                                                    class="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                                            </div>
                                            <div class="ms-auto text-end">
                                                <a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;"><i
                                                    class="far fa-trash-alt me-2"></i>Delete</a>
                                                <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i
                                                    class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </>
    )
}

export default Payment
