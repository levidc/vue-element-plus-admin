/* eslint-disable */
/* tslint:disable */
import { useAxios } from "@/hooks/web/useAxios"
import {
  RebalanceOperationModel,
  RebalanceRuleModel,
  ResponseModelBoolean,
  ResponseModelListRebalanceRule,
  ResponseModelListSimpleStoragePool,
  ResponseModelString
} from "./data-contracts"

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此 URL 将存储池应用到负载均衡策略上<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>190</th><td>Pool already applied rebalance rule</td></tr><tr><th>195</th><td>Rebalance rule not exists</td></tr><tr><th>243</th><td>Storage pool not found from DB</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 08-负载均衡策略
 * @name ApplyRebalanceRule
 * @summary 负载均衡策略的应用
 * @request PUT:/applyRebalanceRule
 */
export const applyRebalanceRule = async (
  operation: RebalanceOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/applyRebalanceRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 撤销应用到负载均衡策略上的存储池<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>195</th><td>Rebalance rule not exists</td></tr><tr><th>243</th><td>Storage pool not found from DB</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 08-负载均衡策略
 * @name CancelAppliedRebalanceRule
 * @summary 撤销负载均衡策略的应用
 * @request PUT:/cancelAppliedRebalanceRule
 */
export const cancelAppliedRebalanceRule = async (
  operation: RebalanceOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/cancelAppliedRebalanceRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 创建负载均衡策略<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>190</th><td>Pool already applied rebalance rule</td></tr><tr><th>194</th><td>Rebalance rule is existing</td></tr><tr><th>195</th><td>Rebalance rule not exists</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 08-负载均衡策略
 * @name CreateRebalanceRule
 * @summary 创建负载均衡策略
 * @request POST:/createRebalanceRule
 */
export const createRebalanceRule = async (
  operation: RebalanceRuleModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.post({
    url: `/createRebalanceRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 删除负载均衡策略<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>195</th><td>Rebalance rule not exists</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 08-负载均衡策略
 * @name DeleteRebalanceRule
 * @summary 删除负载均衡策略
 * @request DELETE:/deleteRebalanceRule
 */
export const deleteRebalanceRule = async (
  operation: RebalanceOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelListRebalanceRule> => {
  const res = await _request.delete({
    url: `/deleteRebalanceRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取应用到负载均衡策略上的存储池<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>195</th><td>Rebalance rule not exists</td></tr><tr><th>243</th><td>Storage pool not found from DB</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 08-负载均衡策略
 * @name GetAppliedRebalanceRulePool
 * @summary 获取应用负载均衡策略的存储池
 * @request GET:/getAppliedRebalanceRulePool
 */
export const getAppliedRebalanceRulePool = async (
  query: { accountId: number; ruleId?: string; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleStoragePool> => {
  const res = await _request.get({
    url: `/getAppliedRebalanceRulePool`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取未应用负载均衡策略的存储池<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>190</th><td>Pool already applied rebalance rule</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 08-负载均衡策略
 * @name GetUnAppliedRebalanceRulePool
 * @summary 获取未应用负载均衡策略的存储池
 * @request GET:/getUnAppliedRebalanceRulePool
 */
export const getUnAppliedRebalanceRulePool = async (
  query: { accountId: number; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleStoragePool> => {
  const res = await _request.get({
    url: `/getUnAppliedRebalanceRulePool`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取负载均衡策略<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 08-负载均衡策略
 * @name ListRebalanceRule
 * @summary 查看负载均衡策略
 * @request GET:/listRebalanceRule
 */
export const listRebalanceRule = async (
  query: { accountId: number; ruleIds?: string; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListRebalanceRule> => {
  const res = await _request.get({
    url: `/listRebalanceRule`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取当前负载均衡的状态<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 16-负载均衡
 * @name RebalanceStatus
 * @summary 获取当前负载均衡的状态
 * @request GET:/rebalanceStatus
 */
export const rebalanceStatus = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelBoolean> => {
  const res = await _request.get({
    url: `/rebalanceStatus`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 关闭负载均衡<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 16-负载均衡
 * @name ShutdownRebalance
 * @summary 关闭负载均衡
 * @request PUT:/shutdownRebalance
 */
export const shutdownRebalance = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/shutdownRebalance`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 开启负载均衡<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 16-负载均衡
 * @name StartRebalance
 * @summary 开启负载均衡
 * @request PUT:/startRebalance
 */
export const startRebalance = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/startRebalance`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 更新数据访问策略<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>194</th><td>Rebalance rule is existing</td></tr><tr><th>195</th><td>Rebalance rule not exists</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 08-负载均衡策略
 * @name UpdateRebalanceRule
 * @summary 更新负载均衡策略
 * @request PUT:/updateRebalanceRule
 */
export const updateRebalanceRule = async (
  operation: RebalanceRuleModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updateRebalanceRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}
