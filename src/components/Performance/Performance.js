import React, {useEffect, useState} from 'react';
import {Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";
import capitalizeFirstLetter from "../../sevices/Helpers/capitalizeFirstLetter";
import './Performance.css'

/**
 * Composant qui affiche un graphique radar de performance.
 * @param {Object} performance - Les données de performance à afficher.
 * @param {Array} performance.data - Les données des différents axes du graphique.
 * @param {string} performance.data.kind - Le type de l'axe.
 * @param {number} performance.data.value - La valeur de l'axe.
 * @param {Object} performance.kind - Les types d'axes possibles.
 * @returns {JSX.Element} Graphique radar de performance.
 */
const Performance = ({performance}) => {
    const [polarProps, setPolarProps] = useState({});

    useEffect(() => {
        const newPolarProps = window.innerWidth > 1024
            ? {
                outerRadius: 70,
                polarRadius: [10, 20, 40, 55],
                fontSize: '12px',
            }
            : {
                outerRadius: 50,
                polarRadius: [5, 10, 20, 35],
                fontSize: '10px',
            };
        setPolarProps(newPolarProps);
    }, []);
    const transformPerformance = performance.data.map(el => ({
        ...el,
        subject: capitalizeFirstLetter(performance.kind[el.kind])
    }))
    return (
        <div className="performance">
            <ResponsiveContainer width='100%' height='100%'>
                <RadarChart outerRadius={polarProps.outerRadius} width='100%' height='100%' data={transformPerformance}>
                    <PolarGrid polarRadius={polarProps.polarRadius} strokeLinecap={'butt'} radialLines={false}/>
                    <PolarAngleAxis dataKey="subject" stroke='#FFFFFF' tickLine={false}
                                    tick={{fontSize: polarProps.fontSize}}/>
                    <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.95} legendType='none'/>
                    <Legend/>
                </RadarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default Performance;
