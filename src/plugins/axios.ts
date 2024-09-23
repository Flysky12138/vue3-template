import axios from 'axios'

// https://github.com/axios/axios
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

// 请求拦截
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  response => {
    return Promise.resolve(response.data)
  },
  error => {
    return Promise.reject(error)
  }
)

/** 统一请求方法 */
export const request = <T>(...args: Parameters<typeof instance>): Promise<T> => instance(...args)
