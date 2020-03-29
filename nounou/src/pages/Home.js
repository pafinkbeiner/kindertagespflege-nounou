import React, {useEffect} from 'react'
import {useStoreActions, useStoreState} from 'easy-peasy';

import './Page.scss';
import './Home.scss';

//Images
import rooms_01_large from '../pages/assets/rooms_01_large.JPG';
import rooms_02_large from '../pages/assets/rooms_02_large.JPG';
import rooms_03_large from '../pages/assets/rooms_03_large.JPG';


const Home = () => {

    const setPage = useStoreActions(actions => actions.setPage);
    const page = useStoreState(state => state.page);

    useEffect(() => {
        setPage("Home");
        document.title = page;
    }, [page])

    return (
        <div className="main-container">
            <div class="slider">
                <input type="radio" name="slide_switch" id="id1"  checked="checked"/>
                <label for="id1">
                    <img src={rooms_01_large} width="100"/>
                </label>
                <img src={rooms_01_large} width="100%"/>
                
                <input type="radio" name="slide_switch" id="id2"/>
                <label for="id2">
                    <img src={rooms_02_large} width="100"/>
                </label>
                <img src={rooms_02_large} width="100%"/>
                
                <input type="radio" name="slide_switch" id="id3"/>
                <label for="id3">
                    <img src={rooms_03_large} width="100"/>
                </label>
                <img src={rooms_03_large} width="100%"/>
                
            </div>
            <script src="http://thecodeplayer.com/uploads/js/prefixfree.js" type="text/javascript"></script>

        </div>
    )
}

export default Home
