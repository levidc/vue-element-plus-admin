/* eslint-disable */
/* tslint:disable */
/************************************************
 * 接口信息
 * > 标题：Api Documentation
 * > 版本：1.0
 * > 描述：Api Documentation
 ***********************************************/
import { doRst, request, RequestParams } from "./http-client"

/**
 * @description 获取所有的存储桶
 *
 * @tags list-buckets-controller
 * @name ListBuckets
 * @summary 获取所有的存储桶
 * @request GET:/fs/listBuckets
 */
export const listBuckets = (params: RequestParams = {}): Promise<IResponse<object>> => {
  return request
    .get({
      url: `/fs/listBuckets`,
      ...params
    })
    .then((res) => doRst(res))
}
