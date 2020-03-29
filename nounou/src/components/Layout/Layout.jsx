import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

//Components
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

//Pages
import Home from '../../pages/Home';
import Impressum from '../../pages/Impressum';
import Datenschutz from '../../pages/Datenschutz';
import About from '../../pages/About';
import Day from '../../pages/Day';
import Contact from '../../pages/Contact';
import Rooms from '../../pages/Rooms';
import Datenschutz_l from '../../pages/Datenschutz_l';
import Guestbook from '../../pages/Guestbook';
import Holidays from '../../pages/Holidays';

//SCSS
import '../Layout/Layout.scss'


const Layout = () => {
    return (
        <Router>
            <div className="layout">
                <Navbar/>
                    <Switch>
                        <div class="content-container">
                            <Route exact path="/" component={Main}/>
                            <Route path="/Home" component={Home} />
                            <Route path="/About" component={About} />
                            <Route path="/Day" component={Day} />
                            <Route path="/Contact" component={Contact} />
                            <Route path="/Rooms" component={Rooms} />
                            <Route path="/Guestbook" component={Guestbook} />
                            <Route path="/Holidays" component={Holidays} />
                            <Route path="/Impressum" component={Impressum} />
                            <Route path="/Datenschutz" component={Datenschutz} />
                            <Route path="/Datenschutz_l" component={Datenschutz_l} />
                        </div> 
                    </Switch>
                <Footer/>
            </div>
        </Router>
    )
}

export default Layout
