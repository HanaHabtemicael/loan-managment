import axios from "axios";

let apiClient = axios.create({
    baseURL: 'http://164.160.187.141:3344/'
});

apiClient.interceptors.request.use(config => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
        config.headers = {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        };
    }
    return config;
});

export default apiClient;
