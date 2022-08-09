/* eslint-disable */
/* tslint:disable */
import { useAxios } from '@/hooks/web/useAxios'
import {
  DomainModel,
  RemoveModel,
  ResponseModelListSimpleDomain,
  ResponseModelListSimpleInstance,
  ResponseModelSimpleDomain,
  ResponseModelString
} from './data-contracts'

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此URL创建域<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>36</th><td>Datanode is using</td></tr><tr><th>37</th><td>Datanode not found</td></tr><tr><th>38</th><td>Datanode not free to use</td></tr><tr><th>58</th><td>Domain name exists</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 01-域
 * @name CreateDomain
 * @summary 创建域
 * @request POST:/createDomain
 */
export const createDomain = async (
  operation: DomainModel,
  params: RequestParams = {}
): Promise<ResponseModelSimpleDomain> => {
  const res = await _request.post({
    url: `/createDomain`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此URL删除指定域<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>57</th><td>Domain is deleting</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>198</th><td>The resource does not exist</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>236</th><td>Domain still have storage pool</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 01-域
 * @name DeleteDomain
 * @summary 删除域
 * @request DELETE:/deleteDomain
 */
export const deleteDomain = async (
  model: DomainModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.delete({
    url: `/deleteDomain`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 得到指定域的信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 01-域
 * @name ListDomain
 * @summary 获取查看域
 * @request GET:/listDomain
 */
export const listDomain = async (
  query: { accountId: number; ids?: string; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleDomain> => {
  const res = await _request.get({
    url: `/listDomain`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此URL获取所有节点信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 01-域
 * @name ListDomainInstance
 * @summary 获取所有域节点
 * @request GET:/listDomainInstance
 */
export const listDomainInstance = async (
  accountId: number,
  version: string,
  params: RequestParams = {}
): Promise<ResponseModelListSimpleInstance> => {
  const res = await _request.get({
    url: `/listDomainInstance`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取指定域中未加入的节点信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 01-域
 * @name ListUnusedInstanceById
 * @summary 获取指定域中未加入的节点
 * @request GET:/listUnusedInstanceById
 */
export const listUnusedInstanceById = async (
  accountId: number,
  version: string,
  params: RequestParams = {}
): Promise<ResponseModelListSimpleInstance> => {
  const res = await _request.get({
    url: `/listUnusedInstanceById`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取指定域中已加入的节点信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 01-域
 * @name ListUsedInstanceById
 * @summary 获取指定域中已加入的节点
 * @request GET:/listUsedInstanceById
 */
export const listUsedInstanceById = async (
  accountId: number,
  domainId: string,
  version: string,
  params: RequestParams = {}
): Promise<ResponseModelListSimpleInstance> => {
  const res = await _request.get({
    url: `/listUsedInstanceById`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 从指定域中移除已加入的节点<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>37</th><td>Datanode not found</td></tr><tr><th>57</th><td>Domain is deleting</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>82</th><td>Fail to remove datanode from domain</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 01-域
 * @name RemoveDatanodeFromDomain
 * @summary 从指定域中移除节点
 * @request PUT:/removeDatanodeFromDomain
 */
export const removeDatanodeFromDomain = async (
  model: RemoveModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/removeDatanodeFromDomain`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 更新指定域的信息，向域中添加节点也用此接口<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>36</th><td>Datanode is using</td></tr><tr><th>37</th><td>Datanode not found</td></tr><tr><th>38</th><td>Datanode not free to use</td></tr><tr><th>57</th><td>Domain is deleting</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>110</th><td>Instance is sub-health</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 01-域
 * @name UpdateDomain
 * @summary 更新域
 * @request PUT:/updateDomain
 */
export const updateDomain = async (
  operation: DomainModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updateDomain`,
    data: operation,
    ...params
  })
  return doRst(res)
}
