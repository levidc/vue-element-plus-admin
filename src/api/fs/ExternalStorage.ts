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
 * @description 添加NAS
 *
 * @tags 外部NAS/DBS资源
 * @name AddExternalStorageResource
 * @summary 添加NAS/DBS资源
 * @request POST:/fs/addExternalStorageResource
 */
export const addExternalStorageResource = (
  query: { storageType: string },
  nasRemoteDiskStorageModel: any,
  params: RequestParams = {}
): Promise<IResponse<object>> => {
  return request
    .post({
      url: `/fs/addExternalStorageResource`,
      params: query,
      data: nasRemoteDiskStorageModel,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 获取NAS/DBS资源
 *
 * @tags 外部NAS/DBS资源
 * @name GetExternalStorageResource
 * @summary 获取NAS/DBS资源
 * @request GET:/fs/getExternalStorageResource
 */
export const getExternalStorageResource = (
  query: { storageId: number; storageType?: string },
  params: RequestParams = {}
): Promise<IResponse<object>> => {
  return request
    .get({
      url: `/fs/getExternalStorageResource`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 获取所有NAS/DBS资源
 *
 * @tags 外部NAS/DBS资源
 * @name ListExternalStorageResource
 * @summary 获取所有NAS/DBS资源
 * @request GET:/fs/listExternalStorageResource
 */
export const listExternalStorageResource = (
  query?: { storageType?: string },
  params: RequestParams = {}
): Promise<IResponse<object>> => {
  return request
    .get({
      url: `/fs/listExternalStorageResource`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 删除NAS/DBS资源
 *
 * @tags 外部NAS/DBS资源
 * @name RemoveExternalStorageResource
 * @summary 删除NAS/DBS资源
 * @request DELETE:/fs/removeExternalStorageResource
 */
export const removeExternalStorageResource = (
  query: { storageId: number; storageType: string },
  params: RequestParams = {}
): Promise<IResponse<object>> => {
  return request
    .delete({
      url: `/fs/removeExternalStorageResource`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}
