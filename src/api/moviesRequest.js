import axios from 'axios';

const moviesRequest = axios.create({
    baseURL: 'http://localhost:8000/movies'
})

export default moviesRequest;