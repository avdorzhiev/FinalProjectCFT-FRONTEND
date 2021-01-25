import axios from 'axios';

const cardsRequest = axios.create({
    baseURL: 'http://localhost:8000/cards'
})

export default cardsRequest;