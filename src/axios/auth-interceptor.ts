import { AxiosRequestConfig } from 'axios';

/**
 * Adds the current access token to each request.
 */
const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // const authStore = useAuthStore();
  // if (authStore.isAuthenticated) {
  //   const accessToken = authStore.accessToken;
  //   config.headers['Authorization'] = `Bearer ${accessToken}`;
  // }
  return config;
};

export default authInterceptor;
