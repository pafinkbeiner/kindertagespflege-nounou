import React, {useEffect} from 'react'
import {useStoreActions, useStoreState} from 'easy-peasy';

import './Page.scss';

const Contact = () => {

    const setPage = useStoreActions(actions => actions.setPage);
    const page = useStoreState(state => state.page);

    useEffect(() => {
        setPage("Contact");
        document.title = page;
    }, [page])

    return (
        <div className="main-container">
            Contact
        </div>
    )
}

export default Contact
