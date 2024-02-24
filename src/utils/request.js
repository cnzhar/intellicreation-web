import axios from "axios";
import { getToken, removeToken } from "@/utils/auth";
import errorCode from "@/utils/errorCode";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

// create an axios instance
const service = axios.create({
  baseURL: "http://localhost:7777", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    // do something before request is sent
    if (getToken() && !isToken) {
      config.headers["Authorization"] = getToken();
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // 未设置状态码则默认成功状态
    const code = response.data.code || 200;
    // 获取错误信息
    const msg = response.data.msg || errorCode[code] || errorCode["default"];
    if (code === 401) {
      removeToken();
      return Promise.reject("未登录或登录已过期，请重新登录");
    } else if (code !== 200) {
      return Promise.reject(msg);
    } else {
      // 把 字符串total 转换成 数字total
      if (response.data.data && response.data.data.total) {
        response.data.data.total = parseInt(response.data.data.total);
      }
      return response;
    }
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let message;
    let errorMessage = error.message || ""; // 确保 errorMessage 是一个字符串

    if (errorMessage === "Network Error") {
      message = "后端接口连接异常";
    } else if (errorMessage.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (errorMessage.includes("Request failed with status code")) {
      message =
        "系统接口" + errorMessage.substr(errorMessage.length - 3) + "异常";
    }
    return Promise.reject(message);
  }
);

export default service;
