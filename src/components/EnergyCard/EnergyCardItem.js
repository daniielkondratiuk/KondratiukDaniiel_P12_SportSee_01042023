import React from 'react';
import './EnergyCardItem.css'
import getImage from "../../sevices/Helpers/getImage";

/**
 * Composant représentant un élément de la carte d'énergie.
 * @param {string} title - Titre de l'élément.
 * @param {string} unit - Unité de mesure de l'élément.
 * @param {number} count - Valeur numérique de l'élément.
 * @returns {JSX.Element} - Élément de la carte d'énergie.
 */
const EnergyCardItem = ({title,unit,count}) => {
    return (
        <div className="energy-card-item">
            <img className="energy-card-item__icon" src={getImage(title)} alt={title}/>
            <div>
                <h3 className="energy-card-item__value">{count+unit}</h3>
                <p className="energy-card-item__title">{title}</p>
            </div>
        </div>
    );
};

export default EnergyCardItem;
