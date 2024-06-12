import React, { useEffect, useState } from 'react'
import useEffectBooking from './useEffectBooking';
import { Spinner } from 'reactstrap';
import { useNavigate } from 'react-router-dom';


const RoomAdmin = () => {
    const { room, isLoading } = useEffectBooking();
    const [searchedRooms, setSearchedRooms] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setSearchedRooms(room);
        }, 1000);
    }, [room]);

    const handleEdit = (room, event) => {
        event.preventDefault();
        navigate("/admin/editRoom", { state: { selectedRoom: room } });
    };

    const handleSearch = (data) => {
        setSearchedRooms(data);
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
                            <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item d-flex align-items-center">
                                    <button className="btn text-white font-weight-bold px-0" onClick={(e) => { handleSearch(e.target.value) }}>
                                        <i className="ri-user-line me-sm-1"></i>
                                        <span className="d-sm-inline d-none">user: {localStorage.getItem("username")}</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid py-4">
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
                                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">loại phòng</th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">dịch vụ
                                                        </th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">địa chỉ
                                                        </th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                            giá</th>
                                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">trạng thái
                                                        </th>
                                                        <th className="text-secondary opacity-7"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {room.map((room, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <div className="d-flex px-2 py-1 gap-3">
                                                                        <div>
                                                                            <img src={process.env.PUBLIC_URL + '/' + room.owner.image?.url} alt="hotel" style={{ width: '50px', height: '50px' }} />
                                                                        </div>
                                                                        <div className="d-flex flex-column justify-content-center">
                                                                            <h6 className="mb-0 text-sm">{room.owner.name}</h6>
                                                                            <p className="text-xs text-secondary mb-0">{room.owner.country}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <p className="text-xs font-weight-bold mb-0">{room.category.name}</p>
                                                                    <p className="text-xs text-secondary mb-0">{room.person} người</p>
                                                                </td>
                                                                <td className="align-middle text-center">
                                                                    <span className="text-secondary text-xs font-weight-bold">{room.facility}</span>
                                                                </td>
                                                                <td className="align-middle text-center">
                                                                    <span className="text-secondary text-xs font-weight-bold">{room.location}</span>
                                                                </td>
                                                                <td className="align-middle text-center">
                                                                    <span className="text-secondary text-xs font-weight-bold">{room.price}</span>
                                                                </td>
                                                                <td className="align-middle text-center text-sm">
                                                                    <span className={`badge badge-sm ${room.is_active === 1 ? 'bg-gradient-danger' : 'bg-gradient-success'}`}>
                                                                        {room.is_active === 1 ? 'Hết phòng' : 'Còn phòng'}
                                                                    </span>
                                                                </td>
                                                                <td className="align-middle">
                                                                    <button className="btn btn-xs mt-3 text-secondary  text-xs" data-toggle="tooltip"
                                                                        data-original-title="Edit user" onClick={(event) => handleEdit(room, event)}>
                                                                        Edit
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
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
    )
}

export default RoomAdmin
