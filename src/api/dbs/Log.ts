/* eslint-disable */
/* tslint:disable */
import { useAxios } from '@/hooks/web/useAxios'
import {
  ResponseModelArrayByte,
  ResponseModelFtpInfo,
  ResponseModelListSimpleOperation
} from './data-contracts'

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此 URL 获取日志所在路径参数<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 14-系统日志
 * @name GetFtpInfo
 * @summary 获取日志所在路径参数
 * @request GET:/getFtpInfo
 */
export const getFtpInfo = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelFtpInfo> => {
  const res = await _request.get({
    url: `/getFtpInfo`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 查看操作日志<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>169</th><td>Operation not found</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 13-操作日志
 * @name ListOperation
 * @summary 查看操作日志
 * @request GET:/listOperation
 */
export const listOperation = async (
  accountId: number,
  accountName?: string,
  endTime?: string,
  operationType?: string,
  startTime?: string,
  status?: string,
  targetName?: string,
  targetType?: string,
  version?: string,
  params: RequestParams = {}
): Promise<ResponseModelListSimpleOperation> => {
  const res = await _request.get({
    url: `/listOperation`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 查询并导出操作日志<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>257</th><td>Can not supported encoding</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 13-操作日志
 * @name SaveOperationLogsToCsv
 * @summary 查询并导出操作日志
 * @request GET:/saveOperationLogsToCSV
 */
export const saveOperationLogsToCSV = async (
  accountId: number,
  accountName?: string,
  endTime?: string,
  operationType?: string,
  startTime?: string,
  status?: string,
  targetName?: string,
  targetType?: string,
  version?: string,
  params: RequestParams = {}
): Promise<ResponseModelArrayByte> => {
  const res = await _request.get({
    url: `/saveOperationLogsToCSV`,
    ...params
  })
  return doRst(res)
}
