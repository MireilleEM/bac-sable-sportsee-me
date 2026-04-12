
import { USER_INFO, USER_ACTIVITY_WITH_ID } from '../data/mockData';

// 💡 passe à 'false' quand l'API backend est prête 
const USE_MOCK = true; 

// --- LA CLASSE DE FORMATAGE (DTO) ---
// Elle prend les données brutes et les rend acceptables pour React
class UserDataFormatter {
    constructor(infoData, activityData) {
        this.id = infoData.id;
        this.firstName = infoData.profile.firstName;
        // simplification des données complexes:
        this.totalDistance = parseFloat(infoData.statistics.totalDistance); 
        this.sessions = activityData.sessions;
    }
}

// --- SERVICE DE RECUPERATION ---
export const fetchUserDashboardData = async (userId) => {
    
    if (USE_MOCK) {
        // --- MODE MOCK (Simulation d'API) ---
        return new Promise((resolve, reject) => {
            setTimeout(() => { // Simule un temps de chargement de 500ms
                const userInfo = USER_INFO.find(user => user.id === userId);
                const userActivity = USER_ACTIVITY_WITH_ID.find(activity => activity.userId === userId);

                if (!userInfo || !userActivity) {
                    return reject(new Error("Utilisateur non trouvé dans les mocks"));
                }

                // On fusionne et on formate !
                const formattedData = new UserDataFormatter(userInfo, userActivity);
                resolve(formattedData);
            }, 500); 
        });

    } else {
        // --- MODE PRODUCTION (Vrai backend) ---
        try {
            // les 2 appels API sont lancés en même temps pour être plus rapide (Promise.all)
            const [infoResponse, activityResponse] = await Promise.all([
                fetch(`http://localhost:8000/user/${userId}`),
                fetch(`http://localhost:8000/user/${userId}/activity`)
            ]);

            const infoData = await infoResponse.json();
            const activityData = await activityResponse.json();

            // utiliser exactement la même classe de formatage 
            return new UserDataFormatter(infoData.data, activityData.data);
            
        } catch (error) {
            console.error("Erreur lors de la récupération de l'API", error);
            throw error;
        }
    }
};