import React from 'react';
import './EnergyCard.css'
import EnergyCardItem from "./EnergyCardItem";
import transformEnergyData from "../../sevices/Helpers/formattingEnergyData";

/**
 *Composant représentant une carte énergétique affichant une liste de valeurs d'énergie
 * @param {Object} props - Les propriétés du composant
 * @param {Array} props.energyList - La liste des valeurs d'énergie à afficher
 * @returns {JSX.Element} - Le composant de la carte énergétique
 */
const EnergyCard = ({energyList}) => {
    const energyListFormat = transformEnergyData(energyList)
    return (
        <div className="energy-card">
            {energyListFormat.map(el => <EnergyCardItem key={el.title} {...el}/>)}
        </div>
    );
};

export default EnergyCard;
