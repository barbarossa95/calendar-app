import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL,
  instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

export default instance;
