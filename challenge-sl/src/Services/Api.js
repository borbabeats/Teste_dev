import axios from 'axios';
const BASE_URL = 'https://teste-dev-server-side.vercel.app:5000';

const api = axios.create({
    baseURL: BASE_URL
});

export default api