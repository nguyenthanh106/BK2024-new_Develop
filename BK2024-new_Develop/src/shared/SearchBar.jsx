import React, { useRef } from 'react';
import axios from 'axios';
import { Form, FormGroup, Row } from 'reactstrap';
import './search-bar.css';

const SearchBar = ({ onSearch }) => {
    const locationRef = useRef('');
    const maxGroupSizeRef = useRef(0);

    const searchHandler = async () => {
        const location = locationRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (!location || !maxGroupSize) {
            return alert('Vui lòng điền đầy đủ thông tin');
        }

        try {
            const response = await axios.get(`http://localhost:8080/api/rooms/search`, {
                params: {
                    location: location,
                    person: maxGroupSize
                }
            });
            onSearch(response.data);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    const defaultMaxGroupSize = 2;

    return (
        <Row>
            <div className="search__bar">
                <Form className='d-flex align-items-center gap-4'>
                    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span><i className="ri-map-pin-line"></i></span>
                        <div>
                            <h6>Địa điểm</h6>
                            <input type="text" placeholder='Nhập địa điểm?' ref={locationRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form__group form__group-last'>
                        <span><i className="ri-group-line"></i></span>
                        <div>
                            <h6>Số người</h6>
                            <input type="number" defaultValue={defaultMaxGroupSize} placeholder='Nhập số người/phòng?' ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>

                    <button className='search__icon' type='button' onClick={searchHandler}>
                        <i className="ri-search-line"></i>
                    </button>
                </Form>
            </div>
        </Row>
    );
};

export default SearchBar;
