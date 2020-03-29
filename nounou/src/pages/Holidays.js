import React, {useEffect} from 'react'
import {useStoreActions, useStoreState} from 'easy-peasy';

import './Page.scss';

const Holidays = () => {

    const setPage = useStoreActions(actions => actions.setPage);
    const page = useStoreState(state => state.page);

    useEffect(() => {
        setPage("Holidays");
        document.title = page;
    }, [page])

    return (
        <div className="main-container">

            <h3>Urlaub</h3>

            <br/>

            <h5>8.03.2019</h5>
            <h5>13.-18.04. 2019</h5>
            <h5>31.05.2019</h5>
            <h5>8.06.-21.06.2019</h5>
            <h5>2.-6.09.2019</h5>
            <h5>4.10.2019</h5>
            <h5>28.-31.10.2019</h5>
            <h5>23.12.-4.01.2020</h5>

        </div>
    )
}

export default Holidays
