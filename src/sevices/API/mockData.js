/**
 * Données principales des utilisateurs.
 * @typedef {Object} UserMainData
 * @property {number} userId - Identifiant de l'utilisateur.
 * @property {Object} userInfos - Informations sur l'utilisateur.
 * @property {string} userInfos.firstName - Prénom de l'utilisateur.
 * @property {string} userInfos.lastName - Nom de l'utilisateur.
 * @property {number} userInfos.age - Âge de l'utilisateur.
 * @property {number} todayScore - Score actuel de l'utilisateur.
 * @property {Object} keyData - Données clés de l'utilisateur.
 * @property {number} keyData.calorieCount - Compteur de calories de l'utilisateur.
 * @property {number} keyData.proteinCount - Compteur de protéines de l'utilisateur.
 * @property {number} keyData.carbohydrateCount - Compteur de glucides de l'utilisateur.
 * @property {number} keyData.lipidCount - Compteur de lipides de l'utilisateur.
 */

/**
 * Activité des utilisateurs.
 * @typedef {Object} UserActivity
 * @property {number} userId - Identifiant de l'utilisateur.
 * @property {Object[]} sessions - Sessions de l'utilisateur.
 * @property {string} sessions.day - Jour de la session au format 'YYYY-MM-DD'.
 * @property {number} sessions.kilogram - Poids de l'utilisateur lors de la session.
 * @property {number} sessions.calories - Calories brûlées lors de la session.
 */

/**
 * Moyenne des sessions des utilisateurs.
 * @typedef {Object} UserAverageSessions
 * @property {number} userId - Identifiant de l'utilisateur.
 * @property {Object[]} sessions - Sessions de l'utilisateur.
 * @property {number} sessions.day - Jour de la session.
 * @property {number} sessions.sessionLength - Durée de la session en minutes.
 */

/**
 * Performances des utilisateurs.
 * @typedef {Object} UserPerformance
 * @property {number} userId - Identifiant de l'utilisateur.
 * @property {Object.<number, string>} kind - Types de performances.
 * @property {Object[]} data - Données de performances de l'utilisateur.
 * @property {number} data.value - Valeur de performance.
 * @property {number} data.kind - Type de performance (correspond à la clé dans l'objet 'kind').
 */

/**
 * Données principales des utilisateurs.
 * @type {UserMainData[]}
 */
export const USER_MAIN_DATA = [
    {
        userId: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31
        },
        todayScore: 0.75,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    },
    {
        userId: 18,
        userInfos: {
            firstName: 'Cecilia',
            lastName: 'Ratorez',
            age: 34
        },
        todayScore: 1,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
]


/**
 * Activité des utilisateurs.
 * @type {UserActivity[]}
 */
export const USER_ACTIVITY = [
    {
        userId: 12,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 80,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 80,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 81,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 81,
                calories: 290
            },
            {
                day: '2020-07-05',
                kilogram: 80,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 78,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 76,
                calories: 390
            }
        ]
    }, {
        userId: 18,
        sessions: [
            {
                day: '2020-07-01',
                kilogram: 70,
                calories: 240
            },
            {
                day: '2020-07-02',
                kilogram: 69,
                calories: 220
            },
            {
                day: '2020-07-03',
                kilogram: 70,
                calories: 280
            },
            {
                day: '2020-07-04',
                kilogram: 70,
                calories: 500
            },
            {
                day: '2020-07-05',
                kilogram: 69,
                calories: 160
            },
            {
                day: '2020-07-06',
                kilogram: 69,
                calories: 162
            },
            {
                day: '2020-07-07',
                kilogram: 69,
                calories: 390
            }
        ]
    }
]

/**
 * Moyenne des sessions des utilisateurs.
 * @type {UserAverageSessions[]}
 */
export const USER_AVERAGE_SESSIONS = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 23
            },
            {
                day: 3,
                sessionLength: 45
            },
            {
                day: 4,
                sessionLength: 50
            },
            {
                day: 5,
                sessionLength: 0
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 40
            },
            {
                day: 3,
                sessionLength: 50
            },
            {
                day: 4,
                sessionLength: 30
            },
            {
                day: 5,
                sessionLength: 30
            },
            {
                day: 6,
                sessionLength: 50
            },
            {
                day: 7,
                sessionLength: 50
            }
        ]
    }
]

/**
 * Performances des utilisateurs.
 * @type {UserPerformance[]}
 */
export const USER_PERFORMANCE = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    },
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
]
