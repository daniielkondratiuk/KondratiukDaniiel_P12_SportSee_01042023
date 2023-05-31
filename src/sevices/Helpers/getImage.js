import CaloriesIcon from '../../img/CaloriesIcon.svg'
import ProteinesIcon from '../../img/ProteinesIcon.svg'
import GlucidesIcon from '../../img/GlucidesIcon.svg'
import LipidesIcon from '../../img/LipidesIcon.svg'

/**
 * @function getImage - Renvoie l'icône correspondant à un titre
 * @param {string} title - Le titre pour lequel renvoyer l'icône
 * @returns {string} - Le chemin vers l'image correspondante
 */
const getImage = (title) => {
    switch (title) {
        case 'Calories':
            return CaloriesIcon
            break
        case 'Proteines':
            return ProteinesIcon
            break
        case 'Glucides':
            return GlucidesIcon
            break
        case 'Lipides':
            return LipidesIcon
            break
    }
}

export default getImage
