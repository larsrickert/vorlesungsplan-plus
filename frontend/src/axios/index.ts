import axios from "axios";
import config from "../configs";

const axiosInstance = axios.create({
  baseURL: config.api.host,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
