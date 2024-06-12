import React, { useState } from 'react';
import useAuthenticate from './useAuthenticate';

export default function Login() {
    const {
        handleLogin,
        username,
        password,
        setPassword,
        setUsername
    } = useAuthenticate();

    return (
        <div>
            <div className="container">
                <div className="row align-item-center mt-5 mb-5">
                    <div className="col-md-8 mx-auto">
                        <h2 className="text-center">Login</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    placeholder="Enter username"
                                    value={username}
                                    required={true}
                                    onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    required={true}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="button" className="btn btn-primary mt-3 w-100" onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
