/* eslint-disable */
/* tslint:disable */
/************************************************
 * 接口信息
 * > 标题：Api Documentation
 * > 版本：1.0
 * > 描述：Api Documentation
 ***********************************************/
import { MountEntity, ResponseModelVersions } from "./data-contracts"
import { doRst, request, RequestParams } from "./http-client"

/**
 * No description
 *
 * @tags mount-controller
 * @name Mount
 * @summary mountHandler
 * @request POST:/fs/mount
 */
export const mount = (mountEntity: MountEntity, params: RequestParams = {}): Promise<ResponseModelVersions> => {
  return request
    .post({
      url: `/fs/mount`,
      data: mountEntity,
      ...params
    })
    .then((res) => doRst(res))
}
