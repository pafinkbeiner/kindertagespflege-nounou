import React from 'react'

import './Page.scss';
import './Home.scss';

class Home extends React.Component {

    sideNavContent = [
        "Home", 
        "Fortbildungen", 
        "Gruppen", 
        "Betreuungsanspruch", 
        "Räumlichkeiten", 
        "Ausstattung", 
        "Tagesablauf", 
        "Beobachten", 
        "Regeln", 
        "Eingewöhnung und Abschied", 
        "Medikamenteneinnahme", 
        "Zusammenarbeit mit den Eltern",
        "Urlaub / Krankheitsfall",
        "Allgemeines"
    ];

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
                                    Sie sind auf der Suche nach einer Tagesmutter, die sich liebevoll um Ihr
            
                                    Kind kümmert, es individuell und vielseitig fördert? 
                                    
                                    <br/>

                                    Dann sind Sie bei uns genau richtig!
            
                                    <br/>
            
                                    Lernen Sie uns und unsere Kindertagespflegestelle hier näher kennen.
            
                                    Gerne stehen wir Ihnen für weitere Fragen zur Verfügung.
                                    </p>
                                    <br/><br/>
                                    <div className="row">
                                        <div className="col s6">
                                            Telefonnummer
                                            <br/>
                                        <table>

                                                <tbody>
                                                <tr>
                                                    <td>07441 / 951828</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col s6">
                                            Öffnungszeiten
                                            <table>
                                                <thead>
                                                <tr>
                                                    <th>Tag</th>
                                                    <th>Zeit</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                <tr>
                                                    <td>Montag</td>
                                                    <td>6 - 18 Uhr</td>
                                                </tr>
                                                <tr>
                                                    <td>Dienstag</td>
                                                    <td>6 - 18 Uhr</td>
                                                </tr>
                                                <tr>
                                                    <td>Mittwoch</td>
                                                    <td>6 - 18 Uhr</td>
                                                </tr>
                                                <tr>
                                                    <td>Donnerstag</td>
                                                    <td>6 - 18 Uhr</td>
                                                </tr>
                                                <tr>
                                                    <td>Freitag</td>
                                                    <td>6 - 18 Uhr</td>
                                                </tr>
                                                </tbody>
                                            </table>
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
                                    <div className="row">
                                        <div className="col s4">
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

                                        </div>
                                        <div className="col s4">
                                            5.05.2009 Auswirkungen von Trennungen und Scheidungen
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

                                        </div>
                                        <div className="col s4">
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
                                    </div>
                                                                    
                                </div>
                            )
                        }

                        {
                            this.state.page === "Gruppen" && (
                                <div>
                                    <h5>Gruppen</h5>
                                    Ich bin Mitglied im/in der
                                    <br/>- Tageselternverein Landkreis Freudenstadt e.V.
                                    <br/>- Vorstand des Tageselternvereins und Schriftführerin
                                    <br/>–	Tagespflege-online.de
                                    <br/>–	Gruppe „Basteln in der Kindertagespflege“
                                    <br/>–	Gruppe „Tagesmutter - Beruf und Berufung“
                                    <br/>–	Gruppe „Kindertagespflege rechtlich unterwegs“
                                    <br/>–	Gruppe „Projekte in der Kindertagespflege“
                                    <br/>–	Gruppe  „Tagesmütter und Tagesväter“
                                    <br/>–	Gruppe „Ideen für Erzieher und Kinderpfleger“

                                </div>
                            )
                        }
    
                        {
                            this.state.page === "Betreuungsanspruch" && (
                                <div>
                                    <h5>Betreuungsanspruch und Finanzierung</h5>
                                    Das Jugendamt oder ein vom Jugendamt beauftragter Fachdienst vermittelt die Kindertagespflege. 
                                    <br/>Wie in der Kindertagesstätte beteiligen sich die Eltern und zahlen entweder an das Jugendamt oder an die Tagespflegeperson.
                                    <br/>Seit dem 1. August 2013 besteht für alle Kinder ab einem Jahr ein Rechtsanspruch auf einen Kinderbetreuungsplatz in einer 
                                    <br/>Kindertageseinrichtung oder in Kindertagespflege. Der Rechtsanspruch kann eingeklagt werden.
                                    <br/><br/><br/><br/><br/>
                                    <img src="https://tev-fds.de/templates/yoo_master2/styles/tev/images/banner.jpg" alt="logo tageselternverein"/>
                                </div>
                            )
                        }
 
                        {
                            this.state.page === "Räumlichkeiten" && (
                                <div>
                                    <h5>Die Räumlichkeiten</h5>

                                    Wir wohnen in einer 85m² großen Wohnung mit Balkon. 
                                    <br/>In der Wohnung unter uns leben unsere drei ältesten Kinder mit einer großen Terrasse, 
                                    <br/>die auch zu unserer Verfügung steht und Platz bietet für Fahrten mit Bobby Car und Roller.
                                    <br/>Wir wohnen im Zentrum der Stadt und sind in 2 Minuten auf dem Marktplatz mit seinem großen Spielplatz und den Fontainen, 
                                    <br/>die besonders in den heißen Sommermonaten die Kinder lockt.
                                    <br/>Meist führt unser Weg aber Richtung Kienberg und Teuchelwald, den wir in ca. 10 Minuten erreichen.Unser Garten befindet sich am Stadtrand. 
                                    <br/>Bis dahin laufen wir ca. 20 Minuten und haben dort einen abgegrenzten Bereich zum Spielen, einen Sandkasten und drumherum viele Pferde.

                                </div>
                            )
                        }

                        {
                            this.state.page === "Ausstattung" && (
                                <div>
                                    <h5>Ausstattung</h5>

                                    Zunächst mal zu unserem Fuhrpark. Es stehen verschiedenste Kinderwägen zur Verfügung.
                                    <br/>Buggy: wenn mal nur noch ein Kind da ist, dass noch nicht so gut zu Fuß unterwegs ist.
<br/>
                                    <br/>Baby-/Kinderwagen: Babywanne dient uns oft als Kuschelnest für die Kleinsten innerhalb der Wohnung. 
                                    <br/>Ansonsten ist der Wagen mit Schwenkrädern sehr gut fahrbar -auch einhändig-, so dass immer auch ein Kind an meiner Hand laufen kann. 
                                    <br/>Die anderen Kinder haben ca. 40 cm lange Gummischlaufen, an denen sie sich am Wagen festhalten
<br/>
                                    <br/>Zwillingswagen: je nach Bedarf nehmen wir auch diesen Wagen, 
                                    <br/>wenn noch nicht alle Kinder sicher laufen können oder wir einen längeren Ausflug vorhaben, damit ein Notsitz vorhanden ist. 
                                    <br/>Auch dieser Wagen hat die Gummibänder zum Festhalten.
<br/>
                                    <br/>Vierlingswagen: Dieser kommt nur selten zum Einsatz. Mir ist es wichtig, dass sich die Kinder bewegen und nicht nur chauffiert werden. 
                                    <br/>Deshalb wartet er meist in der Garage...
<br/>
                                    <br/>Auto/Bus: Wir haben einen großen Familienbus mit 8 Sitzen, der für Ausflüge, Einkäufe oder Hol- und Bringefahrten der Kinder zur Verfügung steht. 
                                    <br/>Solche Fahrten sind aber begrenzt, da wir uns lieber selbst an der frischen Luft bewegen
<br/>
                                    <br/>Ansonsten bietet die Wohnung -fast- alles, was man für die Kinderbetreuung benötigt. 
                                    <br/>So sind ausreichend Sitzgelegenheiten, Spielsachen, Bilderbücher, Bettchen, Töpfchen und Geschirr vorhanden.

                                </div>
                            )
                        }

                        {
                            this.state.page === "Tagesablauf" && (
                                <div>
                                    <h5>Die Wichtigkeit eines strukturierten Tagesablaufs</h5>

                                    Für die Entwicklung des Kindes sind wiederkehrende Muster und strukturierte Tagesabläufe wichtig. 
                                    <br/>Neben flexiblen Zeiten für freies Spielen und Toben nimmt das gemeinsame Essen in der Gruppe eine wesentliche Funktion ein. 
                                    <br/>Wichtige Rituale wie Händewaschen, Sitzkreis und Mittagsschlaf haben dabei ihren festen Platz und bilden wiederkehrende Muster 
                                    <br/>in der ansonsten vielseitig gestalteten Tagesplanung.
                                    <br/>Die aktive Einbindung des Kindes in die Tagesgestaltung sorgt dafür, 
                                    <br/>dass Ausflüge in die Natur oder ähnliches in der Gruppe für große Vorfreude sorgen. 
                                    <br/>Dabei fließen die Jahreszeiten und die verschiedenen Witterungen selbstverständlich in die Planungen ein. 
                                    <br/>Denn durch sie ergeben sich immer neue Entdeckungs- und Lernschwerpunkte, was dem Kind vielfältige Eindrücke und Erfahrungen bietet.

                                </div>
                            )
                        }

                        {
                            this.state.page === "Beobachten" && (
                                <div>
                                    <h5>Beobachten und Dokumentieren</h5>
                                    Beobachtungen sind ein wichtiger Bestandteil meiner Arbeit, da ich einen gesellschaftlichen und pädagogischen Auftrag erfülle.
                                    <br/>Der individuelle Entwicklungsweg mit allen Fähigkeiten, Besonderheiten und Meilensteinen bespreche ich mit den Eltern. 
                                    <br/>Da ich in der Tagespflege alleine arbeite und nicht durch ständige Dokumentationen von den Kindern abgelenkt sein möchte, 
                                    <br/>beschränke ich mich auf das Fotografieren. 
                                    <br/>Diese Bilder übermittle ich dann recht zeitnah, damit die Eltern immer auf dem neuesten Stand sind. 
                                    <br/>Das schafft Vertrauen, macht meine Arbeit in der Kindertagespflege transparent und dient als wundervolle Erinnerung für die Familien.

                                </div>
                            )
                        }

                        {
                            this.state.page === "Regeln" && (
                                <div>
                                    <h5>Regeln und Rituale</h5>
                                    Regeln und Rituale sind wichtige Orientierungspunkte für Kinder.
                                    <br/>Damit Regeln Sinn haben, Sicherheit und Orientierung geben, kommuniziere ich die Regeln mit den Kindern. 
                                    <br/>Viele Regeln entwickeln und verändern sich und werden wieder gemeinsam mit den Kindern erarbeitet.
                                    <br/>*Wir ziehen die Schuhe aus, wenn wir die Wohnung betreten
                                    <br/>*Wir räumen gemeinsam auf
                                    <br/>*Wir werfen nicht mit Spielzeug
                                    <br/>*Wir hüpfen nicht auf dem Sofa
                                    <br/>*Wir nehmen Rücksicht auf die anderen Kinder
                                    <br/>
                                    <br/>Kleine Tischregeln:
                                    <br/>*wir essen gemeinsam
                                    <br/>*mit Essen wird nicht gespielt
                                    <br/>*gegessen wird nur am Tisch
                                    <br/>*Getränke bleiben im Esszimmer
                                    <br/>Und für die Eltern: Wir bringen die Kinder morgens nicht mit Essen in der Hand.
                                    <br/>
                                    <br/>Rituale gehören zum Alltag, denn durch Wiederholung erhalten die Kinder Sicherheit und Vertrauen.
                                    <br/>–	gemeinsames Essen/ Tischsprüche
                                    <br/>–	geregelte Ruhephasen
                                    <br/>–	Sitzkreis mit Fingerspielen
                                    <br/>–	das pünktliche Bringen und Abholen der Kinder

                                </div>
                            )
                        }

                        {
                            this.state.page === "Eingewöhnung und Abschied" && (
                                <div>
                                    <h5>Eingewöhnung und Abschied</h5>

                                    Eine gute Bindung ist in der Kindertagespflege ein sehr wichtiges Element. 
                                    <br/>Kinder können sich in einer engen Beziehung zu ihren Eltern geschützt entwickeln. Diese Bindung kann das Kind auch zu einer Tagesmutter aufbauen. 
                                    <br/>Die Bindung zu meinen Tageskindern ist mir sehr wichtig. 
                                    <br/>Ich gewöhne nach dem Berliner Eingewöhnungsmodell ein, welches für das Kind eine sanfte und geduldige Methode ist. 
                                    <br/>Eine gute und sanfte Eingewöhnung braucht Zeit, bitte planen Sie dies auch ein. Ich gehe auf jedes Kind individuell ein. 
                                    <br/>Die Zeit der Eingewöhnung kann stark variieren und liegt zwischen 2 und 4 Wochen. 
                                    <br/>Bitte geben Sie Ihrem Kind genug Zeit, Vertrauen zu mir zu fassen und sich wohl zu fühlen. 
                                    <br/>Sie verläuft in mehreren Phasen und ist abgeschlossen, wenn sich das Kind von mir trösten lässt und Bindungsverhalten zeigt.
                                    <br/>Zum Wohle des Kindes richtet sich die Eingewöhnungsphase primär nach den Bedürfnissen des Kindes und nicht der Eltern.
                                    <br/>Sie besuchen zusammen mit ihrem Kind die Tagesmutter möglichst mehrmals in der Woche für ca. 1 Stunde zum Spielen. 
                                    <br/>Anfangs spielen Sie mit. Später halten Sie sich in Sichtweise auf. Gegen Ende der Eingewöhnung verlassen Sie uns für kurze Zeit. 
                                    <br/>Die Abwesenheiten werden verlängert. Sie sollten aber im Notfall erreichbar sein.

                                    Unterstützen können die Eltern die Eingewöhnungszeit, wenn sie folgendes beachten:
                                    - Die Eltern suchen sich ein "gemütliches Eckchen" im Raum und verhalten sich grundsätzlich passiv.
                                    <br/>- Sie reagieren auf Annäherung und Blickkontakte ihres Kindes positiv - nehmen jedoch von sich aus keinen Kontakt zu ihrem Kind auf.
                                    <br/>- Sie drängen ihr Kind nicht, sich von ihnen zu entfernen oder Bestimmtes zu machen.
                                    <br/>- Sie geben ihrem Kind einen vertrauten Gegenstand mit -Schnuller, Teddy,Schmusedecke, die gewohnte Nuckelflasche,...-.
                                    <br/>Die Eltern sollten sich nicht mit anderen Dingen oder Kindern beschäftigen. 
                                    <br/>Sie sind während der Eingewöhnung ausschließlich der sichere Hafen für ihr Kind.


                                    Auch der Abschied aus meiner Kindertagespflegestelle ist für das Kind ein ähnlich einschneidendes Ereignis 
                                    wie die Eingewöhnung und wird von mir rechtzeitig vorher immer wiederkehrend thematisiert, 
                                    damit sich sowohl das Kind als auch die Gruppe darauf vorbereiten können. 
                                    Auch die Eltern sollten das Thema Abschied zeitgleich zu Hause besprechen und planen.
                                    Am letzten Betreuungstag feiere ich mit den Kindern zusammen ein kleines Abschiedsfest.

                                </div>
                            )
                        }

                        {
                            this.state.page === "Medikamenteneinnahme" && (
                                <div>
                                    <h5>Medikamentengabe</h5>
                                    Grundsätzlich gebe ich den Kindern keine Medikamente.
                                    <br/>Sollte ein Kind nach einer Krankheit für einen begrenzten Zeitraum medizinisch unvermeidbare Medikamente einnehmen müssen, so benötige ich zwingend eine schriftliche Bescheinigung der Erziehungsberechtigten.
                                    <br/>Bei chronischen und allergischen Erkrankungen sowie bei Fieberkrämpfen ist für eine Medikamentengabe durch mich eine schriftliche Bescheinigung des Kinderarztes unerlässlich.
                                    <br/>Ich richte mich bei Krankheiten nach den allgemeinen Wiederzulassungsrichtlinien und betreue Kinder erst wieder, wenn sie ohne Medikamente 24 Stunden fieberfrei sind und 48 Stunden ohne Durchfall und Erbrechen.

                                </div>
                            )
                        }

                        {
                            this.state.page === "Zusammenarbeit mit den Eltern" && (
                                <div>
                                    <h5>Zusammenarbeit mit den Eltern</h5>

                                    Ohne Eltern geht es nicht. Die Zusammenarbeit mit den Eltern hat für mich einen hohen Stellenwert. 
                                    <br/>Eltern sind für mich direkter Ansprechpartner wenn es darum geht, optimale Entwicklungsbedingungen für ihr Kind zu schaffen, in deren Mittelpunkt die Förderung der kindlichen Entwicklung und die Sicherstellung des Wohls des Kindes stehen. 
                                    <br/>Für das Gelingen einer guten Zusammenarbeit sind Offenheit, Vertrauen und das Einhalten von verbindlichen Absprachen unerlässlich.
                                    <br/>Ich biete jederzeit Elterngespräche an. Durch das Gespräch mit den Eltern kann sich das kindliche Verhalten für mich verdeutlichen und umgekehrt ermöglicht es auch den Eltern einen anderen Blick auf ihr Kind.
                                    <br/>Kurze Infos über den Alltagsablauf erfolgen regelmäßig durch Tür-und-Angel-Gespräche. 
                                    <br/>Mir ist wichtig von bedeutsamen Ereignissen im Elternhaus zu erfahren. So kann ich das Kind besser einschätzen und auf die Bedürfnisse eingehen (z.B. ein erlebnisreiches Wochenende, ein Sturz, eine Erkrankung, Trennung).
                                    <br/>Scheuen Sie sich auch nicht, Bedenken oder Kritik zu äußern, denn nur so können wir Konflikten oder Missverständnissen aus dem Wege gehen.

                                </div>
                            )
                        }

                        {
                            this.state.page === "Urlaub / Krankheitsfall" && (
                                <div>
                                    <h5>Urlaub / Krankheitsfall</h5>

                                    Von Seiten des Tageselternvereins wird empfohlen, dass die Tagesmutter mindestens 30 Tage Urlaub im Jahr nimmt. 
                                    <br/>Die genauen Urlaubstermine werden von mir bis Oktober/November für das Folgejahr bekannt gegeben. 
                                    <br/>Die Eltern werden ebenfalls gebeten, ihren Urlaub rechtzeitig anzukündigen und nach Möglichkeit abzustimmen, 
                                    <br/>damit keine Fremdbetreuung für das Kind nötig wird. Sollte es trotzdem unvermeidbar und absehbar sein, 
                                    <br/>müssen die Eltern sich selbst um eine Kontaktaufnahme und  Eingewöhnung kümmern.Es findet zwischen Weihnachten und Neujahr keine Betreuung statt.
                                    <br/>Im Krankheitsfall meinerseits arbeite ich eng mit einer ortsansässigen Tagesmutter zusammen. 
                                    <br/>Den Eltern wird im Betreuungsvertrag Name und Adresse mitgeteilt. Bei regelmäßigen Treffen haben die Kinder immer wieder zu ihr Kontakt, 
                                    <br/>so dass sie im Ernstfall keine Fremde ist.
                                    <br/>Sollte bei der Ersatztagesmutter kein Platz frei sein, bitte ich die Eltern, sich eigenständig an den Tageselternverein zu wenden.

                                </div>
                            )
                        }

                        {
                            this.state.page === "Allgemeines" && (
                                <div>
                                    <h5>Allgemeines</h5>
                                    <br/>–	der Antrag zur Stundenbuchung muss jedes Jahr neu gestellt werden
                                    <br/>–	daran versuche ich rechtzeitig zu erinnern
                                    <br/>–	Windeln und Feuchttücher werden mitgebracht und benutzte Windeln gebe ich auch wieder mit nach Hause
                                    <br/>–	im Treppenhaus steht unser Schnullerbaum → wenn das Kind mag, darf es sich verabschieden und  seinen allerletzten Schnuller an einen Apfel hängen
                                    <br/>–	nach Möglichkeit haben die Kinder ihre Schnuller nur zum Schlafen und nicht im Dauergebrauch
                                    <br/>–	spätestens zum 2. Geburtstag fangen wir mit dem Thema Töpfchen an
                                    <br/>–	hierbei erfordert es unbedingt die Zusammenarbeit mit den Eltern, ansonsten macht es keinen Sinn
                                    <br/>–	Spielsachen und Bücher dürfen ab und an mitgebracht werden, aber es wird keine Garantie gegeben...(bitte hierbei keine gefährlichen Kleinteile)
                                    <br/>–	wettergerechte Kleidung und stabile Schuhe mitgeben, da wir gerne draußen sind/ auch auf Waldwegen
                                    <br/>–	Kinderwagen kann bei Bedarf im Hausflur abgestellt werden
                                    <br/>–	Terminabsprachen/Abmeldungen unbedingt rechtzeitig !

                                </div>
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
