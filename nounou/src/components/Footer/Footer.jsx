import React from 'react'
import {Link} from 'react-router-dom';

//SCSS
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-title">
				    © Kindertagespflege Nounou 2020
			    </div>
                <br/>
                <div className="footer-info">
                    <Link to="Impressum">
                        Impressum
                    </Link>
                    <Link to="Datenschutz">
                        Datenschutz
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
