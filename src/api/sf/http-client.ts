/* eslint-disable */
/* tslint:disable */
/************************************************
 * 接口信息
 * > 标题：Api Documentation
 * > 版本：1.0
 * > 描述：Api Documentation
 ***********************************************/
import request from '@/config/axios'

type RequestParams = Record<string, string | number>

const doRst = (res) => {
  console.log(res, 'res')
  return { code: res.code, data: res.data, message: res.description }
}

export { request, RequestParams, doRst }
