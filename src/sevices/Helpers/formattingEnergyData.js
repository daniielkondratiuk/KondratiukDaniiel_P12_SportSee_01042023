/**
 * La fonction transformEnergyData transforme une liste d'énergies en un format spécifique pour l'affichage.
 *
 * @function
 * @param {object} energyList - La liste d'énergies à transformer.
 * @returns {array} - La liste d'énergies transformée au format {title: string, count: number, unit: string}.
 */
export default function transformEnergyData(energyList) {
    return Object.keys(energyList).map(el => {
        let title = ''
        let unit = 'g'
        let count = energyList[el]
        switch (el) {
            case 'calorieCount':
                title = 'Calories'
                unit = 'kCal'
                count = energyList[el].toLocaleString("de-DE").replace('.',',')
                break
            case 'proteinCount':
                title = 'Proteines'
                break
            case 'carbohydrateCount':
                title = 'Glucides'
                break
            case 'lipidCount':
                title = 'Lipides'
                break
        }
        return {title, count, unit}
    })
}
