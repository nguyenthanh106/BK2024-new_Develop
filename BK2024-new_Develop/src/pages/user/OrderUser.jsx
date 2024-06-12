import React, { useState } from 'react';
import axios from 'axios';

function OrderUser() {
    const [totalAmount, setTotalAmount] = useState(0);
    const [orderInfo, setOrderInfo] = useState('');
    const [paymentUrl, setPaymentUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/create-order', {
                totalAmount: totalAmount,
                orderInfo: orderInfo
            });
            setPaymentUrl(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Đơn hàng mới</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Số tiền:
                    <input type="number" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} />
                </label>
                <br />
                <label>
                    Nội dung đơn hàng:
                    <input type="text" value={orderInfo} onChange={(e) => setOrderInfo(e.target.value)} />
                </label>
                <br />
                <button type="submit">Tạo đơn hàng</button>
            </form>
            {paymentUrl && (
                <div>
                    <p>Đơn hàng đã được tạo!</p>
                    <p>
                        Bấm vào <a href={paymentUrl}>đây</a> để thanh toán.
                    </p>
                </div>
            )}
        </div>
    );
};
export default OrderUser;
