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
 * @description 获取所有对象存储资源
 *
 * @tags list-instances-controller
 * @name ListInstances
 * @summary 获取所有对象存储资源
 * @request GET:/fs/listInstances
 */
export const listInstances = (params: RequestParams = {}): Promise<IResponse<object>> => {
  return request
    .get({
      url: `/fs/listInstances`,
      ...params
    })
    .then((res) => doRst(res))
}
