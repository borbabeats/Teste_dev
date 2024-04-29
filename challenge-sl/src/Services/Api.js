import axios from 'axios';
const BASE_URL = 'https://teste-dev-server-side.onrender.com';
const api = axios.create({
    baseURL: BASE_URL
});
export default api