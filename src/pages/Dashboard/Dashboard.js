import React from 'react'
import './Dashboard.css'
import Header from "../../components/Header/Header"
import Score from "../../components/Score/Score"
import EnergyCard from "../../components/EnergyCard/EnergyCard";
import Activity from "../../components/Activity/Activity";
import Performance from "../../components/Performance/Performance";
import AverageSession from "../../components/AverageSession/AverageSession";

/**
 * Composant Dashboard
 *
 * @typedef {Object} Data
 * @property {Object} user - Les informations de l'utilisateur
 * @property {Object} activity - Les données d'activité de l'utilisateur
 * @property {Object} averageSession - Les données de sessions moyennes de l'utilisateur
 * @property {Object} performance - Les données de performance de l'utilisateur
 * @property {string} [message] - Le message d'erreur si l'utilisateur n'existe pas
 *
 * @param {Data} data - Les données de l'utilisateur
 *
 * @returns {JSX.Element} Le composant Dashboard
 */
const Dashboard = ({data}) => {
    const {user, activity, averageSession, performance, message} = data
    if (message) {
        return <div className="dashboard"><h1>{message}</h1></div>
    }
    return (
        <div className="dashboard">
            <Header name={user.userInfos.firstName}/>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div className="dashboard__recharts-wrap">
                    <Activity activity={activity}/>
                    <div className="dashboard__subrecharts-wrap">
                        <AverageSession averageSession={averageSession}/>
                        <Performance performance={performance}/>
                        <Score progress={(user.todayScore || user.score)}/>
                    </div>
                </div>
                <EnergyCard energyList={user.keyData}/>
            </div>
        </div>
    );
};

export default Dashboard
