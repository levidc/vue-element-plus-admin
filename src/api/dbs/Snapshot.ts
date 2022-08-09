/* eslint-disable */
/* tslint:disable */
import { useAxios } from '@/hooks/web/useAxios'
import {
  ResponseModelListVolume2Snapshot,
  ResponseModelString,
  SnapshotModel,
  SnapshotOperationModel
} from './data-contracts'

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此 URL 可以创建快照<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>68</th><td>Driver is being launched</td></tr><tr><th>73</th><td>Driver is being unmounted</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>152</th><td>There is no driver launched</td></tr><tr><th>163</th><td>There is no enough space</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>221</th><td>The number of snapshots exceeds the upper limit</td></tr><tr><th>222</th><td>Snapshot is being created</td></tr><tr><th>223</th><td>Snapshot is being deleted</td></tr><tr><th>225</th><td>Snapshot is existing</td></tr><tr><th>227</th><td>Snapshot name is existing</td></tr><tr><th>230</th><td>Snapshot is being rollback</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>264</th><td>Volume is deleting</td></tr><tr><th>269</th><td>Volume is moving online, Please prohibit other operations</td></tr><tr><th>280</th><td>Volume is not available</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>284</th><td>Volume is being operated</td></tr><tr><th>287</th><td>Volume is being rollback</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 04-快照
 * @name CreateSnapshot
 * @summary 创建快照
 * @request POST:/createSnapshot
 */
export const createSnapshot = async (
  model: SnapshotModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.post({
    url: `/createSnapshot`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以删除快照<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>33</th><td>Driver sync failed</td></tr><tr><th>68</th><td>Driver is being launched</td></tr><tr><th>73</th><td>Driver is being unmounted</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>220</th><td>Snapshot that has been mounted is not allow to delete, snapshots before this one isnt allow to rollback</td></tr><tr><th>222</th><td>Snapshot is being created</td></tr><tr><th>223</th><td>Snapshot is being deleted</td></tr><tr><th>226</th><td>Snapshot is cloning</td></tr><tr><th>230</th><td>Snapshot is being rollback</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>264</th><td>Volume is deleting</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>284</th><td>Volume is being operated</td></tr><tr><th>287</th><td>Volume is being rollback</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 04-快照
 * @name DeleteSnapshot
 * @summary 删除快照
 * @request DELETE:/deleteSnapshot
 */
export const deleteSnapshot = async (
  model: SnapshotOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.delete({
    url: `/deleteSnapshot`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以获取所有快照<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>174</th><td>Invalid argument</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 04-快照
 * @name ListAllSnapshots
 * @summary 查看快照
 * @request GET:/listAllSnapshots
 */
export const listAllSnapshots = async (
  accountId: number,
  version: string,
  volumeIds?: string,
  params: RequestParams = {}
): Promise<ResponseModelListVolume2Snapshot> => {
  const res = await _request.get({
    url: `/listAllSnapshots`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以对快照进行回滚<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 04-快照
 * @name RollbackFromSnapshot
 * @summary 快照回滚
 * @request PUT:/rollbackFromSnapshot
 */
export const rollbackFromSnapshot = async (
  model: SnapshotOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/rollbackFromSnapshot`,
    data: model,
    ...params
  })
  return doRst(res)
}
