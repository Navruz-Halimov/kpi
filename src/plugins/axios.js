import axios from "axios";
import router from "../router";
import store from "@/store";
import { getToken } from "@/constants/utils/storage";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "https://ekadr.sudya.uz",
  timeout: 60000,
});

const isDev = process.env.NODE_ENV !== "production";

axiosInstance.interceptors.request.use(
  (config) => {
    const storageToken = getToken();
    config.headers["Authorization"] = storageToken
      ? `Bearer ${storageToken}`
      : "";

    return config;
  },

  (error) => {
    return Promise.resolve(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    if (isDev) {
      console.log(response);
    }
    return response || {};
  },
  function (error) {
    const statusCode = (error.response || {}).status || -1;

    if (statusCode === 401) {
      delete axiosInstance.defaults.headers.common["Authorization"];
      store.dispatch("auth/logout").then(() => router.push({ name: "login" }));
      return Promise.reject(error);
    }
    return Promise.resolve(error);
  }
);

export default axiosInstance;
