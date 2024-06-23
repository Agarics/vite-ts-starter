import { useAxios } from '@vueuse/integrations/useAxios'
import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

interface IResponseBase {
  code: number
  message: string
  result: any
}

export const axiosInstance = axios.create({
  timeout: 20 * 1000, // 请求超时时间
  withCredentials: true, // 跨域
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with response data
    const { status } = response
    if (status !== 200) {
      return Promise.reject(response)
    }
    return response
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error)
  }
)

export const axiosRequest = (config: AxiosRequestConfig) => {
  const { url, ...resetConfig } = config
  const { execute } = useAxios(url as string, resetConfig, axiosInstance, {
    immediate: false,
  })
  return execute().then(({ data }) => data.value as IResponseBase)
}

export const get = (url: string, params?, config?: AxiosRequestConfig) =>
  axiosRequest({
    ...(config || {}),
    method: 'get',
    url,
    params,
  })

export const post = (url: string, params?, config?: AxiosRequestConfig) =>
  axiosRequest({
    ...(config || {}),
    method: 'post',
    url,
    params,
  })

export const createGet =
  (url: string, config?: AxiosRequestConfig) => (params?) =>
    get(url, params, config)

export const createPost =
  (url: string, config?: AxiosRequestConfig) => (params?) =>
    post(url, params, {
      ...(config || {}),
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })

export const createFormPost =
  (url: string, config?: AxiosRequestConfig) => (params?) =>
    post(url, params, {
      ...(config || {}),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
