import React, { useState, useEffect } from 'react';
import useEffectOrder from '../useEffectOrder';
import { useLocation } from 'react-router-dom';

const EditBooking = () => {

    const location = useLocation();
    const selectedOrder = location.state ? location.state.selectedOrder : null;
    const { addOrder, deleteOrder, updateOrder } = useEffectOrder();
    const [categories, setCategories] = useState([]);
    const [owners, setOwners] = useState([]);
    const [updateId, setUpdateId] = useState('');

    useEffect(() => {
        fetchCategories();
        fetchOwners();
    }, []);

    useEffect(() => {
        if (selectedOrder) {
            setFormData({
                price: selectedOrder.price,
                location: selectedOrder.location,
                person: selectedOrder.person,
                facility: selectedOrder.facility,
                isActive: selectedOrder.isActive,
                category_id: selectedOrder.category.id,
                owner_id: selectedOrder.owner.id,
                owner_name: selectedOrder.owner.name,
                owner_country: selectedOrder.owner.country,
                owner_url: selectedOrder.owner.image.url
            });
            setUpdateId(selectedOrder.id);
        }
    }, [selectedOrder]);

    const fetchCategories = async () => {
        try {
            const response = await fetch('/api/categories');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchOwners = async () => {
        try {
            const response = await fetch('/api/owners');
            const data = await response.json();
            setOwners(data);
        } catch (error) {
            console.error('Error fetching owners:', error);
        }
    };

    const [formData, setFormData] = useState(selectedOrder ? {
        price: selectedOrder.price,
        location: selectedOrder.location,
        person: selectedOrder.person,
        facility: selectedOrder.facility,
        isActive: selectedOrder.isActive,
        category_id: selectedOrder.category.id,
        owner_id: selectedOrder.owner.id,
        owner_name: selectedOrder.owner.name,
        owner_country: selectedOrder.owner.country,
        owner_url: selectedOrder.owner.image?.url
    } : {
        price: 0,
        location: '',
        person: 0,
        facility: '',
        isActive: true,
        category_id: '',
        owner_id: '',
        owner_name: '',
        owner_country: '',
        owner_url: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleIdChange = (e) => {
        const { value } = e.target;
        setUpdateId(value);
    };

    const handleAdd = async () => {
        try {
            const orderData = {
                price: formData.price,
                location: formData.location,
                person: formData.person,
                facility: formData.facility,
                isActive: formData.isActive,
                category: {
                    id: formData.category_id
                },
                owner: {
                    id: formData.owner_id
                }
            };

            const response = await addOrder(orderData);
            if (response) {
                alert("Tạo mới phòng thành công!");
                setFormData({
                    price: 0,
                    location: '',
                    person: 0,
                    facility: '',
                    isActive: true,
                    category_id: '',
                    owner_id: ''
                });
            } else {
                alert("Có lỗi xảy ra khi thêm phòng!");
            }
        } catch (error) {
            console.error("Error adding room:", error);
            alert("Có lỗi xảy ra khi thêm phòng!");
        }
    };

    const handleUpdate = async () => {
        try {
            const response = await updateOrder(updateId, {
                price: formData.price,
                location: formData.location,
                person: formData.person,
                facility: formData.facility,
                isActive: formData.isActive,
                category: {
                    id: formData.category_id
                },
                owner: {
                    id: formData.owner_id
                }
            });
            if (response.status === 201) {
                alert("Cập nhật thành công");
            } else {
                console.error("Error updating room:", response.data);
                alert("Cập nhật thành công");
            }
        } catch (error) {
            console.error("Error updating room:", error);
        }
    };


    const handleDelete = async () => {
        try {
            if (!updateId) {
                alert('Vui lòng nhập ID phòng trước khi xóa!');
                return;
            }

            const response = await deleteOrder(updateId);
            if (response.status === 200) {
                alert('Đã xóa phòng thành công!');
            } else {
                console.error("Lỗi khi xóa phòng:", response.data);
                alert('Đã xóa phòng thành công!');
            }
        } catch (error) {
            console.error("Lỗi khi xóa phòng:", error);
            alert('Xóa phòng không thành công!');
        }
    };
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
                            <h6 className="font-weight-bolder text-white mb-0 text-uppercase">Đặt phòng</h6>
                        </nav>
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div className="input-group">
                                    <span className="input-group-text text-body"><i className="ri-search-line" aria-hidden="true"></i></span>
                                    <input type="text" className="form-control" placeholder="Nhập ở đây..." />
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
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header pb-0">
                                    <div className="d-flex align-items-center">
                                        <p className="mb-0">Chỉnh sửa</p>
                                        <button className="btn btn-primary btn-sm ms-5">Cập nhật</button>
                                        <button className="btn btn-primary btn-sm ms-5">Xóa</button>
                                        <button className="btn btn-primary btn-sm ms-5">Tạo mới</button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="text-uppercase text-sm">Loại phòng</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Tên khách sạn</label>
                                                <input className="form-control" type="text" value="abc" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Email</label>
                                                <input className="form-control" type="email" value="lamdhs@fpt.com" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Chủ khách sạn</label>
                                                <input className="form-control" type="text" value="lamdhs" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Loại phòng</label>
                                                <input className="form-control" type="text" value="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Giá phòng</label>
                                                <input className="form-control" type="text" value="" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="horizontal dark" />
                                    <p className="text-uppercase text-sm">Thông tin người đặt</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">username</label>
                                                <input className="form-control" type="text" value="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">sđt</label>
                                                <input className="form-control" type="text" value="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">ngày nhận phòng</label>
                                                <input className="form-control" type="date" value="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">ngày trả</label>
                                                <input className="form-control" type="date" value="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">số lượng phòng đặt</label>
                                                <input className="form-control" type="number" value="12" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">địa chỉ</label>
                                                <input className="form-control" type="text" value="abc Hồ chí minh" />
                                            </div>
                                        </div>

                                    </div>
                                    <hr className="horizontal dark" />
                                    <p className="text-uppercase text-sm">Phòng đã đặt</p>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="card mb-4">
                                                <div className="card-header pb-0 d-flex align-items-center">
                                                    <h6>Phòng</h6>
                                                    <p className='ms-auto text-2xl'>Tổng tiền: 123</p>
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
                                                                        số lượng</th>
                                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">trạng thái
                                                                    </th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="d-flex px-2 py-1">
                                                                            <div>
                                                                                {/* <img src={room} alt="user1" style={{ width: '50px', height: '50px' }} /> */}
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
                                                                        <span className="text-secondary text-xs font-weight-bold">2</span>
                                                                    </td>
                                                                    <td className="align-middle text-center text-sm">
                                                                        <span className="badge badge-sm bg-gradient-success">đã thanh toán</span>
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
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </>
    )
}

export default EditBooking
