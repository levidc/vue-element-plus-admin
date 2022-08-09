/* eslint-disable */
/* tslint:disable */
import { useAxios } from '@/hooks/web/useAxios'
import {
  DiskModel,
  OnLineDiskModel,
  ResponseModelListSimpleArchiveMetadata,
  ResponseModelString
} from './data-contracts'

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此 URL 重用磁盘<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>53</th><td>Disk does not exist</td></tr><tr><th>54</th><td>Disk's configuration matched</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 06-磁盘
 * @name FixConfigMismatchedDisk
 * @summary 重用磁盘
 * @request PUT:/fixConfigMismatchedDisk
 */
export const fixConfigMismatchedDisk = async (
  operation: DiskModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/fixConfigMismatchedDisk`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取指定节点下的磁盘信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 06-磁盘
 * @name GetArchive
 * @summary 查看节点下的磁盘信息
 * @request GET:/getArchive
 */
export const getArchive = async (
  accountId: number,
  instanceId: string,
  version?: string,
  params: RequestParams = {}
): Promise<ResponseModelListSimpleArchiveMetadata> => {
  const res = await _request.get({
    url: `/getArchive`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取指定磁盘信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>198</th><td>The resource does not exist</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 06-磁盘
 * @name GetDiskDetail
 * @summary 查看指定磁盘
 * @request GET:/getDiskDetail
 */
export const getDiskDetail = async (
  accountId: number,
  diskIds: string,
  version: string,
  params: RequestParams = {}
): Promise<ResponseModelListSimpleArchiveMetadata> => {
  const res = await _request.get({
    url: `/getDiskDetail`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取所有磁盘信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>198</th><td>The resource does not exist</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 06-磁盘
 * @name ListAllDisks
 * @summary 查看所有磁盘
 * @request GET:/listAllDisks
 */
export const listAllDisks = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleArchiveMetadata> => {
  const res = await _request.get({
    url: `/listAllDisks`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 卸载磁盘<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>48</th><td>Disk has been offline</td></tr><tr><th>50</th><td>Disk is busy</td></tr><tr><th>53</th><td>Disk does not exist</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 06-磁盘
 * @name OfflineDisk
 * @summary 卸载磁盘
 * @request PUT:/offlineDisk
 */
export const offlineDisk = async (
  operation: DiskModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/offlineDisk`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 挂载磁盘<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>15</th><td>Archive manager not support</td></tr><tr><th>48</th><td>Disk has been offline</td></tr><tr><th>53</th><td>Disk does not exist</td></tr><tr><th>55</th><td>Disk size can not support archive types</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 06-磁盘
 * @name OnlineDiskWithSettleArchiveType
 * @summary 挂载磁盘
 * @request PUT:/onlineDiskWithSettleArchiveType
 */
export const onlineDiskWithSettleArchiveType = async (
  operation: OnLineDiskModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/onlineDiskWithSettleArchiveType`,
    data: operation,
    ...params
  })
  return doRst(res)
}
