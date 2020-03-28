import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

//Components
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

//Pages
import Home from '../../pages/Home';
import Impressum from '../../pages/Impressum';
import Datenschutz from '../../pages/Datenschutz';

//SCSS
import '../Layout/Layout.scss'

const Layout = () => {
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <div class="content-container">
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Impressum" component={Impressum} />
                    <Route exact path="/Datenschutz" component={Datenschutz} />
                </div> 
                <Footer/>
            </div>
        </Router>
    )
}

export default Layout
