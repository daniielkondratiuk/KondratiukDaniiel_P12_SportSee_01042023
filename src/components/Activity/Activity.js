import React from 'react';
import {BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar} from 'recharts'
import './Activity.css'
import {CustomTooltipActivity} from "../CustomElements/CustomElements";

/**
 * Composant d'activité affichant un graphique en bâtons pour le poids et les calories brûlées
 * @param {Object} activity - Les données d'activité de l'utilisateur
 * @param {Array<Object>} activity.sessions - Les données d'activité pour chaque jour
 * @param {string} activity.sessions.day - Le jour de la semaine
 * @param {number} activity.sessions.kilogram - Le poids en kilogrammes
 * @param {number} activity.sessions.calories - Les calories brûlées
 * @returns {JSX.Element} Composant React pour l'activité
 */
const Activity = ({activity}) => {
    return (
        <div className='activity'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activity.sessions} margin={{top: 20, right: 30, left: 45, bottom: 35}}>
                    <text className="activity__title" x={45} y={0} dominantBaseline="hanging">Activité quotidienne
                    </text>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey="day" tickLine={false} tick={{fontSize: '12px'}} dy={10}/>
                    <XAxis dataKey="calories" tickLine={true}/>

                    <YAxis dataKey="kilogram" tickCount={4} tick={{fontSize: '12px'}} dx={20}
                           orientation="right" tickLine={false} axisLine={false} domain={['dataMin-2', 'dataMax+2']}/>
                    <YAxis dataKey="calories" type='number' yAxisId='calorie' hide/>

                    <Tooltip content={<CustomTooltipActivity/>}/>
                    <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{marginTop: '-23px'}}
                            formatter={value => <span className='text-color'>{value}</span>}/>
                    <Bar name='Poids (kg)' dataKey="kilogram" radius={[10, 10, 0, 0]} barSize={6} fill='#282D30'/>
                    <Bar name='Calories brûlées (kCal)' dataKey='calories' radius={[10, 10, 0, 0]} barSize={6}
                         yAxisId='calorie' fill='#E60000'/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
};

export default Activity;
