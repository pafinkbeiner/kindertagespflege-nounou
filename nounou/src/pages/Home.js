import React from 'react'

import './Page.scss';
import './Home.scss';

class Home extends React.Component {

    sideNavContent = ["Home", "Fortbildungen", "Gruppen", "Betreuungsanspruch", "Räumlichkeiten", "Ausstattung"];

    state = {
        page: "Home"
    }

    componentDidMount(){
        document.title = "Home";
    }
    
    render(){
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col s9">

                        {
                            this.state.page === "Home" && (
                                <div>
                                    <h4>Herzlich Willkommen bei Kindertagespflege Nounou</h4>
                                    <p>
                                    Sie sind auf der Suche nach einer Einrichtung, die sich liebevoll um Ihr
            
                                    Kind kümmert, es individuell und vielseitig fördert? 
                                    
                                    <br/>

                                    Oder brauchen Sie eventuell eine Betreuung in den Ferien oder an Schließtagen der öffentlichen Einrichtung?
                                    
                                    <br/>

                                    Dann sind Sie bei uns genau richtig!
            
                                    <br/>
            
                                    Lernen Sie uns und unsere Kindertagespflegestelle hier näher kennen.
            
                                    Gerne stehen wir Ihnen für weitere Fragen zur Verfügung.
                                    </p>
                                    <br/><br/>
                                    <div className="row">
                                        <div className="col s6">
                                            Telefon
                                        </div>
                                        <div className="col s6">
                                            Öffnungszeiten
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        {
                            this.state.page === "Fortbildungen" && (
                                <div>
                                    <h4>Fortbildung, Qualitätssicherung und Vernetzung</h4>
                                    <br/>
                                    Es besteht eine enge Kooperation mit meiner zuständigen Fachberaterin des Tageselternvereins Freudenstadt . 
                                    Von dort aus werden alle notwendigen Fortbildungsmaßnahmen regelmäßig überprüft.  
                                    Die Pflegeerlaubnis wird alle 5 Jahre vom Jugendamt überprüft und erneuert.
                                    Fortbildungen der letzten Jahre -neben regelmäßigen Austausch-und Gesprächsgruppen-:
                                    <br/><br/>
                                    29.9.-8.12.2003 Grundqualifizierung Kurs 1
                                    <br/>11.5.2004 Rechtliche Informationen/ Jahresbericht
                                    <br/>13.7.2004 Körpersprache der Kinder
                                    <br/>14.9.2004 Film zum Thema „Körpersprache Kinder“
                                    <br/>3.05.2005 Bewusste Kinderernährung
                                    <br/>13.9.2005 Professionelles Auftreten als Tagesmutter
                                    <br/>7.02.2006 Informationen zur Pflegeerlaubnis
                                    <br/>4.04.2006 Rund ums Pausenbrot
                                    <br/>2.05.2006 Gesetzliche Änderungen
                                    <br/>13.6.2006 / 10.10.2006  Spielorte – Spielräume
                                    <br/>15.11.2006 Emotionelle Intelligenz
                                    <br/>6.03.2007 Gesetzliche Unfallversicherung
                                    <br/>8.05.2007 Kinder brauchen Beachtung
                                    <br/>12.6.2007 Geflimmer im Zimmer
                                    <br/>2.10.2007 Geschwisterrivalität, Geschwisterstreit
                                    <br/>16.7.2007 Grenzen setzen – aber wie?
                                    <br/>12.2.2008 Erstkontakt mit den Eltern
                                    <br/>1.04.2008 Bildungsort Tagespflege
                                    <br/>5.06.2008 Kreative Lösungsansätze in der Tagespflege
                                    <br/>7.10.2008 Kinder sind unschlagbar
                                    <br/>5.11.2008 Pubertät
                                    <br/>3.02.2009 Warum Kinder unverplante Zeit brauchen
                                    <br/>3.03.2009 Versicherungen und Steuern
                                    <br/>31.3.2009 Psychomotorik für Kinder
                                    <br/>5.05.2009 Auswirkungen von Trennungen und Scheidungen
                                    <br/>2.03.2010 ADHS
                                    <br/>2.06.2011 Wie spreche ich es an?
                                    <br/>15.2.2012 Trauerarbeit mit Kindern
                                    <br/>25.4.2012 Erste Hilfe am Kind
                                    <br/>19.9.2012 WGV/Haftpflicht
                                    <br/>15.1.2013 Geschwisterstreit
                                    <br/>23.1.2013 Rentenversicherung
                                    <br/>19.2.2013 Neuerungen in der KTP
                                    <br/>20.3.2013 Mit Liedern den Alltag gestalten
                                    <br/>8.05.2013 Schutzauftrag bei Kindeswohlgefährdung
                                    <br/>29.1.2014 Versicherungen
                                    <br/>10.4.2014 Ichlinge – Warum unsre Kinder keine Teamplayer sind
                                    <br/>28.4.2014 Spielbereiche
                                    <br/>6.05.2014 Supervision
                                    <br/>24.6.2014 Facebook,Whats App und co.
                                    <br/>8.07.2014 Medienwelt hautnah
                                    <br/>17.1.2015 Wenn es an die eigenen Grenzen geht...was dann?
                                    <br/>17.12.2015 Seminar „Zusammenarbeit mit Eltern“
                                    <br/>26.1.2016 Trost und Trauer im Todesfall
                                    <br/>24.2.2016 Selbstwertgefühl und Selbstvertrauen stärken
                                    <br/>17.2.2016 Schutzauftrag bei Kindeswohlgefährdung
                                    <br/>9.2./12.9.2016 Supervision
                                    <br/>11.3.2017 Tagesseminar Erste Hilfe am Kind
                                    <br/>22.4.2017 Besonderheiten der Qualität in der KTP
                                    <br/>25.4.2017 Grenzen setzen in der praktischen Arbeit
                                    <br/>14.3.2018 Jungen brauchen klare Aussagen
                                    <br/>20.10.2018 Leben mit FASD
                                    <br/>12.3.2019 Kleinkinder und Bildschirmmedien
                                    <br/>28.6.2019 Entwicklung von 0-3 Jahren
                                    <br/>15.1./9.4.2019 Praxisreflektion
                                    <br/>25.5.2019 Hausaufgabenbetreuung
                                    <br/>10.11.2019 Erste-Hilfe am Kind/ Nagold
                                    <br/>6.8.2019 Kompaktseminar Säuglingsbetreuung
                                    <br/>30.7.2019 Kompaktseminar Sauberkeitsentwicklung
                                    <br/>16.7.2019 Abschluß Fernstudium „Fachkraft für Kleinkindpädagogik“
                                    <br/>10.12.2019 Abschluß Fernstudium „Ernährungsbotschafter in der Kita“
                                    <br/>13./20.1.2020 Kinder psychisch kranker Eltern
                                    <br/>17.3.2020 Praxisreflektion
                                    <br/>26.3.2020 Umgang mit Milchprodukten und Laktoseunverträglichkeit
                                    <br/>30.3.2020 Die „Kinderstube der Demokratie“ - das Partizipationskonzept im Betreuungsalltag

                                </div>
                            )
                        }

                        {
                            this.state.page === "Gruppen" && (
                                <div>
                                    Ich bin Mitglied im/in der
                                    - Tageselternverein Landkreis Freudenstadt e.V.
                                    - Vorstand des Tageselternvereins und Schriftführerin
                                    –	Tagespflege-online.de
                                    –	Gruppe „Basteln in der Kindertagespflege“
                                    –	Gruppe „Tagesmutter - Beruf und Berufung“
                                    –	Gruppe „Kindertagespflege rechtlich unterwegs“
                                    –	Gruppe „Projekte in der Kindertagespflege“
                                    –	Gruppe  „Tagesmütter und Tagesväter“
                                    –	Gruppe „Ideen für Erzieher und Kinderpfleger“

                                </div>
                            )
                        }
    
                        {
                            this.state.page === "Betreuungsanspruch" && (
                                <div>
                                    <h5>Betreuungsanspruch und Finanzierung</h5>
                                    Das Jugendamt oder ein vom Jugendamt beauftragter Fachdienst vermittelt die Kindertagespflege. 
                                    Wie in der Kindertagesstätte beteiligen sich die Eltern und zahlen entweder an das Jugendamt oder an die Tagespflegeperson.
                                    Seit dem 1. August 2013 besteht für alle Kinder ab einem Jahr ein Rechtsanspruch auf einen Kinderbetreuungsplatz in einer 
                                    Kindertageseinrichtung oder in Kindertagespflege. Der Rechtsanspruch kann eingeklagt werden.
                                </div>
                            )
                        }
 
                        {
                            this.state.page === "Räumlichkeiten" && (
                                <div>
                                    <h5>Die Räumlichkeiten</h5>

                                    Wir wohnen in einer 85m² großen Wohnung mit Balkon. 
                                    In der Wohnung unter uns leben unsere drei ältesten Kinder mit einer großen Terrasse, 
                                    die auch zu unserer Verfügung steht und Platz bietet für Fahrten mit Bobby Car und Roller.
                                    Wir wohnen im Zentrum der Stadt und sind in 2 Minuten auf dem Marktplatz mit seinem großen Spielplatz und den Fontainen, 
                                    die besonders in den heißen Sommermonaten die Kinder lockt.
                                    Meist führt unser Weg aber Richtung Kienberg und Teuchelwald, den wir in ca. 10 Minuten erreichen.Unser Garten befindet sich am Stadtrand. 
                                    Bis dahin laufen wir ca. 20 Minuten und haben dort einen abgegrenzten Bereich zum Spielen, einen Sandkasten und drumherum viele Pferde.

                                </div>
                            )
                        }

                        {
                            this.state.page === "Ausstattung" && (
                                <div>hallo dies ist eine Test1</div>
                            )
                        }

                        {
                            this.state.page === "Test1" && (
                                <div>hallo dies ist eine Test1</div>
                            )
                        }

                    </div>

                    <div className="col s3">
                        <ul className="custom-sidenav">
                            {this.sideNavContent.map((item)=>{
                                if(this.state.page === item){
                                    return <li className="active" onClick={(e) => {this.setState({page : e.target.innerHTML});}}>{item}</li>
                                }else{
                                    return <li className="" onClick={(e) => {this.setState({page : e.target.innerHTML});}}>{item}</li>
                                }
                            })}
                        </ul>
                        
                    </div>
                </div>
                
            </div>
        )
    }


}

export default Home
