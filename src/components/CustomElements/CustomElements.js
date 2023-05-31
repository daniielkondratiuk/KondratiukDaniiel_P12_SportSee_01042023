import React from "react";

const CustomTooltipAverageSession = ({active, payload}) => {
    if (active && payload && payload.length) {
        return (
            <div className='custom-tooltip__avg-session'>
                <p> {`${payload[0].value} min`}</p>
            </div>
        )
    }
    return null
}

const CustomTooltipActivity = ({active, payload}) => {
    if (active && payload && payload.length) {
        return (
            <div className='custom-tooltip__activity'>
                <p> {`${payload[0].value}kg`}</p>
                <p> {`${payload[1].value}kCal`}</p>
            </div>
        )
    }
    return null
}

const CustomLegendScore = (payload) => {
    return (
        <div className="score__legend">
            <p className="score__legend-percent">
                {payload.payload[0].payload.progress}%
            </p>
            <p className="score__legend-text"> de votre objectif</p>
        </div>
    )
}

export {CustomTooltipAverageSession, CustomTooltipActivity, CustomLegendScore}
