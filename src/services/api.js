import axios from 'axios';


const api = axios.create({
    baseURL: 'https://api.wheretheiss.at/v1/satellites'
})

export default api;