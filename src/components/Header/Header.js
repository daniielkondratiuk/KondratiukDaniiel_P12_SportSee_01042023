import React from 'react';
import './Header.css'

/**
 * Composant Header affichant le nom de l'utilisateur et un message de félicitations pour avoir atteint ses objectifs la veille.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.name - Le nom de l'utilisateur.
 * @returns {JSX.Element} - Le composant Header.
 */
const Header = ({name}) => {
    return (
        <div className="header">
            <h1 className="header__title">Bonjour <span className="header__name">{name}</span></h1>
            <p className="header__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Header;
