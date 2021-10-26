import axios from 'axios';
import config from '../configs';
import authInterceptor from './auth-interceptor';

const axiosInstance = axios.create({
  baseURL: config.api.host,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(authInterceptor);

export default axiosInstance;
