import axios from "axios";
import { gettoken } from "../storage/storage";
//创建axios实例
const service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 60000,
  //   withCredentials: true
  //   headers:{Authorization:`Bearer ${gettoken('token')}`}
});
//创建请求拦截器
service.interceptors.request.use(
  (config) => {
    //发送token给后端，使其验证token
    // console.log(config);
    const token = localStorage.getItem("token"); //获得本地token
    if (token) {
      //如果本地token存在
      if (config.headers != null) {
        config.headers.Authorization = `Bearer ${token}`; //在请求头中携带token
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//创建相应拦截器
service.interceptors.response.use(
  (res) => {
    let data = res.data;
    // console.log(res);

    return data;
  },
  (error) => {
    // console.log(error);
    console.log(error);

    return Promise.reject(error);
  }
);
export default service;
