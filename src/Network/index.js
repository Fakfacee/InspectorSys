import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export function request(config) {
  let instance = axios.create({
    baseURL: "/api",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use((config) => {
    NProgress.start();
    // config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token')
    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      NProgress.done();
      return response;
    },
    (error) => {}
  );

  return instance(config);
}
