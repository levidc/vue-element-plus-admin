/* eslint-disable */
/* tslint:disable */
import { useAxios } from '@/hooks/web/useAxios'
import {
  DeleteModel,
  DiskLightModel,
  InstanceMaintenanceModel,
  ResponseModelListServerNode,
  ResponseModelListSimpleInstanceMetadata,
  ResponseModelListSmartInfo,
  ResponseModelServerNode,
  ResponseModelString,
  ServerNodeModel
} from './data-contracts'

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此 URL 取消对服务器的维护<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 10-服务器
 * @name CancelInstanceMaintenance
 * @summary 取消维护服务器
 * @request PUT:/cancelInstanceMaintenance
 */
export const cancelInstanceMaintenance = async (
  model: InstanceMaintenanceModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/cancelInstanceMaintenance`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 对磁盘进行点灯/关灯<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>26</th><td>Changing th disk light status timed out</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 10-服务器
 * @name ChangeDiskLightStatus
 * @summary 磁盘点灯/关灯
 * @request PUT:/changeDiskLightStatus
 */
export const changeDiskLightStatus = async (
  operation: DiskLightModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/changeDiskLightStatus`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 删除服务器，需要注意的是只有不健康的servernode才可以删除<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>115</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>209</th><td>Server node is unknown</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 10-服务器
 * @name DeleteServerNode
 * @summary 删除服务器
 * @request DELETE:/deleteServerNode
 */
export const deleteServerNode = async (
  model: DeleteModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.delete({
    url: `/deleteServerNode`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取smart检测信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>51</th><td>Disk name is illegal</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>210</th><td>Server node not exist</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 10-服务器
 * @name GetDiskSmartInfo
 * @summary smart检测信息
 * @request GET:/getDiskSmartInfo
 */
export const getDiskSmartInfo = async (
  accountId: number,
  diskName: string,
  serverId: string,
  version: string,
  params: RequestParams = {}
): Promise<ResponseModelListSmartInfo> => {
  const res = await _request.get({
    url: `/getDiskSmartInfo`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 查看单个服务器信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 10-服务器
 * @name GetServerNodeById
 * @summary 查询单个服务器信息
 * @request GET:/getServerNodeById
 */
export const getServerNodeById = async (
  accountId: number,
  servernodeId: string,
  version?: string,
  params: RequestParams = {}
): Promise<ResponseModelServerNode> => {
  const res = await _request.get({
    url: `/getServerNodeById`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 查看所有节点信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 10-服务器
 * @name ListInstanceMetadata
 * @summary 查询所有节点
 * @request GET:/listInstanceMetadata
 */
export const listInstanceMetadata = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleInstanceMetadata> => {
  const res = await _request.get({
    url: `/listInstanceMetadata`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 查看所有服务器<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 10-服务器
 * @name ListServernode
 * @summary 查询所有服务器
 * @request GET:/listServernode
 */
export const listServernode = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelListServerNode> => {
  const res = await _request.get({
    url: `/listServernode`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 对有 datanode 的服务器进行维护<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 10-服务器
 * @name MarkInstanceMaintenance
 * @summary 维护服务器
 * @request PUT:/markInstanceMaintenance
 */
export const markInstanceMaintenance = async (
  operation: InstanceMaintenanceModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/markInstanceMaintenance`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 更新服务器信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>211</th><td>Server node position is existed</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 10-服务器
 * @name UpdateServernode
 * @summary 更新服务器信息
 * @request PUT:/updateServernode
 */
export const updateServernode = async (
  operation: ServerNodeModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updateServernode`,
    data: operation,
    ...params
  })
  return doRst(res)
}
