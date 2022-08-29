/* eslint-disable */
/* tslint:disable */
/************************************************
 * 接口信息
 * > 标题：Api Documentation
 * > 版本：1.0
 * > 描述：Api Documentation
 ***********************************************/
import { ResponseModelObject } from "./data-contracts"
import { doRst, request, RequestParams } from "./http-client"

/**
 * @description 获取所有的存储桶
 *
 * @tags list-buckets-controller
 * @name ListBuckets
 * @summary 获取所有的存储桶
 * @request GET:/fs/listBuckets
 */
export const listBuckets = (query: { storageId: number }, params: RequestParams = {}): Promise<ResponseModelObject> => {
  return request
    .get({
      url: `/fs/listBuckets`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}
