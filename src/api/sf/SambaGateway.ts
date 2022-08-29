/* eslint-disable */
/* tslint:disable */
/************************************************
 * 接口信息
 * > 标题：Api Documentation
 * > 版本：1.0
 * > 描述：Api Documentation
 ***********************************************/
import { ResponseModelObject, SambaGatewayModel } from "./data-contracts"
import { doRst, request, RequestParams } from "./http-client"

/**
 * No description
 *
 * @tags create-samba-gateway-controller
 * @name CreateSambaGateway
 * @summary createSambaGateway
 * @request PUT:/fs/createSambaGateway
 */
export const createSambaGateway = (
  sambaGatewayModel: SambaGatewayModel,
  params: RequestParams = {}
): Promise<ResponseModelObject> => {
  return request
    .put({
      url: `/fs/createSambaGateway`,
      data: sambaGatewayModel,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * No description
 *
 * @tags get-samba-gateway-controller
 * @name GetSambaGateway
 * @summary getSambaGateway
 * @request GET:/fs/getSambaGateway
 */
export const getSambaGateway = (
  query: { gatewayId: number },
  params: RequestParams = {}
): Promise<ResponseModelObject> => {
  return request
    .get({
      url: `/fs/getSambaGateway`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * No description
 *
 * @tags list-samba-gateway-controller
 * @name ListSambaGateway
 * @summary listSambaGateway
 * @request GET:/fs/listSambaGateway
 */
export const listSambaGateway = (params: RequestParams = {}): Promise<ResponseModelObject> => {
  return request
    .get({
      url: `/fs/listSambaGateway`,
      ...params
    })
    .then((res) => doRst(res))
}

/**
 * No description
 *
 * @tags remove-samba-gateway-controller
 * @name RemoveSambaGateway
 * @summary removeSambaGateway
 * @request PUT:/fs/removeSambaGateway
 */
export const removeSambaGateway = (
  query: { gatewayId: number },
  params: RequestParams = {}
): Promise<ResponseModelObject> => {
  return request
    .put({
      url: `/fs/removeSambaGateway`,
      params: query,
      ...params
    })
    .then((res) => doRst(res))
}
