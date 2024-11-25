import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URI,
});

export const setHeaders = (token) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) =>  Promise.reject(error)
);

export default instance;