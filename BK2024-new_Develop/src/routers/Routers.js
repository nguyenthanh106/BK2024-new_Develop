import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/user/Home';
import Room from '../pages/user/Room';
import RoomDetail from '../pages/user/RoomDetails';
import Login from '../pages/user/Login';
import Register from '../pages/user/Register';
import Cart from '../pages/user/Cart';
import Payment from '../pages/user/Payment';
import Event from '../pages/user/Event';
import Logout from '../pages/user/Logout';
import AccountUser from '../pages/user/AccountUser';
import Profile from '../pages/user/Profile';
import UserChat from '../pages/user/UserChat';
import OrderUser from '../pages/user/OrderUser';
const Routers = () => {

    return (
        <Routes>
            <Route path='/*' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/rooms' element={<Room />} />
            <Route path='/rooms/:id' element={<RoomDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/event' element={<Event />} />
            <Route path='/account' element={<AccountUser />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/userchat' element={<UserChat />} />
            <Route path='/orderUser' element={<OrderUser />} />
        </Routes>
    )
}

export default Routers;
