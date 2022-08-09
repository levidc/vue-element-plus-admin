/* eslint-disable */
/* tslint:disable */
import { useAxios } from "@/hooks/web/useAxios"
import {
  IOLimitationApplyModel,
  IOLimitationDelModel,
  IOLimitationModel,
  MigrationApplyModel,
  MigrationDeleteModel,
  MigrationRuleModel,
  ResponseModelListDeleteIOLimitationsResponseMode,
  ResponseModelListDeleteMigrationRulesResponseModel,
  ResponseModelListIOLimitation,
  ResponseModelListQosMigrationRule,
  ResponseModelListSimpleDriverMetadata,
  ResponseModelListSimpleStoragePool,
  ResponseModelString
} from "./data-contracts"

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此 URL 应用数据访问策略到驱动上<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>13</th><td>Apply failed due to volume is read only</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>95</th><td>Failed to tell driver about access rule</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>261</th><td>The volume is being deleted</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name ApplyIoLimitation
 * @summary 数据访问策略的应用
 * @request PUT:/applyIOLimitation
 */
export const applyIOLimitation = async (
  operation: IOLimitationApplyModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/applyIOLimitation`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 应用数据重构到存储池上<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>13</th><td>Apply failed due to volume is read only</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>95</th><td>Failed to tell driver about access rule</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>261</th><td>The volume is being deleted</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name ApplyMigrationRule
 * @summary 应用数据重构策略
 * @request PUT:/applyMigrationRule
 */
export const applyMigrationRule = async (
  operation: MigrationApplyModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/applyMigrationRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 撤销驱动数据访问策略的应用<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>2</th><td>Access rule is not applied to volume</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>95</th><td>Failed to tell driver about access rule</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name CancelIoLimitation
 * @summary 撤销数据访问策略的应用
 * @request PUT:/cancelIOLimitation
 */
export const cancelIOLimitation = async (
  operation: IOLimitationApplyModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/cancelIOLimitation`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 取消应用到数据重构策略的存储池<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>2</th><td>Access rule is not applied to volume</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>95</th><td>Failed to tell driver about access rule</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name CancelMigrationRule
 * @summary 取消数据重构策略应用
 * @request PUT:/cancelMigrationRule
 */
export const cancelMigrationRule = async (
  operation: MigrationApplyModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/cancelMigrationRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 创建数据访问策略<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>104</th><td>IO limitation time interleaving</td></tr><tr><th>106</th><td>IO limitation is duplicated</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name CreateIoLimitation
 * @summary 创建数据访问策略
 * @request POST:/createIOLimitation
 */
export const createIOLimitation = async (
  operation: IOLimitationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.post({
    url: `/createIOLimitation`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 创建数据重构策略<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>141</th><td>Migration speed rule is duplicated</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name CreateMigrationRule
 * @summary 创建数据重构策略
 * @request POST:/createMigrationRule
 */
export const createMigrationRule = async (
  operation: MigrationRuleModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.post({
    url: `/createMigrationRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 删除数据访问策略<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>95</th><td>Failed to tell driver about access rule</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name DeleteIoLimitation
 * @summary 删除数据访问策略
 * @request DELETE:/deleteIOLimitation
 */
export const deleteIOLimitation = async (
  operation: IOLimitationDelModel,
  params: RequestParams = {}
): Promise<ResponseModelListDeleteIOLimitationsResponseMode> => {
  const res = await _request.delete({
    url: `/deleteIOLimitation`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 删除数据重构策略<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>22</th><td>Built-in migration rule not allowed to be deleted</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>95</th><td>Failed to tell driver about access rule</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name DeleteMigrationRule
 * @summary 删除数据重构策略
 * @request DELETE:/deleteMigrationRule
 */
export const deleteMigrationRule = async (
  operation: MigrationDeleteModel,
  params: RequestParams = {}
): Promise<ResponseModelListDeleteMigrationRulesResponseModel> => {
  const res = await _request.delete({
    url: `/deleteMigrationRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取应用指定数据重构策略的存储池<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>143</th><td>Migration speed rule not exists</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name GetAppliedStoragePool
 * @summary 获取应用数据重构策略的存储池
 * @request GET:/getAppliedStoragePool
 */
export const getAppliedStoragePool = async (
  query: { accountId: number; ruleId?: string; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleStoragePool> => {
  const res = await _request.get({
    url: `/getAppliedStoragePool`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取应用该数据访问策略的驱动<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name GetIoLimitationAppliedDriver
 * @summary 获取应用数据访问策略的驱动
 * @request GET:/getIOLimitationAppliedDriver
 */
export const getIOLimitationAppliedDriver = async (
  query: { accountId: number; limitationId?: string; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleDriverMetadata> => {
  const res = await _request.get({
    url: `/getIOLimitationAppliedDriver`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取未应用该数据访问策略的驱动<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>174</th><td>Invalid argument</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name GetIoLimitationUnappliedDriver
 * @summary 获取未应用数据访问策略的驱动
 * @request GET:/getIOLimitationUnappliedDriver
 */
export const getIOLimitationUnappliedDriver = async (
  query: { accountId: number; limitationId?: string; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleDriverMetadata> => {
  const res = await _request.get({
    url: `/getIOLimitationUnappliedDriver`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取未应用指定数据重构的存储池<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>143</th><td>Migration speed rule not exists</td></tr><tr><th>198</th><td>The resource does not exist</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name GetUnAppliedPool
 * @summary 获取未应用数据重构策略的存储池
 * @request GET:/getUnAppliedPool
 */
export const getUnAppliedPool = async (
  query: { accountId: number; ruleId?: string; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleStoragePool> => {
  const res = await _request.get({
    url: `/getUnAppliedPool`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取数据访问策略<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name ListIoLimitation
 * @summary 查看数据访问策略
 * @request GET:/listIOLimitation
 */
export const listIOLimitation = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelListIOLimitation> => {
  const res = await _request.get({
    url: `/listIOLimitation`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 查看所有数据重构策略<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name ListMigrationRule
 * @summary 查看数据重构策略
 * @request GET:/listMigrationRule
 */
export const listMigrationRule = async (
  query: { accountId: number; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListQosMigrationRule> => {
  const res = await _request.get({
    url: `/listMigrationRule`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 更新数据访问策略<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>104</th><td>IO limitation time interleaving</td></tr><tr><th>106</th><td>IO limitation is duplicated</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name UpdateIoLimitation
 * @summary 更新数据访问策略
 * @request PUT:/updateIOLimitation
 */
export const updateIOLimitation = async (
  operation: IOLimitationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updateIOLimitation`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 修改数据重构策略<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>23</th><td>Built-in migration rule not allowed to be updated</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>141</th><td>Migration speed rule is duplicated</td></tr><tr><th>143</th><td>Migration speed rule not exists</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 07-Qos策略
 * @name UpdateMigrationRule
 * @summary 修改数据重构策略
 * @request PUT:/updateMigrationRule
 */
export const updateMigrationRule = async (
  operation: MigrationRuleModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updateMigrationRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}
