// AdminRoutes.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard';
import RoomAdmin from '../pages/admin/RoomAdmin';
import Payment from '../pages/admin/Payment';
import Booking from '../pages/admin/Booking';
import Hotel from '../pages/admin/Hotel';
import User from '../pages/admin/User';
import EditRoom from '../pages/admin/edit/EditRoom';
import EditUser from '../pages/admin/edit/EditUser';
import EditBooking from '../pages/admin/edit/EditBooking';
import ChatAdmin from '../pages/admin/ChatAdmin';
import useAuthCheck from '../pages/admin/userAuthCheck';
import Order from '../pages/admin/Order';

const AdminRoutes = () => {
    useAuthCheck();
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/user' element={<User />} />
            <Route path='/room' element={<RoomAdmin />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/hotel' element={<Hotel />} />
            <Route path='/editRoom' element={<EditRoom />} />
            <Route path='/editUser' element={<EditUser />} />
            <Route path='/editBooking' element={<EditBooking />} />
            <Route path='/chatAdmin' element={<ChatAdmin />} />
            <Route path='/order' element={<Order />} />
        </Routes>
    )
}

export default AdminRoutes;
