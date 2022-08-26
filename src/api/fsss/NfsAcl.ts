/* eslint-disable */
/* tslint:disable */
/************************************************
 * 接口信息
 * > 标题：Api Documentation
 * > 版本：1.0
 * > 描述：Api Documentation
 ***********************************************/
import { NfsAclModel, NFSACLRelationShipModel } from "./data-contracts"
import { doRst, request, RequestParams } from "./http-client"

/**
 * @description 开启使用nfs网关acl
 *
 * @tags apply-nfs-acl-relationship-controller
 * @name ApplyNfsAclRelationship
 * @summary 开启使用nfs网关acl
 * @request PUT:/fs/applyNfsAclRelationship
 */
export const applyNfsAclRelationship = (
  nfsaclRelationShipModel: NFSACLRelationShipModel,
  params: RequestParams = {}
): Promise<IResponse<object>> => {
  return request
    .put({
      url: `/fs/applyNfsAclRelationship`,
      data: nfsaclRelationShipModel,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 取消使用nfs网关acl
 *
 * @tags cancel-nfs-acl-relationship-controller
 * @name CancelNfsAclRelationship
 * @summary 取消使用nfs网关acl
 * @request PUT:/fs/cancelNfsAclRelationship
 */
export const cancelNfsAclRelationship = (
  nfsaclRelationShipModel: NFSACLRelationShipModel,
  params: RequestParams = {}
): Promise<IResponse<object>> => {
  return request
    .put({
      url: `/fs/cancelNfsAclRelationship`,
      data: nfsaclRelationShipModel,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 创建nfs网关acl
 *
 * @tags create-nfs-acl-controller
 * @name CreateNfsAcl
 * @summary 创建nfs网关acl
 * @request PUT:/fs/createNfsAcl
 */
export const createNfsAcl = (nfsaclModel: NfsAclModel, params: RequestParams = {}): Promise<IResponse<object>> => {
  return request
    .put({
      url: `/fs/createNfsAcl`,
      data: nfsaclModel,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 查找nfs网关acl
 *
 * @tags get-nfs-acl-controller
 * @name GetNfsAcl
 * @summary 查找nfs网关acl
 * @request GET:/fs/getNfsAcl
 */
export const getNfsAcl = (
  query: { aclId: number; gatewayId: number },
  params: RequestParams = {}
): Promise<IResponse<object>> => {
  return request
    .get({
      url: `/fs/getNfsAcl`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 获取所有nfs网关acl
 *
 * @tags list-nfs-acl-controller
 * @name ListNfsAcl
 * @summary 获取所有nfs网关acl
 * @request GET:/fs/listNfsAcl
 */
export const listNfsAcl = (query: { gatewayId: number }, params: RequestParams = {}): Promise<IResponse<object>> => {
  return request
    .get({
      url: `/fs/listNfsAcl`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 查找nfs网关acl
 *
 * @tags remove-nfs-acl-controller
 * @name RemoveNfsAcl
 * @summary 查找nfs网关acl
 * @request DELETE:/fs/removeNfsAcl
 */
export const removeNfsAcl = (
  query: { aclId: number; gatewayId: number },
  params: RequestParams = {}
): Promise<IResponse<object>> => {
  return request
    .delete({
      url: `/fs/removeNfsAcl`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}
