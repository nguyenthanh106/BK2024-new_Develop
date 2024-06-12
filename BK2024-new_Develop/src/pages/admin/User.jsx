import React, { useState } from 'react'
import room from '../../assets/images/room-img01.jpg'
import useUser from './useUser';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const User = () => {
    const host = "http://localhost:8080/api";
    const username = localStorage.getItem('username');
    const navigate = useNavigate();
    const { user } = useUser();
    const [showModal, setShowModal] = useState(false);


    const [userData, setUserData] = useState({
        phone: '',
        fullname: '',
        email: '',
        username: '',
        password: '',
        address: '',
        gender: '',
        imageId: 1,
        // roles: []
    });
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleEdit = (userData, event) => {
        event.preventDefault();
        if (userData) {
            navigate("/admin/editUser", { state: { selectedUser: userData } });
        } else {
            alert("Thông tin người dùng không khả dụng");
        }
    };

    const handleRolesChange = (event) => {
        const selectedRoleId = event.target.value;
        const roleRequest = {
            roleIds: [parseInt(selectedRoleId)]
        };
        setUserData(prevUserData => ({
            ...prevUserData,
            roles: roleRequest
        }));
    };


    console.log(userData)


    const handleAddUser = async (userData) => {
        try {
            const response = await axios.post(`http://localhost:8080/api/admin/users`, userData);
            console.log(userData)
            if (response.status === 201) {
                console.log('User Created:', response.data);
                alert('User created successfully!');
                // Clear userData.roles after successful user creation
                setUserData(prevUserData => ({
                    ...prevUserData,
                    roles: null
                }));
            } else {
                alert('Failed to create user!' + response.data);
            }
        } catch (error) {
            console.error('Failed to create user:', error);
            alert('Failed to create user!' + error);
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddUser(userData);
    };


    return (
        <>
            <main className="main-content position-relative border-radius-lg ">
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur"
                    data-scroll="false">
                    <div className="container-fluid py-1 px-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li className="breadcrumb-item text-sm">
                                    <span className=" text-white text-uppercase">Trang</span>
                                </li>
                                <li className="breadcrumb-item text-sm text-white active text-uppercase" aria-current="page">danh sách người dùng</li>
                            </ol>
                            <h6 className="font-weight-bolder text-white mb-0 text-uppercase">Người dùng</h6>
                        </nav>
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div class="input-group">
                                    <span class="input-group-text text-body"><i class="ri-search-line" aria-hidden="true"></i></span>
                                    <input type="text" className="form-control" placeholder="Nhập ở đây..." />
                                </div>
                            </div>
                            <span className="nav-link text-white font-weight-bold px-0" onClick={() => { }}>
                                <i className="ri-user-line me-sm-1"></i>
                                <span className="d-sm-inline d-none">user: {username}</span>
                            </span>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className="card-header pb-0  ">
                                    <div className="d-flex justify-content-between">
                                        <h5>Người dùng</h5>
                                        <button className='btn btn-primary'
                                            data-bs-toggle="modal"
                                            data-bs-target="#userModal">
                                            Thêm người dùng
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body px-0 pt-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">User</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Phone
                                                    </th>

                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Gender
                                                    </th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Address
                                                    </th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Role
                                                    </th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Image
                                                    </th>
                                                    <th className="text-secondary opacity-7"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {user.map((userData, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="d-flex px-2 py-1 gap-3">

                                                                <div className="d-flex flex-column justify-content-center">
                                                                    <h6 className="mb-0 text-sm">{userData.fullname}</h6>
                                                                    <p className="text-xs text-secondary mb-0">{userData.email}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="text-xs font-weight-bold mb-0">{userData.phone}</p>

                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <span className="text-secondary text-xs font-weight-bold">
                                                                <p className="badge badge-xs bg-success text-white">
                                                                    {userData.gender}
                                                                </p>
                                                            </span>
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <span className="text-secondary text-xs font-weight-bold">{userData.address}</span>
                                                        </td>
                                                        <td className="align-middle text-center text-sm">
                                                            {
                                                                userData.roles.map((role, index) => (
                                                                    <p className="badge badge-xs bg-success text-white" key={index}> {role.roleName}</p>
                                                                ))
                                                            }
                                                        </td>
                                                        <td className="align-middle text-center text-sm">
                                                            <div>
                                                                <img src={room} alt="user1" style={{ width: '50px', height: '50px' }} />
                                                            </div>
                                                        </td>
                                                        <td className="align-middle">
                                                            <button className="btn btn-xs text-xs mt-3" data-toggle="tooltip"
                                                                data-original-title="Edit user" onClick={(event) => handleEdit(userData, event)}>
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
                </div>
            </main>
            <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="userModalLabel">Modal Title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="fullname" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="fullname" name="fullname" value={userData.fullname} onChange={handleChange} autoComplete="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="text" className="form-control" id="phone" name="phone" value={userData.phone} onChange={handleChange} autoComplete="tel" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleChange} autoComplete="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" name="username" value={userData.username} onChange={handleChange} autoComplete="username" />
                                </div>
                                <label htmlFor="password" className="form-label">Password</label>
                                <div className="mb-3 input-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={userData.password || ''}
                                        onChange={handleChange}
                                        autoComplete="new-password"
                                    />
                                    <span className="input-group-text" onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
                                        <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"}></i>
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" name="address" value={userData.address} onChange={handleChange} autoComplete="street-address" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <select className="form-control" id="gender" name="gender" value={userData.gender} onChange={handleChange} autoComplete="sex">
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <select
                                    className="form-control"
                                    value={userData.roles ? userData.roles.roleIds : ''} // chỉ định roleIds
                                    onChange={handleRolesChange}
                                >
                                    <option value="">Select roles</option>
                                    <option value="1">User</option>
                                    <option value="2">Staff</option>
                                    <option value="3">Admin</option>
                                </select>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User
