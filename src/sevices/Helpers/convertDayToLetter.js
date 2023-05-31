//TODO change func to class

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
