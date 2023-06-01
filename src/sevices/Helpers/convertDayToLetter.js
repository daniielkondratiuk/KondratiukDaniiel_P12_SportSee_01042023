/**
 * Convertit un tableau d'objets avec une propriété numérique "jour" en un tableau d'objets avec une propriété de caractère "jour".
 * @param {Array} originalArray - Tableau original d'objets.
 * @returns {Array} - Le tableau d'objets converti.
 */
const convertDayToLetter = (originalArray) => {
    return originalArray.map((item) => {
        let dayLetter;
        switch (item.day) {
            case 1:
                dayLetter = 'L';
                break;
            case 2:
                dayLetter = 'M';
                break;
            case 3:
                dayLetter = 'M';
                break;
            case 4:
                dayLetter = 'J';
                break;
            case 5:
                dayLetter = 'V';
                break;
            case 6:
                dayLetter = 'S';
                break;
            case 7:
                dayLetter = 'D';
                break;
            default:
                dayLetter = '';
        }
        return {
            day: dayLetter,
            sessionLength: item.sessionLength,
        };
    })
};



export default convertDayToLetter
