import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

export const endpoints = {
  root: 'api/',
  rss: {
    root: '/rss',
  },
};

export default axiosInstance;
