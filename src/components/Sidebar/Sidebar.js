import React from 'react';
import './Sidebar.css'
import SideIcon1 from '../../img/Side1.svg'
import SideIcon2 from '../../img/Side2.svg'
import SideIcon3 from '../../img/Side3.svg'
import SideIcon4 from '../../img/Side4.svg'

/**
 * Composant qui affiche une barre latérale contenant des icônes et un texte.
 * @returns {JSX.Element} Barre latérale
 */
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-items">
                <div className="sidebar-item"><img src={SideIcon1} alt=""/></div>
                <div className="sidebar-item"><img src={SideIcon2} alt=""/></div>
                <div className="sidebar-item"><img src={SideIcon3} alt=""/></div>
                <div className="sidebar-item"><img src={SideIcon4} alt=""/></div>
            </div>
            <div className="sidebar-text">
                <div className="vertical-text">Copiryght, SportSee 2020</div>
            </div>
        </div>
    );
};

export default Sidebar;
