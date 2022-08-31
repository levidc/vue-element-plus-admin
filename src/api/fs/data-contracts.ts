/* eslint-disable */
/* tslint:disable */
/************************************************
 * 接口信息
 * > 标题：Api Documentation
 * > 版本：1.0
 * > 描述：Api Documentation
 ***********************************************/
export interface CommonPrefixes {
  Prefix?: string
}

export interface CompleteMultipartUploadRequest {
  Part?: Part[]
}

export interface CompleteMultipartUploadResult {
  Bucket?: string
  ETag?: string
  Key?: string
  Location?: string
}

export interface DeleteError {
  Code?: string
  Key?: string
  Message?: string
  VersionId?: string
}

export interface DeleteObjectResponse {
  Deleted?: Deleted[]
  Error?: DeleteError[]
}

export interface Deleted {
  DeleteMarker?: boolean
  DeleteMarkerVersionId?: string
  Key?: string
  VersionId?: string
}

export interface InitiateMultipartUploadResult {
  Bucket?: string
  Key?: string
  UploadId?: string
}

export interface ListObjectResult {
  CommonPrefixes?: CommonPrefixes[]
  Contents?: object[]
  ContinuationToken?: string
  Delimiter?: string
  EncodingType?: string
  IsTruncated?: boolean

  /** @format int32 */
  KeyCount?: number
  Marker?: string

  /** @format int32 */
  MaxKeys?: number
  Name?: string
  NextContinuationToken?: string
  NextMarker?: string
  Prefix?: string
  StartAfter?: string
  truncated?: boolean
}

export interface ModelAndView {
  empty?: boolean
  model?: object
  modelMap?: Record<string, object>
  reference?: boolean
  status?:
    | "100 CONTINUE"
    | "101 SWITCHING_PROTOCOLS"
    | "102 PROCESSING"
    | "103 CHECKPOINT"
    | "200 OK"
    | "201 CREATED"
    | "202 ACCEPTED"
    | "203 NON_AUTHORITATIVE_INFORMATION"
    | "204 NO_CONTENT"
    | "205 RESET_CONTENT"
    | "206 PARTIAL_CONTENT"
    | "207 MULTI_STATUS"
    | "208 ALREADY_REPORTED"
    | "226 IM_USED"
    | "300 MULTIPLE_CHOICES"
    | "301 MOVED_PERMANENTLY"
    | "302 FOUND"
    | "302 MOVED_TEMPORARILY"
    | "303 SEE_OTHER"
    | "304 NOT_MODIFIED"
    | "305 USE_PROXY"
    | "307 TEMPORARY_REDIRECT"
    | "308 PERMANENT_REDIRECT"
    | "400 BAD_REQUEST"
    | "401 UNAUTHORIZED"
    | "402 PAYMENT_REQUIRED"
    | "403 FORBIDDEN"
    | "404 NOT_FOUND"
    | "405 METHOD_NOT_ALLOWED"
    | "406 NOT_ACCEPTABLE"
    | "407 PROXY_AUTHENTICATION_REQUIRED"
    | "408 REQUEST_TIMEOUT"
    | "409 CONFLICT"
    | "410 GONE"
    | "411 LENGTH_REQUIRED"
    | "412 PRECONDITION_FAILED"
    | "413 PAYLOAD_TOO_LARGE"
    | "413 REQUEST_ENTITY_TOO_LARGE"
    | "414 URI_TOO_LONG"
    | "414 REQUEST_URI_TOO_LONG"
    | "415 UNSUPPORTED_MEDIA_TYPE"
    | "416 REQUESTED_RANGE_NOT_SATISFIABLE"
    | "417 EXPECTATION_FAILED"
    | "418 I_AM_A_TEAPOT"
    | "419 INSUFFICIENT_SPACE_ON_RESOURCE"
    | "420 METHOD_FAILURE"
    | "421 DESTINATION_LOCKED"
    | "422 UNPROCESSABLE_ENTITY"
    | "423 LOCKED"
    | "424 FAILED_DEPENDENCY"
    | "425 TOO_EARLY"
    | "426 UPGRADE_REQUIRED"
    | "428 PRECONDITION_REQUIRED"
    | "429 TOO_MANY_REQUESTS"
    | "431 REQUEST_HEADER_FIELDS_TOO_LARGE"
    | "451 UNAVAILABLE_FOR_LEGAL_REASONS"
    | "500 INTERNAL_SERVER_ERROR"
    | "501 NOT_IMPLEMENTED"
    | "502 BAD_GATEWAY"
    | "503 SERVICE_UNAVAILABLE"
    | "504 GATEWAY_TIMEOUT"
    | "505 HTTP_VERSION_NOT_SUPPORTED"
    | "506 VARIANT_ALSO_NEGOTIATES"
    | "507 INSUFFICIENT_STORAGE"
    | "508 LOOP_DETECTED"
    | "509 BANDWIDTH_LIMIT_EXCEEDED"
    | "510 NOT_EXTENDED"
    | "511 NETWORK_AUTHENTICATION_REQUIRED"
  view?: View
  viewName?: string
}

export interface MountEntity {
  mountPath?: string
  requestId?: string

  /** @format int64 */
  storageId?: number
  storePath?: string
}

export interface NFSACLRelationShipModel {
  /**
   * bucketId，在存储桶界面，由用户选中的bucket获取
   * @format int64
   */
  bucketId?: number

  /**
   * NFSGateway的id
   * @format int64
   * @example 1234564
   */
  gatewayId?: number

  /**
   * 存储资源id，用户选中的bucket多所属资源的id
   * @format int64
   */
  storageId?: number
}

export interface NasRemoteDiskStorageModel {
  /**
   * 本地总空间
   * @format int64
   */
  allocatedSpace?: number

  /** 数据路径 */
  dataDirectory?: string

  /** 设备链接地址 */
  deviceConnectEndpoint?: string

  /** 本地路径 */
  localDirectory?: string

  /** metadata路径 */
  metadataDirectory?: string

  /** mountType,如：MOUNY_NULL, CIFS, NFS */
  mountType?: "MOUNT_NULL" | "NFS" | "CIFS"

  /** performanceType,如：HIGH,MIDDLE,LOW */
  performanceType?: "PERFOR_NULL" | "HIGH" | "MIDDLE" | "LOW"

  /** 端口 */
  port?: string

  /** 远端路径 */
  remoteDirectory?: string

  /**
   * 存储id
   * @format int64
   */
  storageId?: number

  /** 存储名称 */
  storageName?: string

  /** 存储状态,如：STORAGE_BROKEN,STORAGE_ONLINE,STORAGE_OFFLINE,CONFIG_MISMATCH */
  storageStatus?: "STORAGE_NULL" | "STORAGE_BROKEN" | "STORAGE_ONLINE" | "STORAGE_OFFLINE" | "CONFIG_MISMATCH"

  /** 存储类型,如：NAS,DBS,REMOTE_DISK,LOCAL_DISK,DOS */
  storageType?: "NULL" | "S3" | "DOS" | "MIO" | "NAS" | "DBS" | "REMOTE_DISK" | "LOCAL_DISK"

  /**
   * 总空间
   * @format int64
   */
  totalSpace?: number

  /**
   * 使用空间
   * @format int64
   */
  usedSpace?: number
}

export interface NfsAclModel {
  /**
   * 存储桶id
   * @format int64
   */
  bucketId?: number

  /** 客户端ip */
  hostname?: string

  /**
   * ACL权限id
   * @format int64
   */
  id?: number

  /** 是否只读 */
  isSharing?: boolean

  /** 是否只读 */
  readOnly?: boolean

  /**
   * 存储资源id
   * @format int64
   */
  storageId?: number

  /** 是否同步sync */
  sync?: boolean
}

export interface NfsGatewayModel {
  /**
   * 创建时间
   * @format int64
   */
  createTime?: number

  /**
   * NFS网关id
   * @format int64
   */
  gatewayId?: number

  /** NFS网关名称 */
  gatewayName?: string

  /** NFS网关类型 ，   CIFS 、 NFS */
  gatewayType?: string

  /**
   * 更新时间
   * @format int64
   */
  lastReportTime?: number

  /** 挂载路径 */
  mountPath?: string

  /** acl权限数据 */
  nfsAclModelList?: NfsAclModel[]

  /** 分享的桶名称，创建时，可以为空 */
  sharedBucket?: string

  /** 挂载状态    AVAILABLE CREATING UNAVAILABLE  REMOVING  UNKNOWN   */
  status?: string

  /**
   * 对象存储资源id
   * @format int64
   */
  storageId?: number

  /** 服务器ip */
  virtualIp?: string
}

export interface Object {
  ETag?: string
  Key?: string
  LastModified?: string
  Owner?: Owner

  /** @format int32 */
  Size?: number
  StorageClass?:
    | "STANDARD"
    | "REDUCED_REDUNDANCY"
    | "GLACIER"
    | "STANDARD_IA"
    | "ONEZONE_IA"
    | "INTELLIGENT_TIERING"
    | "DEEP_ARCHIVE"
}

export interface ObjectStorageResourceModel {
  /**
   * 本地总空间
   * @format int64
   */
  allocatedSpace?: number

  /** 访问存储资源的密码 */
  password?: string

  /** performanceType,如：HIGH,MIDDLE,LOW */
  performanceType?: "PERFOR_NULL" | "HIGH" | "MIDDLE" | "LOW"

  /**
   * 存储id
   * @format int64
   */
  storageId?: number

  /** 存储名称 */
  storageName?: string

  /** 存储状态,如：STORAGE_BROKEN,STORAGE_ONLINE,STORAGE_OFFLINE,CONFIG_MISMATCH */
  storageStatus?: "STORAGE_NULL" | "STORAGE_BROKEN" | "STORAGE_ONLINE" | "STORAGE_OFFLINE" | "CONFIG_MISMATCH"

  /** 存储类型,如：NAS,DBS,REMOTE_DISK,LOCAL_DISK,DOS */
  storageType?: "NULL" | "S3" | "DOS" | "MIO" | "NAS" | "DBS" | "REMOTE_DISK" | "LOCAL_DISK"

  /**
   * 总空间
   * @format int64
   */
  totalSpace?: number

  /**
   * 存储资源地址(对象存储地址或文件存储挂载点)
   * @example 127.0.0.1:8080
   */
  url?: string

  /**
   * 使用空间
   * @format int64
   */
  usedSpace?: number

  /** 访问存储资源的用户名 */
  userName?: string
}

export interface Owner {
  DisplayName?: string
  ID?: string
}

export interface Part {
  ETag?: string
  LastModified?: string

  /** @format int32 */
  PartNumber?: number

  /** @format int32 */
  Size?: number
}

export interface SambaAclModel {
  /**
   * ACL权限id
   * @format int64
   */
  id?: number

  /** samba密码 */
  password?: string

  /** samba用户名 */
  userName?: string
}

export interface SambaGatewayModel {
  /**
   * 创建时间
   * @format int64
   */
  createTime?: number

  /**
   * NFS网关id
   * @format int64
   */
  gatewayId?: number

  /** NFS网关名称 */
  gatewayName?: string

  /** NFS网关类型 ，   CIFS 、 NFS */
  gatewayType?: string

  /**
   * 更新时间
   * @format int64
   */
  lastReportTime?: number

  /**
   * log日志等级
   * @format int64
   */
  level?: number

  /** 挂载路径 */
  mountPath?: string

  /** 是否只读 */
  readOnly?: boolean

  /** acl权限数据 */
  sambaAclModelList?: SambaAclModel[]

  /** 认证模式 */
  sambaAuthenticationMode?: string

  /** 分享的桶名称，创建时，可以为空 */
  sharedBucket?: string

  /** 挂载状态    AVAILABLE CREATING UNAVAILABLE  REMOVING  UNKNOWN   */
  status?: string

  /**
   * 对象存储资源id
   * @format int64
   */
  storageId?: number

  /** 服务器ip */
  virtualIp?: string
}

export interface Versions {
  Notes?: string[]
  Version?: string
}

export interface View {
  contentType?: string
}

/**
 * 响应对象
 */
export interface ResponseModelVersions {
  /**
   * 响应码
   * @format int32
   * @example 0
   */
  code?: number

  /**
   * 响应码描述信息
   * @example Success
   */
  description?: string

  /** 响应数据 */
  data?: Versions
}

/**
 * 响应对象
 */
export interface ResponseModelObject {
  /**
   * 响应码
   * @format int32
   * @example 0
   */
  code?: number

  /**
   * 响应码描述信息
   * @example Success
   */
  description?: string

  /** 响应数据 */
  data?: object
}
