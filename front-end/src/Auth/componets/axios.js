const axios = require('axios');
let instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 1000,
    headers: { 'Authorization': 'Bearer ' + localStorage.getItem('acces_token') }
});


export default instance;