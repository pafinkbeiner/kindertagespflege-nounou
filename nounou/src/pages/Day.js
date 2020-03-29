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

        <h3>Tagesablauf</h3>

        <br/>

        <table>
            <thead>
            <tr>
                <th>Uhrzeit</th>
                <th>Tätigkeit</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>7-9 Uhr</td>
                <td>Bringzeit / Freispiel /Wickeln und Töpfchen</td>
            </tr>
            <tr>
                <td>9-10/ 10:30 Uhr</td>
                <td>Spaziergang; Spielplatz bei schlechtem Wetter Basteln, Singen, Turnen, angeleitete Spielangebote</td>
            </tr>
            <tr>
                <td>10:30 Uhr</td>
                <td>Aufräumen, Händewaschen und gemeinsames Vesper</td>
            </tr>
            <tr>
                <td>11 -13 Uhr</td>
                <td>Schlafenszeit /Essenkochen und Hausaufgabenbetreuung für die Großen</td>
            </tr>
            <tr>
                <td>13 -14 Uhr</td>
                <td>Wickeln, Töpfchen und Mittagessen</td>
            </tr>
            <tr>
                <td>14 - 15 Uhr</td>
                <td>Abholzeit</td>
            </tr>
            <tr>
                <td>ab   15 Uhr</td>
                <td>Freispiel bis zum Abholen</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Day
