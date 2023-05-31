import axios from "axios"
import * as mock from "./mockData"

/**
 * Classe pour charger les données d'un utilisateur.
 */
class DataLoader {
    /**
     * Crée une instance de DataLoader.
     * @param string id - L'ID de l'utilisateur.
     */
    constructor(id) {
        this.id = id
    }

    /**
     * Charge les données réelles de l'utilisateur à partir du serveur.
     * @async
     * @returns {Promise<Object>} Les données de l'utilisateur.
     * @throws {Error} Si une erreur se produit lors du chargement des données.
     */
    async loadData() {
        try {
            const [user, activity, averageSession, performance] = await Promise.all([
                axios.get(`http://localhost:3000/user/${this.id}/`),
                axios.get(`http://localhost:3000/user/${this.id}/activity`),
                axios.get(`http://localhost:3000/user/${this.id}/average-sessions`),
                axios.get(`http://localhost:3000/user/${this.id}/performance`),
            ])

            return {
                user: user.data.data,
                activity: activity.data.data,
                averageSession: averageSession.data.data,
                performance: performance.data.data,
            }
        } catch (e) {
            if (e.code === "ERR_NETWORK") {
                return {message: e.message}
            }
            return {message: "Cet utilisateur n'existe pas"}
        }
    }

    /**
     * Charge les données simulées de l'utilisateur à partir des données de mock.
     * @async
     * @returns {Promise<Object>} Les données simulées de l'utilisateur.
     */
    async loadMockData() {
        return new Promise((resolve) => {
            resolve({
                user: mock.USER_MAIN_DATA.find(user => user.userId == this.id),
                activity: mock.USER_ACTIVITY.find(user => user.userId == this.id),
                averageSession: mock.USER_AVERAGE_SESSIONS.find(user => user.userId == this.id),
                performance: mock.USER_PERFORMANCE.find(user => user.userId == this.id),
            })
        })
    }
}

export default DataLoader


