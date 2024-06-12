import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { resolvePath, useLocation, useNavigate } from 'react-router-dom';

const EditUser = () => {
    const { state } = useLocation();
    const [user, setUser] = useState(state ? state.selectedUser : null)
    const host = "http://localhost:8080/api";
    const [originalUser, setOriginalUser] = useState(state ? state.selectedUser : null);

    console.log(user)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleUpdate = async () => {
        // Kiểm tra xem dữ liệu có thay đổi so với dữ liệu ban đầu không
        if (JSON.stringify(user) !== JSON.stringify(originalUser)) {
            try {
                const response = await axios.put(`${host}/admin/users/${user.id}`, {
                    username: user.username,
                    email: user.email,
                    fullname: user.fullname,
                    phone: user.phone,
                    address: user.address,
                    gender: user.gender
                });
                if (response.status === 200) {
                    alert('User updated successfully');
                } else {
                    alert(response.data);
                }
            } catch (error) {
                console.error('An error occurred:', error);
                alert('An error occurred. Please try again.');
            }
        } else {
            // Nếu không có sự thay đổi, không cần gọi API cập nhật và có thể thông báo cho người dùng rằng không có gì thay đổi
            alert('No changes to update.');
        }
    };


    const handleDelete = async (user) => {
        try {
            const response = await axios.delete(`${host}/admin/users/${user.id}`);
            if (response.status === 200) {
                alert('Xoá user thành công');
            } else {
                alert(response.data)
            }
        } catch (error) {
            console.error('An error occurred:', error);
            alert('Không thể xoá user này vì user này đăng đặt phòng');
        }
    }

    return (
        <>
            <main className="main-content position-relative border-radius-lg ">
                <div className="container-fluid py-4">
                    <div className="card">
                        <div className="card-header pb-0">
                            <div class="d-flex gap-3  ">
                                <span class="cursor-pointer" onClick={(e) => { window.history.back(); }}> <i class="ri-arrow-left-line" ></i></span>
                                <h6>User Profile</h6>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary me-2" onClick={() => handleUpdate(user)}>Update</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(user)}>Delete</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="fullname" value={user.fullname} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} disabled />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="text" className="form-control" id="phone" name="phone" value={user.phone} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <select
                                        className="form-control"
                                        id="gender"
                                        name="gender"
                                        value={user ? user.gender : ''}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" name="address" value={user.address} onChange={handleChange} />
                                </div>
                                {
                                    // <label htmlFor="password" className="form-label">Password</label>
                                    // <div className="mb-3 input-group">
                                    //     <input type={showPassword ? "text" : "password"} className="form-control" id="password" name="password" value={user.password}
                                    //         onChange={handleChange} aria-label="Username" />
                                    //     <span class="input-group-text" onClick={togglePasswordVisibility} >{showPassword ? 'Hide' : 'Show'}</span>
                                    // </div>
                                }
                                {
                                    // <div className="mb-3">
                                    //     <label htmlFor="image" className="form-label">Profile Image</label>
                                    //     <input type="file" className="form-control" id="image" />
                                    //     {user.image && <img src={URL.createObjectURL(user.image)} alt="Profile" style={{ width: '100px', marginTop: '10px' }} />}
                                    // </div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default EditUser
