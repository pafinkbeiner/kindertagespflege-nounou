import React, {useEffect} from 'react'
import {useStoreActions, useStoreState} from 'easy-peasy';

import './Page.scss';

const Home = () => {

    const setPage = useStoreActions(actions => actions.setPage);
    const page = useStoreState(state => state.page);

    useEffect(() => {
        setPage("Home");
        document.title = page;
    }, [page])

    return (
        <div className="main-container">
            Home
        </div>
    )
}

export default Home
