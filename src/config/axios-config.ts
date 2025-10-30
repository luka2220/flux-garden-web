import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

export const endpoints = {
  feed: '/feed',
};

export default axiosInstance;
