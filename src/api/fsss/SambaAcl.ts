/* eslint-disable */
/* tslint:disable */
/************************************************
 * 接口信息
 * > 标题：Api Documentation
 * > 版本：1.0
 * > 描述：Api Documentation
 ***********************************************/
import { SambaAclModel } from "./data-contracts"
import { doRst, request, RequestParams } from "./http-client"

/**
 * No description
 *
 * @tags apply-samba-acl-relationship-controller
 * @name ApplySambaAclRelationship
 * @summary applySambaAclRelationship
 * @request PUT:/fs/applySambaACLRelationship
 */
export const applySambaACLRelationship = (
  query: { applySambaAclIdList: number[]; gatewayId: number },
  params: RequestParams = {}
): Promise<IResponse<object>> => {
  return request
    .put({
      url: `/fs/applySambaACLRelationship`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * No description
 *
 * @tags cancel-samba-acl-relationship-controller
 * @name CancelSambaAclRelationship
 * @summary cancelSambaAclRelationship
 * @request PUT:/fs/cancelSambaACLRelationship
 */
export const cancelSambaACLRelationship = (
  query: { delSambaAclIdList: number[]; gatewayId: number; gatewayName: string },
  params: RequestParams = {}
): Promise<IResponse<object>> => {
  return request
    .put({
      url: `/fs/cancelSambaACLRelationship`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * No description
 *
 * @tags create-samba-acl-controller
 * @name CreateSambaAcl
 * @summary createSambaAcl
 * @request PUT:/fs/createSambaACL
 */
export const createSambaACL = (
  sambaAclModel: SambaAclModel,
  params: RequestParams = {}
): Promise<IResponse<object>> => {
  return request
    .put({
      url: `/fs/createSambaACL`,
      data: sambaAclModel,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * No description
 *
 * @tags get-samba-acl-controller
 * @name GetSambaAcl
 * @summary getSambaAcl
 * @request GET:/fs/getSambaACL
 */
export const getSambaACL = (query: { aclId: number }, params: RequestParams = {}): Promise<IResponse<object>> => {
  return request
    .get({
      url: `/fs/getSambaACL`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * No description
 *
 * @tags list-samba-acl-controller
 * @name ListSambaAcl
 * @summary listSambaAcl
 * @request GET:/fs/listSambaACL
 */
export const listSambaACL = (params: RequestParams = {}): Promise<IResponse<object>> => {
  return request
    .get({
      url: `/fs/listSambaACL`,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * No description
 *
 * @tags remove-samba-acl-controller
 * @name RemoveSambaAcl
 * @summary removeSambaAcl
 * @request DELETE:/fs/removeSambaACL
 */
export const removeSambaACL = (query: { aclId: number }, params: RequestParams = {}): Promise<IResponse<object>> => {
  return request
    .delete({
      url: `/fs/removeSambaACL`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}
