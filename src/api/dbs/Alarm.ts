/* eslint-disable */
/* tslint:disable */
import { useAxios } from '@/hooks/web/useAxios'
import {
  AlertOperationModel,
  DeleteAlertModel,
  DeleteModel,
  EmailForwardModel,
  ResponseModelAlertMessageModel,
  ResponseModelAlertsModel,
  ResponseModelArrayByte,
  ResponseModelCompressedPerformanceDataResponseModel,
  ResponseModelInt,
  ResponseModelListEmailForwardItem,
  ResponseModelListGetPerformanceDataTimeSpanResponseMode,
  ResponseModelListPerformanceItem,
  ResponseModelListSimpleSnmpForwardItem,
  ResponseModelSimpleAlertTemplate,
  ResponseModelSmtpItem,
  ResponseModelString,
  RuleModel,
  SmtpModel,
  SnmpForwardModel
} from './data-contracts'

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此 URL 确认告警信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name AcknowledgeAlarm
 * @summary 确认告警信息
 * @request PUT:/acknowledgeAlarm
 */
export const acknowledgeAlarm = async (
  operation: AlertOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/acknowledgeAlarm`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 取消告警信息的确认<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name ClearAcknowledgeAlarm
 * @summary 取消告警确认
 * @request PUT:/clearAcknowledgeAlarm
 */
export const clearAcknowledgeAlarm = async (
  operation: AlertOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/clearAcknowledgeAlarm`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 清除告警<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name ClearAlarm
 * @summary 清除告警
 * @request PUT:/clearAlarm
 */
export const clearAlarm = async (
  operation: AlertOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/clearAlarm`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 创建告警模板<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>34</th><td>Alarm performance item is already exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name CreateAlarmRule
 * @summary 创建告警模板
 * @request POST:/createAlarmRule
 */
export const createAlarmRule = async (
  rules: RuleModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.post({
    url: `/createAlarmRule`,
    data: rules,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 创建告警接收邮箱<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name CreateEmailForward
 * @summary 创建告警接收邮箱
 * @request POST:/createEmailForward
 */
export const createEmailForward = async (
  model: EmailForwardModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.post({
    url: `/createEmailForward`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 删除告警<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name DeleteAlarm
 * @summary 删除告警
 * @request DELETE:/deleteAlarm
 */
export const deleteAlarm = async (
  operation: AlertOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.delete({
    url: `/deleteAlarm`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 删除告警规则<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name DeleteAlarmRule
 * @summary 删除告警规则
 * @request DELETE:/deleteAlarmRule
 */
export const deleteAlarmRule = async (
  model: DeleteAlertModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.delete({
    url: `/deleteAlarmRule`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 删除告警接收邮箱<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name DeleteEmailForward
 * @summary  删除告警接收邮箱
 * @request DELETE:/deleteEmailForward
 */
export const deleteEmailForward = async (
  model: DeleteModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.delete({
    url: `/deleteEmailForward`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取告警数量<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name GetAlarmCount
 * @summary 获取告警数量
 * @request GET:/getAlarmCount
 */
export const getAlarmCount = async (
  accountId: number,
  endTime: string,
  startTime: string,
  acknowledge?: string,
  alertClass?: string,
  alertLevel?: string,
  alertObject?: string,
  alertRuleName?: string,
  isCsi?: string,
  version?: string,
  params: RequestParams = {}
): Promise<ResponseModelInt> => {
  const res = await _request.get({
    url: `/getAlarmCount`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 查看告警详情<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name GetAlarmDetail
 * @summary 查看告警详情
 * @request GET:/getAlarmDetail
 */
export const getAlarmDetail = async (
  accountId: number,
  alertId: string,
  version?: string,
  params: RequestParams = {}
): Promise<ResponseModelAlertMessageModel> => {
  const res = await _request.get({
    url: `/getAlarmDetail`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取所有的告警模板<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name GetAlarmTemplate
 * @summary 获取所有的告警模板
 * @request GET:/getAlarmTemplate
 */
export const getAlarmTemplate = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelSimpleAlertTemplate> => {
  const res = await _request.get({
    url: `/getAlarmTemplate`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取性能统计数据查询需要的时间粒度<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name GetPerformanceDataTimeSpan
 * @summary 获取性能查询的时间粒度
 * @request GET:/getPerformanceDataTimeSpan
 */
export const getPerformanceDataTimeSpan = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelListGetPerformanceDataTimeSpanResponseMode> => {
  const res = await _request.get({
    url: `/getPerformanceDataTimeSpan`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取所有的告警性能项<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name GetPerformanceItem
 * @summary 获取告警性能
 * @request GET:/getPerformanceItem
 */
export const getPerformanceItem = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelListPerformanceItem> => {
  const res = await _request.get({
    url: `/getPerformanceItem`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取相关的性能统计数据, 将返回csv文件字节流<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>115</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name GetPerformanceStatistic
 * @summary 获取相关的性能统计数据
 * @request GET:/getPerformanceStatistic
 */
export const getPerformanceStatistic = async (
  accountId: number,
  counterKeys: string,
  sourceId: string,
  time: string,
  timeUnit: string,
  version: string,
  params: RequestParams = {}
): Promise<ResponseModelArrayByte> => {
  const res = await _request.get({
    url: `/getPerformanceStatistic`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取smtp设置条目<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name GetSmtp
 * @summary 获取smtp设置条目
 * @request GET:/getSmtp
 */
export const getSmtp = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelSmtpItem> => {
  const res = await _request.get({
    url: `/getSmtp`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取所有告警信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name ListAlarm
 * @summary 获取所有告警信息
 * @request GET:/listAlarm
 */
export const listAlarm = async (
  accountId: number,
  endTime: string,
  startTime: string,
  acknowledge?: string,
  alertClass?: string,
  alertClear?: string,
  alertLevel?: string,
  alertObject?: string,
  alertRuleName?: string,
  isCsi?: string,
  version?: string,
  params: RequestParams = {}
): Promise<ResponseModelAlertsModel> => {
  const res = await _request.get({
    url: `/listAlarm`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取告警接收邮箱<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name ListEmailForward
 * @summary 获取告警接收邮箱
 * @request GET:/listEmailForward
 */
export const listEmailForward = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelListEmailForwardItem> => {
  const res = await _request.get({
    url: `/listEmailForward`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 得到对指定性能数据查询结果<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>115</th><td>Invalid input</td></tr><tr><th>182</th><td>Performance date time cross border</td></tr><tr><th>183</th><td>Performance data time span is too big</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name ListMultiCompressedPerformanceData
 * @summary  获取性能数据
 * @request GET:/listMultiCompressedPerformanceData
 */
export const listMultiCompressedPerformanceData = async (
  accountId: number,
  counterKeysJson: string,
  endTime: string,
  performanceDataTimeUnit: string,
  sourceJson: string,
  startTime: string,
  version?: string,
  params: RequestParams = {}
): Promise<ResponseModelCompressedPerformanceDataResponseModel> => {
  const res = await _request.get({
    url: `/listMultiCompressedPerformanceData`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取 SNMP<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name ListSnmpForward
 * @summary 获取SNMP
 * @request GET:/listSnmpForward
 */
export const listSnmpForward = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleSnmpForwardItem> => {
  const res = await _request.get({
    url: `/listSnmpForward`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 合并告警规则<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name MergeAlarmRule
 * @summary 合并告警规则
 * @request PUT:/mergeAlarmRule
 */
export const mergeAlarmRule = async (
  rules: RuleModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/mergeAlarmRule`,
    data: rules,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 创建或更新 SMTP<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>177</th><td>The file path you specified is not directory</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name SaveOrUpdateSmtp
 * @summary 创建或更新SMTP
 * @request PUT:/saveOrUpdateSmtp
 */
export const saveOrUpdateSmtp = async (
  smtp: SmtpModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/saveOrUpdateSmtp`,
    data: smtp,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 启用告警模板<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name StartAlarmRule
 * @summary 启用告警模板
 * @request PUT:/startAlarmRule
 */
export const startAlarmRule = async (
  operation: AlertOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/startAlarmRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 停用告警模板<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name StopAlarmRule
 * @summary 停用告警模板
 * @request PUT:/stopAlarmRule
 */
export const stopAlarmRule = async (
  operation: AlertOperationModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/stopAlarmRule`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 更新告警规则<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name UpdateAlarmRule
 * @summary 更新告警规则
 * @request PUT:/updateAlarmRule
 */
export const updateAlarmRule = async (
  rules: RuleModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updateAlarmRule`,
    data: rules,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 更新告警接收邮箱<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name UpdateEmailForward
 * @summary 更新告警接收邮箱
 * @request PUT:/updateEmailForward
 */
export const updateEmailForward = async (
  model: EmailForwardModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updateEmailForward`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 更新 SNMP<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>75</th><td>Duplicate IP and port</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>108</th><td>Parameter is illegal</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 11-监控
 * @name UpdateSnmpForward
 * @summary 更新SNMP
 * @request PUT:/updateSnmpForward
 */
export const updateSnmpForward = async (
  snmp: SnmpForwardModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updateSnmpForward`,
    data: snmp,
    ...params
  })
  return doRst(res)
}
