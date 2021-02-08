import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-dc.herokuapp.com/'
})

export default api;