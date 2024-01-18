import axios from "axios";
import { Message } from "element-ui";
import { getToken } from "@/utils/auth";
import errorCode from "@/utils/errorCode";

// create an axios instance
const service = axios.create({
  baseURL: "http://localhost:7777", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000, // request timeout
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    // do something before request is sent
    if (getToken() && !isToken) {
      config.headers.token = getToken();
    }
    // get请求映射params参数
    if (config.method === "get" && config.params) {
      let url = config.url + "?";
      for (const propName of Object.keys(config.params)) {
        const value = config.params[propName];
        const part = encodeURIComponent(propName) + "=";
        if (value !== null && typeof value !== "undefined") {
          if (typeof value === "object") {
            for (const key of Object.keys(value)) {
              if (value[key] !== null && typeof value[key] !== "undefined") {
                const params = propName + "[" + key + "]";
                const subPart = encodeURIComponent(params) + "=";
                url += subPart + encodeURIComponent(value[key]) + "&";
              }
            }
          } else {
            url += part + encodeURIComponent(value) + "&";
          }
        }
      }
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

// // response interceptor
// service.interceptors.response.use(
//   (response) => {
//     const res = response.data;
//
//     if (res.code !== 200) {
//       Message({
//         message: res.message,
//         type: "error",
//         duration: 3 * 1000,
//       });
//
//       // 401:未登录;
//       // if (res.code === 401) {
//       //   MessageBox.confirm(
//       //     "你已被登出，可以取消继续留在该页面，或者重新登录",
//       //     "确定登出",
//       //     {
//       //       confirmButtonText: "重新登录",
//       //       cancelButtonText: "取消",
//       //       type: "warning",
//       //     }
//       //   ).then(() => {
//       //     store.dispatch("FedLogOut").then(() => {
//       //       location.reload(); // 为了重新实例化vue-router对象 避免bug
//       //     });
//       //   });
//       // }
//       return Promise.reject(new Error(res.msg || "Error"));
//     } else {
//       return res;
//     }
//   },
//   (error) => {
//     console.log("err" + error); // for debug
//     Message({
//       message: error.message,
//       type: "error",
//       duration: 3 * 1000,
//     });
//     return Promise.reject(error);
//   }
// );

// response拦截器
service.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode["default"];
    if (code === 401) {
      // MessageBox.confirm(
      //   "登录状态已过期，您可以继续留在该页面，或者重新登录",
      //   "系统提示",
      //   {
      //     confirmButtonText: "重新登录",
      //     cancelButtonText: "取消",
      //     type: "warning",
      //   }
      // )
      //   .then(() => {
      //     // localStorage.setItem("logUrl", router.currentRoute.fullPath);
      //     // router.push({
      //     //   path: "/Login?login=1",
      //     // });
      //   })
      //   .catch(() => {});
      // return Promise.reject("无效的会话，或者会话已过期，请重新登录。");
    } else if (code === 500) {
      Message({
        message: msg,
        type: "error",
      });
      return Promise.reject(new Error(msg));
    } else if (code !== 200) {
      Notification.error({
        title: msg,
      });
      return Promise.reject("error");
    } else {
      // 把字符串total 转换成 数字 total
      if (res.data.data && res.data.data.total) {
        res.data.data.total = parseInt(res.data.data.total);
      }
      return res.data.data;
    }
  },
  (error) => {
    console.log("err" + error);
    let { message } = error;
    if (message === "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Message({
      message: message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
