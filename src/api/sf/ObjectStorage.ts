/* eslint-disable */
/* tslint:disable */
/************************************************
 * 接口信息
 * > 标题：Api Documentation
 * > 版本：1.0
 * > 描述：Api Documentation
 ***********************************************/
import { ObjectStorageResourceModel, ResponseModelObject } from "./data-contracts"
import { doRst, request, RequestParams } from "./http-client"

/**
 * @description 添加对象存储资源
 *
 * @tags 对象存储资源
 * @name AddObjectStorageResource
 * @summary 添加对象存储资源
 * @request POST:/fs/addObjectStorageResource
 */
export const addObjectStorageResource = (
  resourceModel: ObjectStorageResourceModel,
  params: RequestParams = {}
): Promise<ResponseModelObject> => {
  return request
    .post({
      url: `/fs/addObjectStorageResource`,
      data: resourceModel,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 获取对象存储资源
 *
 * @tags 对象存储资源
 * @name GetObjectStorageResource
 * @summary 获取对象存储资源
 * @request GET:/fs/getObjectStorageResource
 */
export const getObjectStorageResource = (
  query: { storageId: number },
  params: RequestParams = {}
): Promise<ResponseModelObject> => {
  return request
    .get({
      url: `/fs/getObjectStorageResource`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 获取所有对象存储资源
 *
 * @tags 对象存储资源
 * @name ListObjectStorageResource
 * @summary 获取所有对象存储资源
 * @request GET:/fs/listObjectStorageResource
 */
export const listObjectStorageResource = (params: RequestParams = {}): Promise<ResponseModelObject> => {
  return request
    .get({
      url: `/fs/listObjectStorageResource`,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 删除对象存储资源
 *
 * @tags 对象存储资源
 * @name RemoveObjectStorageResource
 * @summary 删除对象存储资源
 * @request DELETE:/fs/removeObjectStorageResource
 */
export const removeObjectStorageResource = (
  query: { storageId: number },
  params: RequestParams = {}
): Promise<ResponseModelObject> => {
  return request
    .delete({
      url: `/fs/removeObjectStorageResource`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 更新对象存储资源
 *
 * @tags 对象存储资源
 * @name UpdateObjectStorageResource
 * @summary 更新对象存储资源
 * @request POST:/fs/updateObjectStorageResource
 */
export const updateObjectStorageResource = (
  resourceModel: ObjectStorageResourceModel,
  params: RequestParams = {}
): Promise<ResponseModelObject> => {
  return request
    .post({
      url: `/fs/updateObjectStorageResource`,
      data: resourceModel,
      ...params
    })
    .then((res) => doRst(res))
}
