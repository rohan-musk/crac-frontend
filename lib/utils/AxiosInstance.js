import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    authorName: 'CrAC',
  },
  withCredentials: true,
});

export default client;
