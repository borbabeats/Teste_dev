import axios from 'axios';
const BASE_URL = 'https://teste-dev-server-side.onrender.com'; //https://teste-dev-weld.vercel.app
const api = axios.create({
    baseURL: BASE_URL
});
export default api