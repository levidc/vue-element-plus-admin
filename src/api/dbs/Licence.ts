/* eslint-disable */
/* tslint:disable */
import { useAxios } from '@/hooks/web/useAxios'
import { LicenseModel, ResponseModelString, SimpleLicense } from './data-contracts'

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此 URL 查看许可证信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>133</th><td>License exception</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 15-许可证
 * @name GetLicenseInfo
 * @summary 查询许可证信息
 * @request GET:/getLicenseInfo
 */
export const getLicenseInfo = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<SimpleLicense> => {
  const res = await _request.get({
    url: `/getLicenseInfo`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 生成序列号<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 15-许可证
 * @name LicenseNumber
 * @summary 生成序列号
 * @request GET:/licenseNumber
 */
export const licenseNumber = async (
  accountName: string,
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.get({
    url: `/licenseNumber`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 更新序列号，注意的是，该接口的执行需要参看license 的升级文档，先完成前置步骤，最后执行此接口。<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>118</th><td>Invalid license file</td></tr><tr><th>133</th><td>License exception</td></tr><tr><th>153</th><td>There is no license</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 15-许可证
 * @name UpdateLicense
 * @summary 更新序列号
 * @request PUT:/updateLicense
 */
export const updateLicense = async (
  license: LicenseModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updateLicense`,
    data: license,
    ...params
  })
  return doRst(res)
}
