import React, {useEffect} from 'react'
import {useStoreActions, useStoreState} from 'easy-peasy';

import './Page.scss';

import slide_02 from '../pages/assets/slide_02.jpg'
import room1 from '../pages/assets/room1.JPG'
import room3 from '../pages/assets/room3.JPG'
import room4 from '../pages/assets/room4.JPG'
import rooms_01 from '../pages/assets/rooms_01.JPG'
import rooms_02 from '../pages/assets/rooms_02.JPG'
import rooms_03 from '../pages/assets/rooms_03.JPG'
import rooms_04 from '../pages/assets/rooms_04.JPG'

const Rooms = () => {

    const setPage = useStoreActions(actions => actions.setPage);
    const page = useStoreState(state => state.page);

    useEffect(() => {
        setPage("Rooms");
        document.title = page;
    }, [page])

    return (
        <div className="main-container">
            <div className="pic-box">
                <div className="row">

                    <div className="col s3">
                        <img width="100%" alt="img" src={rooms_01}/>
                    </div>

                    <div className="col s3">
                        <img width="100%" alt="img" src={rooms_02}/>
                    </div>

                    <div className="col s3">
                        <img width="100%" alt="img" src={rooms_03}/>
                    </div>

                    <div className="col s3">
                        <img width="100%" alt="img" src={rooms_04}/>
                    </div>
                </div>

                <div className="row">

                    <div className="col s3">
                        <img width="100%" alt="img" src={slide_02}/>
                    </div>

                    <div className="col s3">
                        <img width="100%" alt="img" src={room1}/>
                    </div>

                    <div className="col s3">
                        <img width="100%" alt="img" src={room3}/>
                    </div>

                    <div className="col s3">
                        <img width="100%" alt="img" src={room4}/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Rooms
