/* eslint-disable */
/* tslint:disable */
import { useAxios } from "@/hooks/web/useAxios"
import {
  AccountModel,
  AssignModel,
  DeleteAccountModel,
  DeleteRoleModel,
  ResetPwdModel,
  ResponseModelAccount,
  ResponseModelListAccount,
  ResponseModelListAPIToAuthorize,
  ResponseModelListResource,
  ResponseModelListRole,
  ResponseModelSetLong,
  ResponseModelString,
  RoleModel
} from "./data-contracts"

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此 URL 对用户分配资源<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 18-用户管理
 * @name AssignResource
 * @summary 分配资源
 * @request PUT:/assignResource
 */
export const assignResource = async (
  operation: AssignModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/assignResource`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 对用户更新角色<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>25</th><td>It is forbidden to perform this operation on super administrators</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 18-用户管理
 * @name AssignRole
 * @summary 更新角色
 * @request PUT:/assignRole
 */
export const assignRole = async (operation: AssignModel, params: RequestParams = {}): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/assignRole`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 创建用户<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>5</th><td>Account already exists</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 18-用户管理
 * @name CreateAccount
 * @summary 创建用户
 * @request POST:/createAccount
 */
export const createAccount = async (user: AccountModel, params: RequestParams = {}): Promise<ResponseModelString> => {
  const res = await _request.post({
    url: `/createAccount`,
    data: user,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 创建角色<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>35</th><td>Role name already exists</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 17-角色管理
 * @name CreateRole
 * @summary 创建角色
 * @request POST:/createRole
 */
export const createRole = async (role: RoleModel, params: RequestParams = {}): Promise<ResponseModelString> => {
  const res = await _request.post({
    url: `/createRole`,
    data: role,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 删除用户<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>40</th><td>The current user can not be deleted</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 18-用户管理
 * @name DeleteAccount
 * @summary 删除用户
 * @request DELETE:/deleteAccount
 */
export const deleteAccount = async (
  model: DeleteAccountModel,
  params: RequestParams = {}
): Promise<ResponseModelSetLong> => {
  const res = await _request.delete({
    url: `/deleteAccount`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 删除角色<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>41</th><td>Delete role failed</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 17-角色管理
 * @name DeleteRole
 * @summary 删除角色
 * @request DELETE:/deleteRole
 */
export const deleteRole = async (model: DeleteRoleModel, params: RequestParams = {}): Promise<ResponseModelSetLong> => {
  const res = await _request.delete({
    url: `/deleteRole`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取所有用户<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 18-用户管理
 * @name GetAccount
 * @summary 获取所有用户
 * @request GET:/getAccount
 */
export const getAccount = async (
  query: { accountId: number; ids?: string; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListAccount> => {
  const res = await _request.get({
    url: `/getAccount`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取所有 API<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 17-角色管理
 * @name ListApi
 * @summary 获取 API
 * @request GET:/listApi
 */
export const listApi = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelListAPIToAuthorize> => {
  const res = await _request.get({
    url: `/listApi`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 获取资源<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 18-用户管理
 * @name ListResource
 * @summary  获取资源
 * @request GET:/listResource
 */
export const listResource = async (
  query: { accountId: number; version?: string },
  params: RequestParams = {}
): Promise<ResponseModelListResource> => {
  const res = await _request.get({
    url: `/listResource`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 查看所有角色<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 17-角色管理
 * @name ListRole
 * @summary 查看所有角色
 * @request GET:/listRole
 */
export const listRole = async (
  query: { accountId: number; roleIds?: string; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListRole> => {
  const res = await _request.get({
    url: `/listRole`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此URL进行用户登录<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 18-用户管理
 * @name Login
 * @summary 用户登录
 * @request PUT:/login
 */
export const login = async (usermodel: AccountModel, params: RequestParams = {}): Promise<ResponseModelAccount> => {
  const res = await _request.put({
    url: `/login`,
    data: usermodel,
    ...params
  })
  return doRst(res)
}

/**
 * @description logout<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 18-用户管理
 * @name Logout
 * @summary 退出登录
 * @request PUT:/logout
 */
export const logout = async (usermodel: AccountModel, params: RequestParams = {}): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/logout`,
    data: usermodel,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 对用户重置密码<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 18-用户管理
 * @name ResetPassword
 * @summary 重置密码
 * @request PUT:/resetPassword
 */
export const resetPassword = async (model: ResetPwdModel, params: RequestParams = {}): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/resetPassword`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 对用户更新密码<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>112</th><td>Only account owner or admin can change password</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>168</th><td>Old password is incorrect</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 18-用户管理
 * @name UpdatePassword
 * @summary  更新密码
 * @request PUT:/updatePassword
 */
export const updatePassword = async (user: AccountModel, params: RequestParams = {}): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updatePassword`,
    data: user,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 更新角色<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>24</th><td>The system role can not take any action</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>200</th><td>Role does not exist</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 17-角色管理
 * @name UpdateRole
 * @summary  更新角色
 * @request PUT:/updateRole
 */
export const updateRole = async (role: RoleModel, params: RequestParams = {}): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updateRole`,
    data: role,
    ...params
  })
  return doRst(res)
}
