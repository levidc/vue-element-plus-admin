/* eslint-disable */
/* tslint:disable */
/************************************************
 * 接口信息
 * > 标题：Api Documentation
 * > 版本：1.0
 * > 描述：Api Documentation
 ***********************************************/
import { FormatEntity, ResponseModelVersions } from "./data-contracts"
import { doRst, request, RequestParams } from "./http-client"

/**
 * No description
 *
 * @tags format-controller
 * @name Format
 * @summary formatHandler
 * @request POST:/fs/format
 */
export const format = (formatEntity: FormatEntity, params: RequestParams = {}): Promise<ResponseModelVersions> => {
  return request
    .post({
      url: `/fs/format`,
      data: formatEntity,
      ...params
    })
    .then((res) => doRst(res))
}
