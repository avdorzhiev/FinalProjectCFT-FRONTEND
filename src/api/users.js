import axios from 'axios';

const usersRequest = axios.create({
    baseURL: 'http://localhost:8000/users'
})

export default usersRequest;