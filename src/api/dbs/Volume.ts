/* eslint-disable */
/* tslint:disable */
import { useAxios } from '@/hooks/web/useAxios'
import {
  CloneVolumeModel,
  CopyVolumeModel,
  CsiVolumeModel,
  ExtendVolumeModel,
  MoveVolumeModel,
  RecycleModel,
  ResponseModelCsiVolumeInfo,
  ResponseModelInt,
  ResponseModelListSimpleDriverMetadata,
  ResponseModelListSimpleSegmentMetadata,
  ResponseModelListSimpleVolumeMetadata,
  ResponseModelLong,
  ResponseModelSimpleVolumeMetadata,
  ResponseModelString,
  SnapshotVolumeModel,
  VolumeModel
} from './data-contracts'

const _request = useAxios()
export type RequestParams = Record<string, string | number>

const doRst = (res) => {
  return res && res.data
}

/**
 * @description 使用此URI可取消延迟删除卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name CancelDeleteVolumeDelay
 * @summary 取消延迟删除
 * @request PUT:/cancelDeleteVolumeDelay
 */
export const cancelDeleteVolumeDelay = async (
  accountId: number,
  volumeId: number,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/cancelDeleteVolumeDelay`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以对单个卷进行克隆或者创建可写快照<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>20</th><td>Invalid license token</td></tr><tr><th>57</th><td>Domain is deleting</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>68</th><td>Driver is being launched</td></tr><tr><th>73</th><td>Driver is being unmounted</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>133</th><td>License exception</td></tr><tr><th>152</th><td>There is no driver launched</td></tr><tr><th>160</th><td>There is no enough group</td></tr><tr><th>161</th><td>There is no enough license token</td></tr><tr><th>162</th><td>There is no enough normal group</td></tr><tr><th>163</th><td>There is no enough space</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>202</th><td>Root volume is being deleted</td></tr><tr><th>203</th><td>Root volume not found</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>221</th><td>The number of snapshots exceeds the upper limit</td></tr><tr><th>222</th><td>Snapshot is being created</td></tr><tr><th>223</th><td>Snapshot is being deleted</td></tr><tr><th>224</th><td>The description size of snapshot is too long</td></tr><tr><th>225</th><td>Snapshot is existing</td></tr><tr><th>227</th><td>Snapshot name is existing</td></tr><tr><th>228</th><td>The name size of snapshot is too long</td></tr><tr><th>229</th><td>Snapshot not found</td></tr><tr><th>230</th><td>Snapshot is being rollback</td></tr><tr><th>231</th><td>Snapshot version is mismatch</td></tr><tr><th>240</th><td>Storage pool is being deleting</td></tr><tr><th>242</th><td>Storage pool not found in domain</td></tr><tr><th>243</th><td>Storage pool not found from DB</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>258</th><td>The license that has been installed is useless</td></tr><tr><th>264</th><td>Volume is deleting</td></tr><tr><th>265</th><td>Volume is already exist</td></tr><tr><th>269</th><td>Volume is moving online, Please prohibit other operations</td></tr><tr><th>279</th><td>Volume name is already exists</td></tr><tr><th>280</th><td>Volume is not available</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>284</th><td>Volume is being operated</td></tr><tr><th>287</th><td>Volume is being rollback</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr><tr><th>297</th><td>Counter key is illegal</td></tr></table>
 *
 * @tags 03-卷
 * @name CloneVolume
 * @summary 克隆卷
 * @request POST:/cloneVolume
 */
export const cloneVolume = async (
  model: CloneVolumeModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.post({
    url: `/cloneVolume`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以对卷进行复制，注意：卷不能挂载驱动<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>42</th><td>the destnation volume can't be found</td></tr><tr><th>43</th><td>The destnation volume already has driver, please umount it first</td></tr><tr><th>44</th><td>The destination is copying</td></tr><tr><th>45</th><td>Destination volume not available</td></tr><tr><th>46</th><td>The destnation volume is smaller than origin volume</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>170</th><td>The origin volume can't be found</td></tr><tr><th>171</th><td>The original volume already has driver, please umount it first</td></tr><tr><th>172</th><td>Origin volume not available</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>269</th><td>Volume is moving online, Please prohibit other operations</td></tr><tr><th>279</th><td>Volume name is already exists</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name CopyVolumeToExistVolume
 * @summary 复制卷
 * @request PUT:/copyVolumeToExistVolume
 */
export const copyVolumeToExistVolume = async (
  model: CopyVolumeModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/copyVolumeToExistVolume`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以创建快照卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>20</th><td>Invalid license token</td></tr><tr><th>57</th><td>Domain is deleting</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>68</th><td>Driver is being launched</td></tr><tr><th>73</th><td>Driver is being unmounted</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>133</th><td>License exception</td></tr><tr><th>152</th><td>There is no driver launched</td></tr><tr><th>160</th><td>There is no enough group</td></tr><tr><th>161</th><td>There is no enough license token</td></tr><tr><th>162</th><td>There is no enough normal group</td></tr><tr><th>163</th><td>There is no enough space</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>202</th><td>Root volume is being deleted</td></tr><tr><th>203</th><td>Root volume not found</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>221</th><td>The number of snapshots exceeds the upper limit</td></tr><tr><th>222</th><td>Snapshot is being created</td></tr><tr><th>223</th><td>Snapshot is being deleted</td></tr><tr><th>224</th><td>The description size of snapshot is too long</td></tr><tr><th>225</th><td>Snapshot is existing</td></tr><tr><th>227</th><td>Snapshot name is existing</td></tr><tr><th>228</th><td>The name size of snapshot is too long</td></tr><tr><th>229</th><td>Snapshot not found</td></tr><tr><th>230</th><td>Snapshot is being rollback</td></tr><tr><th>231</th><td>Snapshot version is mismatch</td></tr><tr><th>240</th><td>Storage pool is being deleting</td></tr><tr><th>242</th><td>Storage pool not found in domain</td></tr><tr><th>243</th><td>Storage pool not found from DB</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>258</th><td>The license that has been installed is useless</td></tr><tr><th>264</th><td>Volume is deleting</td></tr><tr><th>265</th><td>Volume is already exist</td></tr><tr><th>269</th><td>Volume is moving online, Please prohibit other operations</td></tr><tr><th>279</th><td>Volume name is already exists</td></tr><tr><th>280</th><td>Volume is not available</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>284</th><td>Volume is being operated</td></tr><tr><th>287</th><td>Volume is being rollback</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr><tr><th>297</th><td>Counter key is illegal</td></tr></table>
 *
 * @tags 03-卷
 * @name CreateSnapshotVolume
 * @summary 创建快照卷
 * @request POST:/createSnapshotVolume
 */
export const createSnapshotVolume = async (
  model: SnapshotVolumeModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.post({
    url: `/createSnapshotVolume`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL创建新卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>20</th><td>Invalid license token</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>160</th><td>There is no enough group</td></tr><tr><th>161</th><td>There is no enough license token</td></tr><tr><th>162</th><td>There is no enough normal group</td></tr><tr><th>163</th><td>There is no enough space</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>242</th><td>Storage pool not found in domain</td></tr><tr><th>243</th><td>Storage pool not found from DB</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>258</th><td>The license that has been installed is useless</td></tr><tr><th>265</th><td>Volume is already exist</td></tr><tr><th>279</th><td>Volume name is already exists</td></tr><tr><th>283</th><td>Volume size is not integral multiple of segment size</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr><tr><th>295</th><td>Cache type not support</td></tr><tr><th>296</th><td>WTS type not support</td></tr></table>
 *
 * @tags 03-卷
 * @name CreateVolume
 * @summary  创建卷
 * @request POST:/createVolume
 */
export const createVolume = async (
  model: VolumeModel,
  params: RequestParams = {}
): Promise<ResponseModelSimpleVolumeMetadata> => {
  const res = await _request.post({
    url: `/createVolume`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此URL按卷ID删除指定的卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>68</th><td>Driver is being launched</td></tr><tr><th>73</th><td>Driver is being unmounted</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>80</th><td>Driver already exists</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>130</th><td>Please unmount driver first</td></tr><tr><th>163</th><td>There is no enough space</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>198</th><td>The resource does not exist</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>222</th><td>Snapshot is being created</td></tr><tr><th>223</th><td>Snapshot is being deleted</td></tr><tr><th>230</th><td>Snapshot is being rollback</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>261</th><td>The volume is being deleted</td></tr><tr><th>264</th><td>Volume is deleting</td></tr><tr><th>268</th><td>Volume is extending</td></tr><tr><th>269</th><td>Volume is moving online, Please prohibit other operations</td></tr><tr><th>271</th><td>Volume is being moved</td></tr><tr><th>272</th><td>Volume is cloning</td></tr><tr><th>274</th><td>Volume is being copy</td></tr><tr><th>276</th><td>Volume is moving</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>284</th><td>Volume is being operated</td></tr><tr><th>287</th><td>Volume is being rollback</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name DeleteVolume
 * @summary 删除卷
 * @request DELETE:/deleteVolume
 */
export const deleteVolume = async (
  model: VolumeModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.delete({
    url: `/deleteVolume`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此URI延迟删除卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>261</th><td>The volume is being deleted</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name DeleteVolumeDelay
 * @summary 延迟删除
 * @request PUT:/deleteVolumeDelay
 */
export const deleteVolumeDelay = async (
  accountId: number,
  delayDate: string,
  volumeId: number,
  volumeName: string,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/deleteVolumeDelay`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 对指定卷的大小进行扩展<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>20</th><td>Invalid license token</td></tr><tr><th>57</th><td>Domain is deleting</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>133</th><td>License exception</td></tr><tr><th>160</th><td>There is no enough group</td></tr><tr><th>161</th><td>There is no enough license token</td></tr><tr><th>162</th><td>There is no enough normal group</td></tr><tr><th>163</th><td>There is no enough space</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>202</th><td>Root volume is being deleted</td></tr><tr><th>203</th><td>Root volume not found</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>240</th><td>Storage pool is being deleting</td></tr><tr><th>242</th><td>Storage pool not found in domain</td></tr><tr><th>243</th><td>Storage pool not found from DB</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>258</th><td>The license that has been installed is useless</td></tr><tr><th>265</th><td>Volume is already exist</td></tr><tr><th>269</th><td>Volume is moving online, Please prohibit other operations</td></tr><tr><th>272</th><td>Volume is cloning</td></tr><tr><th>274</th><td>Volume is being copy</td></tr><tr><th>280</th><td>Volume is not available</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>283</th><td>Volume size is not integral multiple of segment size</td></tr><tr><th>287</th><td>Volume is being rollback</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr><tr><th>300</th><td>The original size of volume isn't matched</td></tr></table>
 *
 * @tags 03-卷
 * @name ExtendVolume
 * @summary 扩展卷
 * @request PUT:/extendVolume
 */
export const extendVolume = async (
  model: ExtendVolumeModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/extendVolume`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以得指定csi卷的信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name GetCsiVolumeInfo
 * @summary 查看csi卷信息
 * @request GET:/getCsiVolumeInfo
 */
export const getCsiVolumeInfo = async (
  query: { accountId: number; version: string; volumeName?: string },
  params: RequestParams = {}
): Promise<ResponseModelCsiVolumeInfo> => {
  const res = await _request.get({
    url: `/getCsiVolumeInfo`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以得到所有卷的信息列表<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name GetMultipleVolumes
 * @summary 查看所有卷信息
 * @request GET:/getMultipleVolumes
 */
export const getMultipleVolumes = async (
  query: { accountId: number; ids?: string; version: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleVolumeMetadata> => {
  const res = await _request.get({
    url: `/getMultipleVolumes`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 对查看指定卷的 segment 信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name GetSegmentList
 * @summary 查看卷的segment信息
 * @request GET:/getSegmentList
 */
export const getSegmentList = async (
  accountId: number,
  endSegmentIndex: string,
  id: number,
  startSegmentIndex: string,
  version: string,
  params: RequestParams = {}
): Promise<ResponseModelListSimpleSegmentMetadata> => {
  const res = await _request.get({
    url: `/getSegmentList`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 查看 segment 的大小<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name GetSegmentSize
 * @summary  获取segment的大小
 * @request GET:/getSegmentSize
 */
export const getSegmentSize = async (
  query: { accountId: number; version: string },
  params: RequestParams = {}
): Promise<ResponseModelLong> => {
  const res = await _request.get({
    url: `/getSegmentSize`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用URL获取卷信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name GetVolumeByFullName
 * @summary 获取卷信息
 * @request GET:/getVolumeByFullName
 */
export const getVolumeByFullName = async (
  accountId: number,
  name?: string,
  version?: string,
  params: RequestParams = {}
): Promise<ResponseModelSimpleVolumeMetadata> => {
  const res = await _request.get({
    url: `/getVolumeByFullName`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以通过卷的名称得到对应的卷的信息列表<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name GetVolumeByName
 * @summary 查看单个卷信息(通过卷名)
 * @request GET:/getVolumeByName
 */
export const getVolumeByName = async (
  accountId: number,
  name: string,
  version: string,
  params: RequestParams = {}
): Promise<ResponseModelListSimpleVolumeMetadata> => {
  const res = await _request.get({
    url: `/getVolumeByName`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以得指定csi卷格式化的信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name GetVolumeFormatStep
 * @summary 查看卷格式化信息
 * @request GET:/getVolumeFormatStep
 */
export const getVolumeFormatStep = async (
  query: { accountId: number; version: string; volumeId?: string },
  params: RequestParams = {}
): Promise<ResponseModelInt> => {
  const res = await _request.get({
    url: `/getVolumeFormatStep`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以通过卷的 id 得到对应的卷的信息列表<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>198</th><td>The resource does not exist</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name GetVolumeWithSegmentById
 * @summary 查看单个卷信息(返回卷信息带有segment信息)
 * @request GET:/getVolumeWithSegmentById
 */
export const getVolumeWithSegmentById = async (
  accountId: number,
  version: string,
  volumeId: number,
  params: RequestParams = {}
): Promise<ResponseModelSimpleVolumeMetadata> => {
  const res = await _request.get({
    url: `/getVolumeWithSegmentById`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以通过卷的 id 得到对应的卷的信息列表<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name GetVolumeWithoutSegmentById
 * @summary 查看单个卷信息(返回卷信息不带有segment信息)
 * @request GET:/getVolumeWithoutSegmentById
 */
export const getVolumeWithoutSegmentById = async (
  accountId: number,
  version: string,
  volumeId: number,
  params: RequestParams = {}
): Promise<ResponseModelSimpleVolumeMetadata> => {
  const res = await _request.get({
    url: `/getVolumeWithoutSegmentById`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 通过URL基于快照创建克隆卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>20</th><td>Invalid license token</td></tr><tr><th>57</th><td>Domain is deleting</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>133</th><td>License exception</td></tr><tr><th>160</th><td>There is no enough group</td></tr><tr><th>161</th><td>There is no enough license token</td></tr><tr><th>162</th><td>There is no enough normal group</td></tr><tr><th>163</th><td>There is no enough space</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>202</th><td>Root volume is being deleted</td></tr><tr><th>203</th><td>Root volume not found</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>229</th><td>Snapshot not found</td></tr><tr><th>240</th><td>Storage pool is being deleting</td></tr><tr><th>242</th><td>Storage pool not found in domain</td></tr><tr><th>243</th><td>Storage pool not found from DB</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>258</th><td>The license that has been installed is useless</td></tr><tr><th>265</th><td>Volume is already exist</td></tr><tr><th>269</th><td>Volume is moving online, Please prohibit other operations</td></tr><tr><th>279</th><td>Volume name is already exists</td></tr><tr><th>280</th><td>Volume is not available</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>287</th><td>Volume is being rollback</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name LinkClone
 * @summary 基于快照创建克隆卷
 * @request POST:/linkClone
 */
export const linkClone = async (
  model: CloneVolumeModel,
  params: RequestParams = {}
): Promise<ResponseModelLong> => {
  const res = await _request.post({
    url: `/linkClone`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 通过URL获取所以的驱动信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name ListDriverByVolumeId
 * @summary 通过卷id获取驱动
 * @request GET:/listDriverByVolumeId
 */
export const listDriverByVolumeId = async (
  accountId: number,
  version?: string,
  volumeId?: string,
  params: RequestParams = {}
): Promise<ResponseModelListSimpleDriverMetadata> => {
  const res = await _request.get({
    url: `/listDriverByVolumeId`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此URI获取垃圾箱中的卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>198</th><td>The resource does not exist</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name ListRecycleVolumeInfo
 * @summary 显示回收站卷信息
 * @request GET:/listRecycleVolumeInfo
 */
export const listRecycleVolumeInfo = async (
  accountId: number,
  volumeId: number,
  query: { version: string },
  params: RequestParams = {}
): Promise<ResponseModelListSimpleVolumeMetadata> => {
  const res = await _request.get({
    url: `/listRecycleVolumeInfo`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以对卷进行迁移<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>20</th><td>Invalid license token</td></tr><tr><th>57</th><td>Domain is deleting</td></tr><tr><th>59</th><td>Domain doesn't exist</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>133</th><td>License exception</td></tr><tr><th>160</th><td>There is no enough group</td></tr><tr><th>161</th><td>There is no enough license token</td></tr><tr><th>162</th><td>There is no enough normal group</td></tr><tr><th>163</th><td>There is no enough space</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>229</th><td>Snapshot not found</td></tr><tr><th>234</th><td>The source volume already has driver, please umount it first</td></tr><tr><th>240</th><td>Storage pool is being deleting</td></tr><tr><th>242</th><td>Storage pool not found in domain</td></tr><tr><th>243</th><td>Storage pool not found from DB</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>258</th><td>The license that has been installed is useless</td></tr><tr><th>265</th><td>Volume is already exist</td></tr><tr><th>269</th><td>Volume is moving online, Please prohibit other operations</td></tr><tr><th>279</th><td>Volume name is already exists</td></tr><tr><th>280</th><td>Volume is not available</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>287</th><td>Volume is being rollback</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name MoveVolume
 * @summary 迁移卷
 * @request PUT:/moveVolume
 */
export const moveVolume = async (
  model: MoveVolumeModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/moveVolume`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此URI将卷移动到垃圾箱<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>6</th><td>Account not found</td></tr><tr><th>68</th><td>Driver is being launched</td></tr><tr><th>73</th><td>Driver is being unmounted</td></tr><tr><th>130</th><td>Please unmount driver first</td></tr><tr><th>189</th><td>Insufficient current user permissions</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>261</th><td>The volume is being deleted</td></tr><tr><th>264</th><td>Volume is deleting</td></tr><tr><th>268</th><td>Volume is extending</td></tr><tr><th>269</th><td>Volume is moving online, Please prohibit other operations</td></tr><tr><th>271</th><td>Volume is being moved</td></tr><tr><th>272</th><td>Volume is cloning</td></tr><tr><th>274</th><td>Volume is being copy</td></tr><tr><th>276</th><td>Volume is moving</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>287</th><td>Volume is being rollback</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name MoveVolumeToRecycle
 * @summary 把卷放回收站
 * @request PUT:/moveVolumeToRecycle
 */
export const moveVolumeToRecycle = async (
  accountId: number,
  volumeId: number,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/moveVolumeToRecycle`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以对已删除卷进行还原<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name RecycleVolume
 * @summary 回收卷，无该功能
 * @request PUT:/recycleVolume
 */
export const recycleVolume = async (
  model: RecycleModel,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/recycleVolume`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此URI从垃圾箱中回收卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>261</th><td>The volume is being deleted</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name RecycleVolumeToNormal
 * @summary 恢复卷
 * @request PUT:/recycleVolumeToNormal
 */
export const recycleVolumeToNormal = async (
  accountId: number,
  volumeId: number,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/recycleVolumeToNormal`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以更新指定csi卷的pod信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name RemoveCsiVolumePodInfo
 * @summary 更新csi卷pod信息
 * @request PUT:/removeCsiVolumePodInfo
 */
export const removeCsiVolumePodInfo = async (
  query: { accountId: number; uuid: string; version: string; volumeId: string },
  params: RequestParams = {}
): Promise<ResponseModelCsiVolumeInfo> => {
  const res = await _request.put({
    url: `/removeCsiVolumePodInfo`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 获取csi服务状态<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name ReportCsiHeartbeat
 * @summary csi服务心跳
 * @request PUT:/reportCsiHeartbeat
 */
export const reportCsiHeartbeat = async (
  hostName: string,
  serverName: string,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/reportCsiHeartbeat`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以保存指定csi卷的pod连接信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name ReportCsiVolumePodConnectInfo
 * @summary 保存csi卷pod连接信息
 * @request PUT:/reportCsiVolumePodConnectInfo
 */
export const reportCsiVolumePodConnectInfo = async (
  query: {
    accountId: number
    isConnect: string
    nodeId: string
    version: string
    volumeId: string
  },
  params: RequestParams = {}
): Promise<ResponseModelCsiVolumeInfo> => {
  const res = await _request.put({
    url: `/reportCsiVolumePodConnectInfo`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description restful服务心跳<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name RestfulHealthPing
 * @summary restful服务心跳
 * @request PUT:/restfulHealthPing
 */
export const restfulHealthPing = async (
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/restfulHealthPing`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以保存csi卷的信息列表<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name SaveCsiVolumeInfo
 * @summary 保存csi卷信息
 * @request PUT:/saveCsiVolumeInfo
 */
export const saveCsiVolumeInfo = async (
  model: CsiVolumeModel,
  params: RequestParams = {}
): Promise<ResponseModelSimpleVolumeMetadata> => {
  const res = await _request.put({
    url: `/saveCsiVolumeInfo`,
    data: model,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以保存指定csi卷的pod信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name SaveCsiVolumePodInfo
 * @summary 保存csi卷pod信息
 * @request PUT:/saveCsiVolumePodInfo
 */
export const saveCsiVolumePodInfo = async (
  query: { accountId: number; podName: string; uuid: string; version: string; volumeId: string },
  params: RequestParams = {}
): Promise<ResponseModelCsiVolumeInfo> => {
  const res = await _request.put({
    url: `/saveCsiVolumePodInfo`,
    params: query,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此URI开始延迟删除卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>261</th><td>The volume is being deleted</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name StartDeleteVolumeDelay
 * @summary 启动延迟删除
 * @request PUT:/startDeleteVolumeDelay
 */
export const startDeleteVolumeDelay = async (
  accountId: number,
  volumeId: number,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/startDeleteVolumeDelay`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此URI停止延迟删除卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>261</th><td>The volume is being deleted</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name StopDeleteVolumeDelay
 * @summary 停止延迟删除
 * @request PUT:/stopDeleteVolumeDelay
 */
export const stopDeleteVolumeDelay = async (
  accountId: number,
  volumeId: number,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/stopDeleteVolumeDelay`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以创建快照卷<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name UpdateCsiLaunchCount
 * @summary 修改CSI挂载数量
 * @request PUT:/updateCsiLaunchCount
 */
export const updateCsiLaunchCount = async (
  accountId: number,
  updateCsiLaunchCount: number,
  volumeId: number,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updateCsiLaunchCount`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用ＵＲＬ去更新卷的描述<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>1</th><td>The current user does not have permission to access the resource</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>261</th><td>The volume is being deleted</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name UpdateVolumeDescription
 * @summary 更新卷描述
 * @request PUT:/updateVolumeDescription
 */
export const updateVolumeDescription = async (
  accountId: number,
  volumeDescription: string,
  volumeId: number,
  params: RequestParams = {}
): Promise<ResponseModelString> => {
  const res = await _request.put({
    url: `/updateVolumeDescription`,
    ...params
  })
  return doRst(res)
}

/**
 * @description 使用此 URL 可以保存指定卷的format信息<p>返回状态码信息描述:<p><table border="1"><tr><th>0</th><td>Success</td></tr><tr><th>77</th><td>Endpoint not available</td></tr><tr><th>117</th><td>Invalid input</td></tr><tr><th>212</th><td>Service has been shutdown</td></tr><tr><th>214</th><td>Service is not available</td></tr><tr><th>252</th><td>There is more than one active service</td></tr><tr><th>281</th><td>Volume is not found</td></tr><tr><th>290</th><td>Network error</td></tr><tr><th>291</th><td>Internal error</td></tr><tr><th>293</th><td>Restful version invalid</td></tr></table>
 *
 * @tags 03-卷
 * @name UpdateVolumeFormatStep
 * @summary 保存卷format信息
 * @request PUT:/updateVolumeFormatStep
 */
export const updateVolumeFormatStep = async (
  query: { accountId: number; formatStep: string; version: string; volumeId: string },
  params: RequestParams = {}
): Promise<ResponseModelLong> => {
  const res = await _request.put({
    url: `/updateVolumeFormatStep`,
    params: query,
    ...params
  })
  return doRst(res)
}
