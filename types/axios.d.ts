import { AxiosRequestConfig } from 'axios'

declare module 'axios' {
  // 覆盖不了，就继承一个吧
  interface _AxiosRequestConfig extends AxiosRequestConfig {
    method?: 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | (string & {})
  }
}
