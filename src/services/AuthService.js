// AuthService.js
import axios from 'axios'; // Assuming axios is used for API calls

const API_URL = 'https://your-api-url'; // Replace with your API base URL

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + '/login', {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(email, password) {
        return axios.post(API_URL + '/signup', {
            email,
            password
        });
    }
}

export default new AuthService();
