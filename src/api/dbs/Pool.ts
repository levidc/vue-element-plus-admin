/* eslint-disable */
/* tslint:disable */
import { useAxios } from '@/hooks/web/useAxios'
import {
  PoolModel,
  PoolOperation,
  ResponseModelBoolean,
  ResponseModelListListUnusedArchivesResponseModel,
  ResponseModelListSimpleStoragePool,
  ResponseModelSetSimpleStoragePool,
  ResponseModelSimpleStoragePool,
  ResponseModelString
} from './data-contracts'

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此 URL 判断存储池是否有性能数据<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 02-存储池
 * @name IsPoolhasPerformanceData
 * @summary 存储池是否有性能数据
 * @request GET:/IsPoolhasPerformanceData
 */
export const isPoolhasPerformanceData = async (
  accountId: number,
  storagePoolId: number,
  version: string,
  params: RequestParams = {}
): Promise<ResponseModelBoolean> => {
  const res = await _request.get({
    url: `/IsPoolhasPerformanceData`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URI 创建新的存储池<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>14</th><td>Archive is using</td></tr><tr><th>16</th><td>Archive not found</td></tr><tr><th>17</th><td>Archive not free to use</td></tr><tr><th>57</th><td>Domain is deleting</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>239</th><td>Storage pool already exist</td></tr><tr><th>241</th><td>The name of storage pool is already exists</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 02-存储池
 * @name CreateStoragePool
 * @summary 创建存储池
 * @request POST:/createStoragePool
 */
export const createStoragePool = async (
  pool: PoolModel,
  params: RequestParams = {}
): Promise<ResponseModelSimpleStoragePool> => {
  const res = await _request.post({
    url: `/createStoragePool`,
    data: pool,
    ...params
  })
  return doRst(res)
}

/**
 * @description Use this URI to remove storage pool from domain by storage pool id<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>198</th><td>The resource does not exist</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>237</th><td>Storage pool still has volume</td></tr><tr><th>240</th><td>Storage pool is being deleting</td></tr><tr><th>243</th><td>Storage pool not found from DB</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 02-存储池
 * @name DeleteStoragePool
 * @summary 删除存储池
 * @request DELETE:/deleteStoragePool
 */
export const deleteStoragePool = async (
  operation: PoolOperation,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.delete({
    url: `/deleteStoragePool`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URI 得到某个域下所有存储池的信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>198</th><td>The resource does not exist</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 02-存储池
 * @name ListStoragePool
 * @summary 查看存储池
 * @request GET:/listStoragePool
 */
export const listStoragePool = async (
  accountId: number,
  version: string,
  domainId?: string,
  poolIds?: string,
  params: RequestParams = {}
): Promise<ResponseModelSetSimpleStoragePool> => {
  const res = await _request.get({
    url: `/listStoragePool`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 查看指定存储池的信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 02-存储池
 * @name ListStoragePoolCapacity
 * @summary 查看指定存储池的信息
 * @request GET:/listStoragePoolCapacity
 */
export const listStoragePoolCapacity = async (
  accountId: number,
  domainId: string,
  storagePoolId: number,
  version: string,
  params: RequestParams = {}
): Promise<ResponseModelListSimpleStoragePool> => {
  const res = await _request.get({
    url: `/listStoragePoolCapacity`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取没有被加入到存储池中的磁盘<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>198</th><td>The resource does not exist</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 02-存储池
 * @name ListUnusedArchive
 * @summary 查看所有未加入存储池的磁盘
 * @request GET:/listUnusedArchive
 */
export const listUnusedArchive = async (
  accountId: number,
  domainId: string,
  version: string,
  params: RequestParams = {}
): Promise<ResponseModelListListUnusedArchivesResponseModel> => {
  const res = await _request.get({
    url: `/listUnusedArchive`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 按存储池 ID 与域 ID 删除指定域下的指定存储池<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>16</th><td>Archive not found</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>81</th><td>Fail to remove archive from storage pool</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>240</th><td>Storage pool is being deleting</td></tr><tr><th>243</th><td>Storage pool not found from DB</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 02-存储池
 * @name RemoveArchiveFromStoragePool
 * @summary 从存储池中移除磁盘
 * @request PUT:/removeArchiveFromStoragePool
 */
export const removeArchiveFromStoragePool = async (
  operation: PoolOperation,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/removeArchiveFromStoragePool`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URI 更新指定存储池的信息,存储池添加磁盘也是用此接口<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>14</th><td>Archive is using</td></tr><tr><th>16</th><td>Archive not found</td></tr><tr><th>17</th><td>Archive not free to use</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>240</th><td>Storage pool is being deleting</td></tr><tr><th>241</th><td>The name of storage pool is already exists</td></tr><tr><th>243</th><td>Storage pool not found from DB</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 02-存储池
 * @name UpdateStoragePool
 * @summary 更新存储池
 * @request PUT:/updateStoragePool
 */
export const updateStoragePool = async (
  pool: PoolModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updateStoragePool`,
    data: pool,
    ...params
  })
  return doRst(res)
}
