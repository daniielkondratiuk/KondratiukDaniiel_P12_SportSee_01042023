import axios from "axios";
import * as mock from "./mockData";

/**
 * Classe pour charger les données d'un utilisateur.
 */
class DataLoader {
    /**
     * Crée une instance de DataLoader.
     * @param {string} id - L'ID de l'utilisateur.
     */
    constructor(id) {
        this.id = id;
    }

    /**
     * Charge les données réelles de l'utilisateur à partir du serveur.
     * @async
     * @returns {Promise<Object>} Les données de l'utilisateur.
     * @throws {Error} Si une erreur se produit lors du chargement des données.
     */
    async loadDataUser() {
        try {
            const response = await axios.get(`http://localhost:3000/user/${this.id}/`);
            return response.data.data;
        } catch (error) {
            this.errorHandler(error)
        }
    }

    /**
     * Charge les données d'activité de l'utilisateur à partir du serveur.
     * @async
     * @returns {Promise<Object>} Les données d'activité de l'utilisateur.
     * @throws {Error} Si une erreur se produit lors du chargement des données.
     */
    async loadDataActivity() {
        try {
            const response = await axios.get(`http://localhost:3000/user/${this.id}/activity`);
            return response.data.data;
        } catch (error) {
            this.errorHandler(error)
        }
    }

    /**
     * Charge les données de session moyenne de l'utilisateur à partir du serveur.
     * @async
     * @returns {Promise<Object>} Les données de session moyenne de l'utilisateur.
     * @throws {Error} Si une erreur se produit lors du chargement des données.
     */
    async loadDataAverageSession() {
        try {
            const response = await axios.get(`http://localhost:3000/user/${this.id}/average-sessions`);
            return response.data.data;
        } catch (error) {
            this.errorHandler(error)
        }
    }

    /**
     * Charge les données de performance de l'utilisateur à partir du serveur.
     * @async
     * @returns {Promise<Object>} Les données de performance de l'utilisateur.
     * @throws {Error} Si une erreur se produit lors du chargement des données.
     */
    async loadDataPerformance() {
        try {
            const response = await axios.get(`http://localhost:3000/user/${this.id}/performance`);
            return response.data.data;
        } catch (error) {
            this.errorHandler(error)
        }
    }

    /**
     * Charge les données simulées de l'utilisateur à partir des données de mock.
     * @async
     * @returns {Promise<Object>} Les données simulées de l'utilisateur.
     */
    async loadMockDataUser() {
        return new Promise((resolve) => {
            resolve(mock.USER_MAIN_DATA.find((user) => user.userId == this.id));
        });
    }

    /**
     * Charge les données simulées d'activité de l'utilisateur à partir des données de mock.
     * @async
     * @returns {Promise<Object>} Les données simulées d'activité de l'utilisateur.
     */
    async loadMockDataActivity() {
        return new Promise((resolve) => {
            resolve(mock.USER_ACTIVITY.find((user) => user.userId == this.id));
        });
    }

    /**
     * Charge les données simulées de session moyenne de l'utilisateur à partir des données de mock.
     * @async
     * @returns {Promise<Object>} Les données simulées de session moyenne de l'utilisateur.
     */
    async loadMockDataAverageSession() {
        return new Promise((resolve) => {
            resolve(mock.USER_AVERAGE_SESSIONS.find((user) => user.userId == this.id));
        });
    }

    /**
     * Charge les données simulées de performance de l'utilisateur à partir des données de mock.
     * @async
     * @returns {Promise<Object>} Les données simulées de performance de l'utilisateur.
     */
    async loadMockDataPerformance() {
        return new Promise((resolve) => {
            resolve(mock.USER_PERFORMANCE.find((user) => user.userId == this.id));
        });
    }

    /**
     * Charge toutes les données réelles de l'utilisateur à partir du serveur.
     * @async
     * @returns {Promise<Object>} Les données de l'utilisateur.
     * @throws {Error} Si une erreur se produit lors du chargement des données.
     */
    async loadData() {
        try {
            const [user, activity, averageSession, performance] = await Promise.all([
                await this.loadDataUser(),
                await this.loadDataActivity(),
                await this.loadDataAverageSession(),
                await this.loadDataPerformance(),
            ]);

            return {
                user,
                activity,
                averageSession,
                performance,
            };
        } catch (e) {
            return {message: e.message};
        }
    }

    /**
     * Charge toutes les données simulées de l'utilisateur à partir des données de mock.
     * @async
     * @returns {Promise<Object>} Les données simulées de l'utilisateur.
     * @throws {Error} Si une erreur se produit lors du chargement des données.
     */
    async loadMockData() {
        try {
            const [user, activity, averageSession, performance] = await Promise.all([
                this.loadMockDataUser(),
                this.loadMockDataActivity(),
                this.loadMockDataAverageSession(),
                this.loadMockDataPerformance(),
            ]);

            return {
                user,
                activity,
                averageSession,
                performance,
            };
        } catch (error) {
            return {message: error.message};
        }
    }

    /**
     * Gère les erreurs survenues lors du chargement des données.
     * @param {Error} error - L'erreur survenue lors du chargement des données.
     * @throws {Error} Si une erreur spécifique est détectée.
     */
    errorHandler(error) {
        if (error.code === 'ERR_BAD_REQUEST') {
            throw new Error('Cet utilisateur n\'existe pas')
        }
        throw new Error('Server not working')
    }
}

export default DataLoader;
