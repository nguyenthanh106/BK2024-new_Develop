import React, { useState } from 'react';
import axios from 'axios';

const host = 'http://localhost:8080/api';

export default function SignUpForm() {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        username: "",
        password: "",
        phone: "",
        password_confirmation: ""
    });

    const { fullname, email, username, password, phone, password_confirmation } = formData;

    const setParams = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const register = () => {
        const data = {
            fullname: fullname,
            email: email,
            username: username,
            phone: phone,
            password: password,
            address: null,
            gender: null,
            imageId: null
        };

        if (password === password_confirmation) {
            axios.post(`${host}/signup`, data)
                .then(response => {
                    if (response.status === 201) {
                        alert('User registered successfully, Login to continue!');
                        window.location.href = '/login';
                    }
                }).catch(error => {
                    if (error.response.status === 400) {
                        const errorMessage = error.response.data?.body?.message || 'An error occurred. Please try again later.';
                        alert(`Registration failed: ${errorMessage}`);
                    } else {
                        alert('Error registering user:', error.response.data);
                        // alert('An error occurred. Please try again later.');
                    }
                });
        } else {
            alert('Password and Confirm Password should be same!');
        }
    };


    return (
        <div>

            <div className="container">
                <div className="row align-item-center mt-5 mb-5">
                    <div className="col-md-8 mx-auto">
                        <h2 className="text-center">Sign Up</h2>
                        <form >
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Fullname</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="fullname" // Specify name attribute
                                    placeholder="Enter Name"
                                    value={fullname}
                                    onChange={setParams}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email" // Specify name attribute
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={setParams}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username" // Specify name attribute
                                    placeholder="Enter Username"
                                    value={username}
                                    onChange={setParams}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    name="phone" // Specify name attribute
                                    placeholder="Enter Phone"
                                    value={phone}
                                    onChange={setParams}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password" // Specify name attribute
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={setParams}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    name="password_confirmation" // Specify name attribute
                                    placeholder="Confirm Password"
                                    value={password_confirmation}
                                    onChange={setParams}
                                    required
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary mt-3 w-100"
                                onClick={register}>
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
