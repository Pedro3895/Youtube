import axios from "axios";

//const token = window.localStorage.getItem('token');

const api = axios.create({
    baseURL: 'http://localhost:3060',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        //"Authorization": token
    }
})

export default api;