import { service } from '@/config/axios/service'

import { AxiosPromise } from 'axios'

import { config } from '@/config/axios/config'

const { default_headers } = config

import JSONbig from 'json-bigint'

const request = (option: AxiosConfig) => {
  const { url, method, params, data, headersType, responseType, transformRequest } = option
  return service({
    url: url,
    method,
    params,
    data,
    responseType: responseType,
    headers: {
      'Content-Type': headersType || default_headers
    },
    // jsonbig处理number 精度丢失问题
    transformResponse: function (data) {
      try {
        return JSONbig({ useNativeBigInt: true }).parse(data)
      } catch {
        return data
      }
    },
    transformRequest
  })
}

function getFn<T = any>(option: AxiosConfig): AxiosPromise<T> {
  return request({ method: 'get', ...option })
}

function postFn<T = any>(option: AxiosConfig): AxiosPromise<T> {
  return request({ method: 'post', ...option })
}

function deleteFn<T = any>(option: AxiosConfig): AxiosPromise<T> {
  return request({ method: 'delete', ...option })
}

function putFn<T = any>(option: AxiosConfig): AxiosPromise<T> {
  return request({ method: 'put', ...option })
}

export const useAxios = () => {
  return {
    get: getFn,
    post: postFn,
    delete: deleteFn,
    put: putFn
  }
}
