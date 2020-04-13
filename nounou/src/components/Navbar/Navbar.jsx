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
        name: "Urlaubsplan",
        path: "Holidays"
    }/*,
    {
        name: "Gästebuch",
        path: "Guestbook"
    }*/,
    {
        name: "Kontakt",
        path: "/Contact"
    }
]

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper white">
            <Link className="logo-link" to="Home">
                <img className="logo" src={logo} alt="logo"/>
            </Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {NavbarContent.map(item => {
                    return <li><NavLink className="black-text" to={item.path}>{item.name}</NavLink></li>
                })}
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
