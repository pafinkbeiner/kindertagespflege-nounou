import React, {useEffect} from 'react'
import {useStoreActions, useStoreState} from 'easy-peasy';

import './Page.scss';

const Rooms = () => {

    const setPage = useStoreActions(actions => actions.setPage);
    const page = useStoreState(state => state.page);

    useEffect(() => {
        setPage("Rooms");
        document.title = page;
    }, [page])

    return (
        <div className="main-container">
            Rooms
        </div>
    )
}

export default Rooms
