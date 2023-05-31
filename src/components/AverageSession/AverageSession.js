import React from 'react';
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {CustomTooltipAverageSession} from "../CustomElements/CustomElements";
import './AverageSession.css'
import convertDayToLetter from "../../sevices/Helpers/convertDayToLetter";

/**
 * Composant qui affiche un graphique de la durée moyenne des sessions.
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.averageSession - Les données de la durée moyenne des sessions.
 * @returns {JSX.Element} - Le composant AverageSession.
 */
const AverageSession = ({averageSession}) => {
    return (
        <div className='avgSession'>
            <h3> Durée moyenne des sessions </h3>
            <ResponsiveContainer width='100%' height='100%' className='avgSession-responsive'>
                <LineChart
                    className='avgSession-line'
                    width='50%' height='50%' data={convertDayToLetter(averageSession.sessions)}
                    margin={{top: 5, right: 10, left: 10, bottom: 5}}
                    onMouseMove={checkInfo}
                    onMouseLeave={clearCheckInfo}
                >
                    <XAxis dataKey='day' stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false}/>
                    <YAxis domain={["dataMin-50", "dataMax+50"]} padding={{top: 50}} stroke='#FFFFFF' opacity={0.5}
                           tickLine={false} axisLine={false} hide/>
                    <Tooltip cursor={{stroke: 'red', strokeWidth: 2}} content={<CustomTooltipAverageSession/>}/>
                    <Legend/>
                    <Line type='natural' dataKey='sessionLength' stroke='#FFFFFF' dot={false} strokeWidth={2}
                          legendType='none'
                          activeDot={{
                              stroke: "white",
                              strokeOpacity: 0.2,
                              fill: "white",
                              strokeWidth: 15,
                              r: 5,
                          }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
};

/**
 * @function checkInfo - Fonction qui modifie l'arrière-plan du graphique lorsqu'un tooltip est actif.
 * @param {Object} event - L'événement onMouseMove du graphique.
 * @returns {void}
 */
const checkInfo = (event) => {
    const div = document.getElementsByClassName('avgSession-responsive')[0]
    if (event.isTooltipActive) {
        const windowWidth = div.clientWidth
        const mouseXpercentage = Math.round((event.activeCoordinate.x / windowWidth) * 100)
        div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1) 100%)`
    }
}

// const checkInfo = (event) => {
//     const div = document.querySelector('.avgSession-responsive');
//     const percentage = Math.round((event.activeCoordinate.x / div.clientWidth) * 100);
//     div.classList.toggle('gradient-bg', event.isTooltipActive);
//     div.style.setProperty('--bg-gradient-percentage', `${percentage}%`);
// };

/**
 * Fonction qui réinitialise l'arrière-plan du graphique lorsqu'un tooltip n'est plus actif.
 * @function
 * @param {Object} event - L'événement onMouseLeave du graphique.
 * @returns {void}
 */
const clearCheckInfo = (event) => {
    const div = document.getElementsByClassName('avgSession-responsive')[0]
    if (!event.isTooltipActive) {
        div.style.background = `#FF0000`
    }
}
export default AverageSession;
