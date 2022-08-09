/* eslint-disable */
/* tslint:disable */
import { useAxios } from "@/hooks/web/useAxios"
import { ResponseModelZookeeperEtcdStatus } from "./data-contracts"

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此URL检查Etcd服务状态<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>150</th><td>Network error</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 19-检查服务状态
 * @name CheckEtcdStatus
 * @summary 检查Etcd服务状态
 * @request POST:/checkEtcdStatus
 */
export const checkEtcdStatus = async (
  query: { accountId: string; version: string },
  params: RequestParams = {}
): Promise<ResponseModelZookeeperEtcdStatus> => {
  const res = await _request.post({
    url: `/checkEtcdStatus`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此URL检查zookeeper服务状态<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>150</th><td>Network error</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 19-检查服务状态
 * @name CheckZookeeperStatus
 * @summary 检查zookeeper服务状态
 * @request POST:/checkZookeeperStatus
 */
export const checkZookeeperStatus = async (
  query: { accountId: string; version: string },
  params: RequestParams = {}
): Promise<ResponseModelZookeeperEtcdStatus> => {
  const res = await _request.post({
    url: `/checkZookeeperStatus`,
    params: query,
    ...params
  })
  return doRst(res)
}
