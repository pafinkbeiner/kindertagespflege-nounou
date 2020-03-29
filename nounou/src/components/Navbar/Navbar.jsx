import React from 'react'
import { NavLink, Link } from 'react-router-dom';

//Ressources
import logo from '../Navbar/logo.png';

//SCSS
import '../Navbar/Navbar.scss';

const NavbarContent = [
    {
        name: "Home",
        path: "/Home"
    },
    {
        name: "Über mich",
        path: "/About"
    },
    {
        name: "Räumlichkeiten",
        path: "/Rooms"
    },
    {
        name: "Tagesablauf",
        path: "/Day"
    },
    {
        name: "Kontakt",
        path: "/Contact"
    }
]

const Navbar = () => {
    return (
        <nav className="nav-container">

            <Link className="logo-link" to="Home">
                <img className="logo" src={logo} alt="logo"/>
            </Link>

            {NavbarContent.map(item => {
                return <NavLink className="navbar-item" to={item.path}>{item.name}</NavLink>
            })}

        </nav>
    )
}

export default Navbar
