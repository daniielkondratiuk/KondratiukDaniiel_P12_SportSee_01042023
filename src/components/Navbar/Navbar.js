import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../img/Logo.svg'
import './Navbar.css'

/**
 * Composant Navbar qui affiche la barre de navigation
 * @returns {JSX.Element} Barre de navigation
 */
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={Logo} alt="Logo"/>
                </Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">Profil</Link>
                </li>
                <li>
                    <Link to="/services">Réglage</Link>
                </li>
                <li>
                    <Link to="/contact">Communauté</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
