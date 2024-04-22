import axios from "axios";
let apiClient = axios.create({
    baseURL: 'http://164.160.187.141:7000/api',
        
})
apiClient.interceptors.request.use(config=> {
    config.headers={
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization:`Bearer ${localStorage.getItem("tokenc")}`
    }
    return config

});
export default apiClient