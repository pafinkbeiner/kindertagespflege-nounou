import React from 'react'
import { Link } from 'react-router-dom';

//Ressources
import logo from '../Navbar/logo.png';

//SCSS
import '../Navbar/Navbar.scss';

const Navbar = () => {
    return (
        <nav className="nav-container">

            <Link className="logo-link" to="Gemeinde">
                <img className="logo" src={logo} alt="logo"/>
            </Link>

                <Link className="navbar-item" to="Gemeinde">Home</Link>
                <Link className="navbar-item" to="Aktuell">Aktuell</Link>
                <Link className="navbar-item" to="Gemeindebrief">Gemeindebrief</Link>
                <Link className="navbar-item" to="GoodNews">Good News</Link>
                <Link className="navbar-item" to="Geschichte">Geschichte</Link>

        </nav>
    )
}

export default Navbar
