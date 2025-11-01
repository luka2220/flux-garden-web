import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export const endpoints = {
  feed: '/feed',
};

export default axiosInstance;
