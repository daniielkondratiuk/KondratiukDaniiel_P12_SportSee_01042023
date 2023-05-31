/**
 * La fonction capitalizeFirstLetter met la première lettre d'une chaîne de caractères en majuscule.
 *
 * @function
 * @param {string} string - La chaîne de caractères dont la première lettre doit être mise en majuscule.
 * @returns {string} - La chaîne de caractères avec la première lettre en majuscule.
 */
export default function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
