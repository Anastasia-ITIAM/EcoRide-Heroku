// Configuration automatique de l'URL de l'API selon l'environnement
const API_CONFIG = {
    // URL de l'API selon l'environnement
    getApiUrl() {
        // Détection automatique de l'environnement
        const hostname = window.location.hostname;
        
        // Environnement local
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            return 'http://localhost:8000';
        }
        
        // Environnement de production Heroku
        return 'https://ecoecoride-bfc4b6ed3554.herokuapp.com';
    }
};

// Export de l'URL de l'API
export const API_URL = API_CONFIG.getApiUrl();

// Pour faciliter l'utilisation dans le code
export function getApiUrl(path = '') {
    return `${API_URL}${path}`;
}

// Log pour debug (à retirer en production si besoin)
console.log(`🌍 Environnement détecté: ${window.location.hostname === 'localhost' ? 'LOCAL' : 'PRODUCTION'}`);
console.log(`🔗 API URL: ${API_URL}`);


