import axios from 'axios'

// 1. 创建axios对象
const service = axios.create(
  //公共配置
  {
    baseURL: import.meta.env.VITE_BASE_URL,
  }
);

// 2. 请求拦截器

axios.interceptors.request.use(config => {
  // 在发送请求之前需要做些什么
  return config
}, error => {
  // 对错误请求的操作
  Promise.reject(error);
})


// 3. 响应拦截器
axios.interceptors.response.use(response => {
  //对响应数据进行操作
  return response.data
}, error => {
  //对响应数据出现错误进行操作
  return Promise.reject(error);
})

export default service;