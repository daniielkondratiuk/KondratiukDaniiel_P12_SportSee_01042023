import React from 'react';
import './Loading.css'

/**
 * Composant qui affiche un spinner de chargement.
 * @returns {JSX.Element} Spinner de chargement.
 */
const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
        </div>
    );
};

export default Loading;
