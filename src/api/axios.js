import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://terproducts.onrender.com/api',
    //baseURL: 'http://localhost:4000/api',
    withCredentials: true,
    headers:{
        Accept: 'application/json'
    }
})

export default instance