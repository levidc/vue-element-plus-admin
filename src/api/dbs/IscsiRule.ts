/* eslint-disable */
/* tslint:disable */
import { useAxios } from '@/hooks/web/useAxios'
import {
  DeleteModel,
  IscsiAccessRulesModel,
  OpenstackModel,
  OperationModel,
  PYDAccessRulesModel,
  ResponseModelListDeleteIscsiAccessRulesResult,
  ResponseModelListSimpleDriverMetadata,
  ResponseModelListSimpleIscsiAccessRule,
  ResponseModelListSimpleVolumeAccessRule,
  ResponseModelListSimpleVolumeMetadata,
  ResponseModelSimpleIscsiAccessRule,
  ResponseModelString,
  ResponseModelVolumeAccessRuleOperationResult
} from './data-contracts'

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此 URL 将一个访问规则应用到多个ISCSI驱动<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>12</th><td>Apply failed, due to conflict</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>124</th><td>ISCSI rule is not found</td></tr><tr><th>125</th><td>ISCSI access rule is being operated</td></tr><tr><th>126</th><td>ISCSI is deleted</td></tr><tr><th>127</th><td>ISCSI not found</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name ApplyIscsiAccessRuleOnIscsi
 * @summary 一个访问规则应用到多个ISCSI驱动
 * @request PUT:/applyIscsiAccessRuleOnIscsi
 */
export const applyIscsiAccessRuleOnIscsi = async (
  operation: OperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/applyIscsiAccessRuleOnIscsi`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 将多个访问规则应用到指定的ISCSI驱动上<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>12</th><td>Apply failed, due to conflict</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>95</th><td>Failed to tell driver about access rule</td></tr><tr><th>126</th><td>ISCSI is deleted</td></tr><tr><th>127</th><td>ISCSI not found</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name ApplyIscsiAccessRules
 * @summary 将多个访问规则应用到指定的ISCSI驱动上
 * @request PUT:/applyIscsiAccessRules
 */
export const applyIscsiAccessRules = async (
  model: OpenstackModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/applyIscsiAccessRules`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 将卷应用到PYD驱动的访问控制<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>3</th><td>Access rule is not found</td></tr><tr><th>4</th><td>Access rule is being operated</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>13</th><td>Apply failed due to volume is read only</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>261</th><td>The volume is being deleted</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name ApplyVolumeAccessRuleOnVolume
 * @summary PYD驱动的访问控制应用
 * @request PUT:/applyVolumeAccessRuleOnVolume
 */
export const applyVolumeAccessRuleOnVolume = async (
  operation: OperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/applyVolumeAccessRuleOnVolume`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 撤销应用到ISCSI驱动访问控制的驱动<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>2</th><td>Access rule is not applied to volume</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>124</th><td>ISCSI rule is not found</td></tr><tr><th>125</th><td>ISCSI access rule is being operated</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name CancelIscsiAccessRuleAllApplied
 * @summary ISCSI驱动访问控制的撤销
 * @request PUT:/cancelIscsiAccessRuleAllApplied
 */
export const cancelIscsiAccessRuleAllApplied = async (
  operation: OperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/cancelIscsiAccessRuleAllApplied`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 撤销应用到PYD驱动访问控制的卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>2</th><td>Access rule is not applied to volume</td></tr><tr><th>3</th><td>Access rule is not found</td></tr><tr><th>4</th><td>Access rule is being operated</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name CancelVolAccessRuleAllApplied
 * @summary 撤销PYD驱动的访问控制
 * @request PUT:/cancelVolAccessRuleAllApplied
 */
export const cancelVolAccessRuleAllApplied = async (
  operation: OperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/cancelVolAccessRuleAllApplied`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以创建PYD驱动的访问控制<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>259</th><td>This access rule is duplicated</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name CreateAccessRule
 * @summary 创建PYD驱动的访问控制
 * @request POST:/createAccessRule
 */
export const createAccessRule = async (
  pyd: PYDAccessRulesModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.post({
    url: `/createAccessRule`,
    data: pyd,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 创建ISCSI驱动访问控制<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>28</th><td>CHAP user and password must be different</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>121</th><td>ISCSI access rule already exists</td></tr><tr><th>123</th><td>ISCSI access rule format error</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name CreateIscsiAccessRule
 * @summary 创建ISCSI驱动访问控制
 * @request POST:/createIscsiAccessRule
 */
export const createIscsiAccessRule = async (
  iscsi: IscsiAccessRulesModel,
  params: RequestParams = {}
): Promise<ResponseModelSimpleIscsiAccessRule> => {
  const res = await _request.post({
    url: `/createIscsiAccessRule`,
    data: iscsi,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以删除PYD驱动的访问控制<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>198</th><td>The resource does not exist</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name DeleteAccessRule
 * @summary 删除PYD驱动的访问控制
 * @request DELETE:/deleteAccessRule
 */
export const deleteAccessRule = async (
  operation: DeleteModel,
  params: RequestParams = {}
): Promise<ResponseModelVolumeAccessRuleOperationResult> => {
  const res = await _request.delete({
    url: `/deleteAccessRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以删除ISCSI驱动访问控制<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>95</th><td>Failed to tell driver about access rule</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name DeleteIscsiAccessRule
 * @summary 删除ISCSI驱动访问控制
 * @request DELETE:/deleteIscsiAccessRule
 */
export const deleteIscsiAccessRule = async (
  operation: DeleteModel,
  params: RequestParams = {}
): Promise<ResponseModelListDeleteIscsiAccessRulesResult> => {
  const res = await _request.delete({
    url: `/deleteIscsiAccessRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取所有已应用到PYD驱动访问控制上的卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name GetAppliedVolume
 * @summary 获取已应用到PYD驱动访问控制上的卷
 * @request GET:/getAppliedVolume
 */
export const getAppliedVolume = async (
  query: { accountId: number; ruleId?: string; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleVolumeMetadata> => {
  const res = await _request.get({
    url: `/getAppliedVolume`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取所有已应用ISCSI驱动访问控制的驱动，得到驱动类型为ISCSI的驱动<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name GetDriversBeAppliedOneIscsiRule
 * @summary  获取已应用ISCSI驱动访问控制的驱动
 * @request GET:/getDriversBeAppliedOneIscsiRule
 */
export const getDriversBeAppliedOneIscsiRule = async (
  query: { accountId: number; ruleId?: string; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleDriverMetadata> => {
  const res = await _request.get({
    url: `/getDriversBeAppliedOneIscsiRule`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取所有未应用指定ISCSI驱动的驱动，得到驱动类型为ISCSI的驱动<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>174</th><td>Invalid argument</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name GetDriversBeUnappliedOneIscsiRule
 * @summary 获取未应用ISCSI驱动的驱动
 * @request GET:/getDriversBeUnappliedOneIscsiRule
 */
export const getDriversBeUnappliedOneIscsiRule = async (
  accountId: string,
  version: string,
  ruleId?: string,
  params: RequestParams = {}
): Promise<ResponseModelListSimpleDriverMetadata> => {
  const res = await _request.get({
    url: `/getDriversBeUnappliedOneIscsiRule`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 获取应用到指定卷驱动上的所有访问规则<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name GetIscsiAccessRulesAppliedOnOneDriver
 * @summary 获取应用到指定卷驱动上的所有访问规则
 * @request GET:/getIscsiAccessRulesAppliedOnOneDriver
 */
export const getIscsiAccessRulesAppliedOnOneDriver = async (
  query: {
    accountId: number
    driverContainerId?: string
    driverType?: string
    snapshotId?: string
    version: string
    volumeId?: string
  },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleIscsiAccessRule> => {
  const res = await _request.get({
    url: `/getIscsiAccessRulesAppliedOnOneDriver`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取所有未应用指定PYD驱动访问控制的卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>198</th><td>The resource does not exist</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name GetUnappliedVolume
 * @summary 获取未应用PYD驱动访问控制的卷
 * @request GET:/getUnappliedVolume
 */
export const getUnappliedVolume = async (
  query: { accountId: number; ruleId?: string; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleVolumeMetadata> => {
  const res = await _request.get({
    url: `/getUnappliedVolume`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 获取应用到指定卷上的所有访问控制<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name GetVolumeAccessRules
 * @summary 获取应用到指定卷上的所有访问控制
 * @request GET:/getVolumeAccessRules
 */
export const getVolumeAccessRules = async (
  query: { accountId: number; version: string; volumeId?: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleVolumeAccessRule> => {
  const res = await _request.get({
    url: `/getVolumeAccessRules`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以查看所有PYD驱动的访问控制<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name ListAccessRule
 * @summary 查看PYD驱动的访问控制
 * @request GET:/listAccessRule
 */
export const listAccessRule = async (
  query: { accountId: number; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleVolumeAccessRule> => {
  const res = await _request.get({
    url: `/listAccessRule`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取所有ISCSI驱动访问控制<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 05-访问控制
 * @name ListIscsiAccessRule
 * @summary 获取所有ISCSI驱动访问控制
 * @request GET:/listIscsiAccessRule
 */
export const listIscsiAccessRule = async (
  query: { accountId: number; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleIscsiAccessRule> => {
  const res = await _request.get({
    url: `/listIscsiAccessRule`,
    params: query,
    ...params
  })
  return doRst(res)
}
