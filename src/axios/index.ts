import config from '@/configs';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: config.api.host,
  timeout: 5000,
  headers: {
    get: { 'Content-Type': 'application/json' },
    post: { 'Content-Type': 'application/json' },
  },
});

export default axiosInstance;
