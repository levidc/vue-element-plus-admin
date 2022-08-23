/* eslint-disable */
/* tslint:disable */
/************************************************
 * 接口信息
 * > 标题：Api Documentation
 * > 版本：1.0
 * > 描述：Api Documentation
 ***********************************************/
import { NfsGatewayModel, ResponseModelObject } from "./data-contracts"
import { doRst, request, RequestParams } from "./http-client"

/**
 * @description 创建nfs网关
 *
 * @tags create-nfs-gateway-controller
 * @name CreateNfsGateway
 * @summary 创建nfs网关
 * @request PUT:/fs/createNFSGateway
 */
export const createNFSGateway = (
  nfsGatewayModel: NfsGatewayModel,
  params: RequestParams = {}
): Promise<ResponseModelObject> => {
  return request
    .put({
      url: `/fs/createNFSGateway`,
      data: nfsGatewayModel,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 查询nfs网关
 *
 * @tags get-nfs-gateway-controller
 * @name GetNfsGateway
 * @summary 查询nfs网关
 * @request GET:/fs/getNFSGateway
 */
export const getNFSGateway = (
  query: { gatewayId: number },
  params: RequestParams = {}
): Promise<ResponseModelObject> => {
  return request
    .get({
      url: `/fs/getNFSGateway`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 获取所有nfs网关
 *
 * @tags list-nfs-gateway-controller
 * @name ListNfsGateway
 * @summary 获取所有nfs网关
 * @request GET:/fs/listNFSGateway
 */
export const listNFSGateway = (params: RequestParams = {}): Promise<ResponseModelObject> => {
  return request
    .get({
      url: `/fs/listNFSGateway`,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * @description 删除nfs网关
 *
 * @tags remove-nfs-gateway-controller
 * @name RemoveNfsGateway
 * @summary 删除nfs网管
 * @request DELETE:/fs/removeNFSGateway
 */
export const removeNFSGateway = (
  query: { gatewayId: number },
  params: RequestParams = {}
): Promise<ResponseModelObject> => {
  return request
    .delete({
      url: `/fs/removeNFSGateway`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}
