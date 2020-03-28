import React, {useEffect} from 'react'
import {useStoreActions, useStoreState} from 'easy-peasy';

import './Page.scss';

const About = () => {

    const setPage = useStoreActions(actions => actions.setPage);
    const page = useStoreState(state => state.page);

    useEffect(() => {
        setPage("About");
        document.title = page;
    }, [page])

    return (
        <div className="main-container">
            About
        </div>
    )
}

export default About
