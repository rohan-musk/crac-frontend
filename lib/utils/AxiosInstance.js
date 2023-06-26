import axios from 'axios';
import Router from 'next/router';

const client = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    authorName: 'CrAC',
  },
  withCredentials: true,
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      Router.push('/login');
    }
    return error;
  }
);

export default client;
