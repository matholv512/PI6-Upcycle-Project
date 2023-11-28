import axios from 'axios';

const { HOST_KEY } = process.env;


const api = () => axios.create({
    baseURL: HOST_KEY
});


export default api();