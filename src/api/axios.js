import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://dekiraproduc.onrender.com',
    //baseURL: 'http://localhost:4000/api',
    withCredentials: true,
    headers:{
        Accept: 'application/json'
    }
})

export default instance