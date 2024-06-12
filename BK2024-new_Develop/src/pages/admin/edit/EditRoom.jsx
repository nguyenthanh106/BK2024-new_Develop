import React, { useState, useEffect } from 'react';
import useEffectBooking from '../useEffectBooking';
import { useLocation } from 'react-router-dom';

const EditRoom = () => {

    const location = useLocation();
    const selectedRoom = location.state ? location.state.selectedRoom : null;
    const { addRoom, deleteRoom, updateRoom } = useEffectBooking();
    const [categories, setCategories] = useState([]);
    const [owners, setOwners] = useState([]);
    const [updateId, setUpdateId] = useState('');

    useEffect(() => {
        fetchCategories();
        fetchOwners();
    }, []);

    useEffect(() => {
        if (selectedRoom) {
            setFormData({
                price: selectedRoom.price,
                location: selectedRoom.location,
                person: selectedRoom.person,
                facility: selectedRoom.facility,
                isActive: selectedRoom.isActive,
                category_id: selectedRoom.category.id,
                owner_id: selectedRoom.owner.id,
                owner_name: selectedRoom.owner.name,
                owner_country: selectedRoom.owner.country,
                owner_url: selectedRoom.owner.image.url
            });
            setUpdateId(selectedRoom.id);
        }
    }, [selectedRoom]);

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

    const [formData, setFormData] = useState(selectedRoom ? {
        price: selectedRoom.price,
        location: selectedRoom.location,
        person: selectedRoom.person,
        facility: selectedRoom.facility,
        isActive: selectedRoom.isActive,
        category_id: selectedRoom.category.id,
        owner_id: selectedRoom.owner.id,
        owner_name: selectedRoom.owner.name,
        owner_country: selectedRoom.owner.country,
        owner_url: selectedRoom.owner.image?.url
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
            const roomData = {
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

            const response = await addRoom(roomData);
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
            const response = await updateRoom(updateId, {
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

            const response = await deleteRoom(updateId);
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
                                <li className="breadcrumb-item text-sm text-white active text-uppercase" aria-current="page">danh sách phòng</li>
                            </ol>

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
                                    <span className="nav-link text-white font-weight-bold px-0" onClick={() => { }}>
                                        <i className="ri-user-line me-sm-1"></i>
                                        <span className="d-sm-inline d-none">tên đăng nhập</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header pb-0">
                                    <div className="d-flex align-items-center">
                                        <div class="d-flex gap-3  ">
                                            <span class="cursor-pointer" onClick={() => { window.history.back(); }}> <i class="ri-arrow-left-line" ></i></span>
                                            <p className="mb-0">Chỉnh sửa phòng</p>
                                        </div>
                                        <button className="btn btn-primary btn-sm ms-5" onClick={handleUpdate}>Cập nhật</button>
                                        <button className="btn btn-primary btn-sm ms-5" onClick={handleDelete}>Xóa</button>
                                        <button className="btn btn-primary btn-sm ms-5" onClick={handleAdd}>Tạo mới</button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="text-uppercase text-sm">Chủ Phòng</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="roomId" className="form-control-label">ID phòng</label>
                                                <input className="form-control" type="text" id="roomId" name="roomId" value={updateId} onChange={handleIdChange} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Tên khách sạn</label>
                                                <input disabled className="form-control" id="owner_name" name="owner_name" type="text" value={formData.owner_name} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="owner_image_url" className="form-control-label">Hình ảnh chủ sở hữu</label>
                                                <input disabled className="form-control" id="owner_image_url" name="owner_image_url" type="text" value={formData.owner_url} />
                                                <img src={formData.owner_url} alt="Hình ảnh chủ sở hữu" style={{ maxWidth: '100%', marginTop: '5px' }} />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="owner_country" className="form-control-label">Quốc gia của chủ sở hữu</label>
                                                <input disabled className="form-control" id="owner_country" name="owner_country" type="text" value={formData.owner_country} />
                                            </div>
                                        </div>


                                    </div>
                                    <hr className="horizontal dark" />
                                    <p className="text-uppercase text-sm">Thông tin liên lạc</p>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Địa điểm</label>
                                                <input className="form-control" type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
                                            </div>
                                        </div>


                                    </div>
                                    <hr className="horizontal dark" />
                                    <p className="text-uppercase text-sm">Phòng</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">tiện nghi</label>
                                                <input className="form-control" type="text" id="facility" name="facility" value={formData.facility} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Số người</label>
                                                <input className="form-control" type="number" id="person" name="person" value={formData.person} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-text-input" className="form-control-label">Giá</label>
                                                <input className="form-control" type="number" id="price" name="price" value={formData.price} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="category_id" className="form-control-label">Loại phòng</label>
                                                <select className="form-control" id="category_id" name="category_id" value={formData.category_id} onChange={handleChange}>
                                                    <option value="">Chọn loại phòng</option>
                                                    {categories.map(category => (
                                                        <option key={category.id} value={category.id}>{category.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="owner_id" className="form-control-label">Chủ sở hữu</label>
                                                <select className="form-control" id="owner_id" name="owner_id" value={formData.owner_id} onChange={handleChange}>
                                                    <option value="">Chọn chủ sở hữu</option>
                                                    {owners.map(owner => (
                                                        <option key={owner.id} value={owner.id}>{owner.name}</option>
                                                    ))}
                                                </select>
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

export default EditRoom
