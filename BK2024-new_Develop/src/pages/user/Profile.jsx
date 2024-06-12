import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import '../../styles/profile.css';
import ava from '../../assets/images/ava-1.jpg';
import useAuthenticate from './useAuthenticate';

const Profile = () => {
    const { user, updateUserProfile } = useAuthenticate();
    const [profile, setProfile] = useState({
        id: localStorage.getItem('user_id'), 
        username: user.username,
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        address: user.address || '',
        imageId: user.imageId || null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const updated = await updateUserProfile(profile);
            console.log('Profile updated:', updated);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <Container>
            <Row>
                <div className="db-cent">
                    <div className="db-cent-1">
                        <p>Hi {user.fullname}</p>
                        <h4>Welcome to your dashboard</h4>
                    </div>
                    <div className="db-profile">
                        <img src={user.image || ava} alt="" />
                        <h4>{user.fullname}</h4>
                        <p>{user.address || 'TPHCM'}</p>
                    </div>
                    <div className="db-profile-view">
                        <table>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.username}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="db-profile-edit">
                        <form className="col s12" onSubmit={handleFormSubmit}>
                            <div>
                                <label className="col s4">Username</label>
                                <div className="input-field col s8">
                                    <input
                                        type="text"
                                        name="username"
                                        value={profile.username}
                                        onChange={handleInputChange}
                                        className="validate"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="col s4">Email</label>
                                <div className="input-field col s8">
                                    <input
                                        type="email"
                                        name="email"
                                        value={profile.email}
                                        onChange={handleInputChange}
                                        className="validate"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="col s4">Phone</label>
                                <div className="input-field col s8">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={profile.phone}
                                        onChange={handleInputChange}
                                        className="validate"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="col s4">Fullname</label>
                                <div className="input-field col s8">
                                    <input
                                        type="text"
                                        name="fullname"
                                        value={profile.fullname}
                                        onChange={handleInputChange}
                                        className="validate"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="col s4">Address</label>
                                <div className="input-field col s8">
                                    <input
                                        type="text"
                                        name="address"
                                        value={profile.address}
                                        onChange={handleInputChange}
                                        className="validate"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="input-field col s8">
                                    <button
                                        type="submit"
                                        className="waves-effect waves-light pro-sub-btn"
                                        id="pro-sub-btn"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Profile;
