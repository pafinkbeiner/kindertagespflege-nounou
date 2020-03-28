import React, {useEffect} from 'react'
import {useStoreActions, useStoreState} from 'easy-peasy';

import './Page.scss';

const Day = () => {

    const setPage = useStoreActions(actions => actions.setPage);
    const page = useStoreState(state => state.page);

    useEffect(() => {
        setPage("Day");
        document.title = page;
    }, [page])

    return (
        <div className="main-container">
            Day
        </div>
    )
}

export default Day
