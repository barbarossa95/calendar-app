import axios from 'axios';

const baseURL = 'http://localhost:8080/',
  instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

export default instance;
