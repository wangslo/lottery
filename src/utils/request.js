import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'
import store from '@/store'
import router from '../router'

// 改变 路由地址base
let base = '/lottery'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.API_ROOT, // api的base_url
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    console.log("response")
    console.log(response)
    const res = response.data;
    return res
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  })

export default service
