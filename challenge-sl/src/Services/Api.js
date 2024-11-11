import axios from 'axios';
const BASE_URL = 'http://localhost:4000';//'https://teste-dev-server-side.onrender.com'
const api = axios.create({
    baseURL: BASE_URL
});
export default api