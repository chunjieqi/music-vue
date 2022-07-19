import axios from 'axios'
//创建axios实例
const service= axios.create({
    baseURL:'http://localhost:3000',
    timeout:60000
})
//创建请求拦截器
service.interceptors.request.use(
    (config)=>{
        return config;
    },
(error)=>{
    return Promise.reject(error)
}
);
//创建相应拦截器
service.interceptors.response.use(
    (res)=>{
        let data=res.data
        return data
    },(error)=>{
        return Promise.reject(error);
    }
);
export default service