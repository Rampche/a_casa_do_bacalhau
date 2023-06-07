import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: `http://localhost:8080/`,
  timeout: 4000,
});

export { api };
