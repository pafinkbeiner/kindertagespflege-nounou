import React, {useEffect} from 'react'
import {useStoreActions, useStoreState} from 'easy-peasy';

import './Page.scss';

// Images
import profilbild from '../pages/assets/person.JPG'

const About = () => {

    const setPage = useStoreActions(actions => actions.setPage);
    const page = useStoreState(state => state.page);

    useEffect(() => {
        setPage("About");
        document.title = page;
    }, [page])

    const image = {
        marginLeft: "5em",
        marginTop: "7em"
    }

    return (
        <div className="main-container">
            <div className="row hide-on-med-and-down" >
                <div class="col s8">
                    <h4>Über mich</h4>
                        <br/>
                        Im Jahre 1972 geboren und in Thüringen aufgewachsen, kam ich nach der Arbeit als Krankenschwester in verschiedenen Kliniken 1996 nach Freudenstadt. 
                        <br/>
                        Dort heiratete ich 1997 und dann wurden unsere Kinder 1997,1999 und 2000 geboren.
                        <br/>
                        Bereits 2002 wurde ich durch Freude gebeten, mal auf den Sohn aufzupassen. 
                        <br/>
                        Ihnen ging es damals wie uns, dass keine Familie, die mal eben einspringen konnte, zur Verfügung stand. 
                        <br/>
                        Da kam mir der Gedanke, dass es in so einer Stadt sicherlich noch mehr Familien gab, denen es so ging und ich fragte mal beim Jugendamt an. 
                        <br/>
                        Dort verwies man mich an den gerade nach Freudenstadt gekommenen Tageselternverein und im Dezember 2003 hielt ich das erste Tageskind mit 4 Monaten auf dem Arm.
                        <br/>
                        Der Junge wuchs mit Französisch, Chinesisch, Englisch und Deutsch auf und so kamen die Eltern und ich schnell auf den „Arbeitsnamen NOUNOU“– dessen Bedeutung nichts anderes als eine englische Nanny – oder eine deutsche Tagesmutter ist.
                        <br/>
                        Für meine – doch noch kleinen – Kinder war dies auch die beste Lösung.
                        <br/>
                        Aus der Tagespflege heraus kam der Bedarf 2008 für ein Kind in Vollzeitpflege zu wechseln und so wurden mein Mann und ich Pflegeeltern. 
                        <br/>
                        Im Jahr darauf kam ein weiteres Kind hinzu und unsere Familie wuchs.
                        <br/>
                        Für mich ist die Tätigkeit als Tagespflegeperson mit meinem Verständnis von Familie perfekt vereinbar. 
                        <br/>
                        Besonders wertvoll ist die Eigenständigkeit und die Eigenverantwortung, mit der ich mir meinen Tag/Woche/Monate einteilen und einrichten kann. 
                        <br/>
                        Auch zu sehen, dass es mal weniger sein kann, ist von großem Vorteil und kommt allen zu Gute.
                        <br/>
                        Nur so kann die Freude und das Engagement in dieser Berufung täglich voll da sein.

                </div>
                <div className="col s4">

                    <img alt="img" style={image} width="300rem" src={profilbild}/>

                </div>
            </div>
            <div className="row hide-on-large-only show-on-medium">
                <div class="col s12">
                
                        <h4>Über mich</h4>
                            <br/>
                            Im Jahre 1972 geboren und in Thüringen aufgewachsen, kam ich nach der Arbeit als Krankenschwester in verschiedenen Kliniken 1996 nach Freudenstadt. 
                            <br/>
                            Dort heiratete ich 1997 und dann wurden unsere Kinder 1997,1999 und 2000 geboren.
                            <br/>
                            Bereits 2002 wurde ich durch Freude gebeten, mal auf den Sohn aufzupassen. 
                            <br/>
                            Ihnen ging es damals wie uns, dass keine Familie, die mal eben einspringen konnte, zur Verfügung stand. 
                            <br/>
                            Da kam mir der Gedanke, dass es in so einer Stadt sicherlich noch mehr Familien gab, denen es so ging und ich fragte mal beim Jugendamt an. 
                            <br/>
                            Dort verwies man mich an den gerade nach Freudenstadt gekommenen Tageselternverein und im Dezember 2003 hielt ich das erste Tageskind mit 4 Monaten auf dem Arm.
                            <br/>
                            Der Junge wuchs mit Französisch, Chinesisch, Englisch und Deutsch auf und so kamen die Eltern und ich schnell auf den „Arbeitsnamen NOUNOU“– dessen Bedeutung nichts anderes als eine englische Nanny – oder eine deutsche Tagesmutter ist.
                            <br/>
                            Für meine – doch noch kleinen – Kinder war dies auch die beste Lösung.
                            <br/>
                            Aus der Tagespflege heraus kam der Bedarf 2008 für ein Kind in Vollzeitpflege zu wechseln und so wurden mein Mann und ich Pflegeeltern. 
                            <br/>
                            Im Jahr darauf kam ein weiteres Kind hinzu und unsere Familie wuchs.
                            <br/>
                            Für mich ist die Tätigkeit als Tagespflegeperson mit meinem Verständnis von Familie perfekt vereinbar. 
                            <br/>
                            Besonders wertvoll ist die Eigenständigkeit und die Eigenverantwortung, mit der ich mir meinen Tag/Woche/Monate einteilen und einrichten kann. 
                            <br/>
                            Auch zu sehen, dass es mal weniger sein kann, ist von großem Vorteil und kommt allen zu Gute.
                            <br/>
                            Nur so kann die Freude und das Engagement in dieser Berufung täglich voll da sein.

                    </div>
                    <div className="col s12">
                        <div >
                            <img className="center-align" width="300rem" src={profilbild}/>
                        </div>


                    </div>
            </div>
        </div>
    )
}

export default About
