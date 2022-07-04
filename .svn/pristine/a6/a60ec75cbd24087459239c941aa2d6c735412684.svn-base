import axios from "axios";
import { Message } from "element-ui";
import store from "@/store/index.js";
import router from "@/router/index.js";
import { getToken, removeToken } from '@/utils/auth'
const service = axios.create({
  timeout: 800000,
});

service.interceptors.request.use(
  (config) => {
    let token = getToken();
    if (token) {
      config.headers["X-Token"] = getToken();
      config.headers["userInfo"] = localStorage.getItem("Login_data");
      config.headers["ip"] = sessionStorage.getItem("ip");
      config.headers["url"] = config.url;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.headers.finalcodekey ? response : response.data;
    if (res.status === 10086) {
      Message({
        message: "token过期，请重新登录",
        type: "error",
        duration: 5 * 1000,
      });
      removeToken();
      localStorage.removeItem("Login_data");
      router.replace({ path: "/login" });
    } else if (res.status !== 200) {
      Message({
        message: res.msg || res.message || "Error",
        type: "error",
        duration: 5 * 1000,
      });
    } else {
      return res;
    }
  },
  (error) => {
    Message({
      message: error.response.data.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
