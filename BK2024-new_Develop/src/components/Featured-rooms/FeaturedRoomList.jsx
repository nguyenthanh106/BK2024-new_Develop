import React from 'react'
import RoomCard from '../../shared/RoomCard'
import { Col } from 'reactstrap'
import useFeatureRoom from './useFeatureRoom'
const FeaturedRoomList = () => {
    const { topFeatureRoom } = useFeatureRoom();

    return (
        <>
            {
                topFeatureRoom?.map(room => (
                    <Col lg='3' className='mb-4' key={room.id}>
                        <RoomCard room={room} />
                    </Col>
                ))
            }
        </>
    )
}

export default FeaturedRoomList;
