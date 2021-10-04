import axios from 'axios';
import authInterceptor from './auth-interceptor';

const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    post: { 'Content-Type': 'application/json' },
  },
});

axiosInstance.interceptors.request.use(authInterceptor);

export default axiosInstance;
