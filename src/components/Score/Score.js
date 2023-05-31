import React from 'react';
import {RadialBar, RadialBarChart, Legend, ResponsiveContainer} from 'recharts'
import {CustomLegendScore} from "../CustomElements/CustomElements";

import './Score.css'

/**
 * Composant qui affiche un score en forme de diagramme circulaire.
 * @param {object} props - Les propriétés passées au composant.
 * @param {number} props.progress - La valeur de progression du score, une valeur entre 0 et 1.
 * @returns {JSX.Element} Le diagramme circulaire représentant le score.
 */

const Score = ({progress}) => {
    // On multiplie la valeur de progression par 100 pour l'exprimer en pourcentage.
    progress = progress * 100
    // On calcule l'angle final du diagramme circulaire à partir de la progression. 360deg = 100% et = 3.6 = 1%
    const endAngle = 90 + 3.6 * progress
    return (
        <div className="score">
            <h3 className="score__title">Score</h3>
            <ResponsiveContainer width='100%' height='100%'>
                <RadialBarChart startAngle={90} endAngle={endAngle} cx='50%' cy='50%'
                                barSize={10}
                                innerRadius={70}
                                outerRadius={120}
                                data={[{progress}]}>
                    <RadialBar background={false} minAngle={15} cornerRadius='50%' dataKey='progress' fill='#FF0000'/>
                    <Legend content={<CustomLegendScore/>}/>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Score;
