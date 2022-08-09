/* eslint-disable */
/* tslint:disable */
import { useAxios } from "@/hooks/web/useAxios"
import {
  InstanceOperationModel,
  ResponseModelDashboardInfo,
  ResponseModelListSimpleInstance,
  ResponseModelSimpleInstance,
  ResponseModelString
} from "./data-contracts"

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此 URL 查看所有服务<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 12-服务
 * @name GetAllInstance
 * @summary 查看所有服务
 * @request GET:/getAllInstance
 */
export const getAllInstance = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleInstance> => {
  const res = await _request.get({
    url: `/getAllInstance`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取系统容量，系统IO,服务器，存储池，磁盘，卷，客户机，告警有关的统计数据<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 12-服务
 * @name GetDashboardInfo
 * @summary 获取所有统计数据
 * @request GET:/getDashboardInfo
 */
export const getDashboardInfo = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelDashboardInfo> => {
  const res = await _request.get({
    url: `/getDashboardInfo`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 通过服务id获取服务信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 12-服务
 * @name GetInstanceById
 * @summary 根据id获取服务信息
 * @request GET:/getInstanceById
 */
export const getInstanceById = async (
  accountId: number,
  id: string,
  version: string,
  params: RequestParams = {}
): Promise<ResponseModelSimpleInstance> => {
  const res = await _request.get({
    url: `/getInstanceById`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 根据服务名称获取所有该服务的所有信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 12-服务
 * @name GetInstanceByName
 * @summary 根据name获取服务信息
 * @request GET:/getInstanceByName
 */
export const getInstanceByName = async (
  accountId: number,
  name: string,
  version?: string,
  params: RequestParams = {}
): Promise<ResponseModelListSimpleInstance> => {
  const res = await _request.get({
    url: `/getInstanceByName`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 移除服务，注意的是必须先停止服务，才能移除<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>109</th><td>Instance has failed aleady</td></tr><tr><th>111</th><td>Instance not exists</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 12-服务
 * @name KillInstance
 * @summary 移除服务（自动化中不建议跑，因为移除完服务，服务需要重新部署）
 * @request PUT:/killInstance
 */
export const killInstance = async (
  model: InstanceOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/killInstance`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 启动服务<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>94</th><td>Try to start service failed</td></tr><tr><th>213</th><td>Service is busy</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 12-服务
 * @name StartInstance
 * @summary 启动服务
 * @request PUT:/startInstance
 */
export const startInstance = async (
  model: InstanceOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/startInstance`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 停止服务<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 12-服务
 * @name StopInstance
 * @summary 停止服务
 * @request PUT:/stopInstance
 */
export const stopInstance = async (
  model: InstanceOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/stopInstance`,
    data: model,
    ...params
  })
  return doRst(res)
}
