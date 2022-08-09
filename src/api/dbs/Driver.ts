/* eslint-disable */
/* tslint:disable */
import { useAxios } from "@/hooks/web/useAxios"
import {
  DriverMetadataModel,
  MountVolumeModel,
  ResponseModelListSimpleDriverMetadata,
  ResponseModelListString,
  ResponseModelString,
  UnMountVolumeModel
} from "./data-contracts"

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此 URL 可以得到所有驱动信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>174</th><td>Invalid argument</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 09-驱动
 * @name ListAllDriver
 * @summary 查看驱动信息
 * @request GET:/listAllDriver
 */
export const listAllDriver = async (
  accountId: number,
  version: string,
  driverHost?: string,
  driverType?: string,
  drivercontainerHost?: string,
  snapshotId?: string,
  volumeId?: string,
  params: RequestParams = {}
): Promise<ResponseModelListSimpleDriverMetadata> => {
  const res = await _request.get({
    url: `/listAllDriver`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 对指定的卷挂载驱动, 返回所有挂载的驱动的名称<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>60</th><td>Driver Amount and host not fit</td></tr><tr><th>63</th><td>Driver host can not use</td></tr><tr><th>66</th><td>Driver is upgrading, please try later</td></tr><tr><th>68</th><td>Driver is being launched</td></tr><tr><th>69</th><td>Driver name exists</td></tr><tr><th>71</th><td>Driver type is conflict</td></tr><tr><th>73</th><td>Driver is being unmounted</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>80</th><td>Driver already exists</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>166</th><td>Volume is not root volume</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>222</th><td>Snapshot is being created</td></tr><tr><th>223</th><td>Snapshot is being deleted</td></tr><tr><th>230</th><td>Snapshot is being rollback</td></tr><tr><th>244</th><td>The ability of system cpu is not enough</td></tr><tr><th>245</th><td>The memory size is not enough</td></tr><tr><th>251</th><td>Has too many drivers</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>255</th><td>Unknown IPv4 host</td></tr><tr><th>256</th><td>Unknown IPv6 host</td></tr><tr><th>261</th><td>The volume is being deleted</td></tr><tr><th>264</th><td>Volume is deleting</td></tr><tr><th>277</th><td>Volume not allowed launch more than one driver</td></tr><tr><th>280</th><td>Volume is not available</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>284</th><td>Volume is being operated</td></tr><tr><th>287</th><td>Volume is being rollback</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr><tr><th>299</th><td>Volume not allowed launch more than one driver this time</td></tr></table>
 *
 * @tags 09-驱动
 * @name Mount
 * @summary 对卷挂载驱动
 * @request PUT:/mount
 */
export const mount = async (model: MountVolumeModel, params: RequestParams = {}): Promise<ResponseModelListString> => {
  const res = await _request.put({
    url: `/mount`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 设置驱动的chap认证<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 09-驱动
 * @name SetChapControl
 * @summary 驱动的chap认证
 * @request PUT:/setChapControl
 */
export const setChapControl = async (
  operation: DriverMetadataModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/setChapControl`,
    data: operation,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 卸载指定卷的驱动<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>61</th><td>The service driverContainer is INC</td></tr><tr><th>65</th><td>Driver is launching, please try later</td></tr><tr><th>66</th><td>Driver is upgrading, please try later</td></tr><tr><th>68</th><td>Driver is being launched</td></tr><tr><th>73</th><td>Driver is being unmounted</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>79</th><td>There are connected clients</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>152</th><td>There is no driver launched</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>222</th><td>Snapshot is being created</td></tr><tr><th>223</th><td>Snapshot is being deleted</td></tr><tr><th>230</th><td>Snapshot is being rollback</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>253</th><td>Network anomaly, maybe the operation is failed</td></tr><tr><th>264</th><td>Volume is deleting</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>284</th><td>Volume is being operated</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr><tr><th>304</th><td>driver still report when remove this driver info</td></tr></table>
 *
 * @tags 09-驱动
 * @name Unmount
 * @summary 卸载卷的驱动
 * @request PUT:/unmount
 */
export const unmount = async (model: UnMountVolumeModel, params: RequestParams = {}): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/unmount`,
    data: model,
    ...params
  })
  return doRst(res)
}
