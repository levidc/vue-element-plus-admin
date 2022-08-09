/* eslint-disable */
/* tslint:disable */
export interface APIToAuthorize {
  /** 权限名 */
  apiName?: string

  /** 权限所属类别 */
  category?: string

  /** 中文描述 */
  chineseText?: string

  /** 英文描述 */
  englishText?: string
}

export interface Account {
  /** 用户id */
  accountId?: string

  /** 用户名 */
  accountName?: string

  /** 用户类型(SuperAdmin,Admin,Regular) */
  accountType?: string

  /** 用户密码 */
  password?: string

  /** 用户可用资源信息 */
  resources?: Record<string, Resource[]>

  /** 用户角色信息 */
  roles?: Role[]
}

/**
 * 用户实体类
 */
export interface AccountModel {
  /** 用户id */
  accountId?: string

  /** 用户名称 */
  accountName?: string

  /**
   * 登录id
   * @format int64
   */
  loginId?: number

  /** 新密码 */
  newPassword?: string

  /** 旧密码 */
  oldPassword?: string

  /** 创建的用户的密码 */
  password?: string

  /** 角色id,json字符串 */
  roleIds?: string

  /** 版本号 */
  version?: string
}

/**
 *  告警信息
 */
export interface AlertMessageModel {
  /** 告警项 */
  alertItem?: string

  /** 告警元数据 */
  alertList?: SimpleAlertMetadata[]

  /** 告警日志信息 */
  eventLogList?: EventLog[]

  /** 主机名 */
  hostName?: string

  /** 最近一次触发值 */
  lastActualValue?: string

  /** 主机序列号 */
  serialNum?: string

  /** 主机子框号 */
  serverNodeChildFramNo?: string

  /** 主机机柜号 */
  serverNodeRackNo?: string

  /** 主机槽位 */
  serverNodeSlotNo?: string

  /** 主机槽位 */
  slotNo?: string
}

/**
 *  确认告警信息实体类
 */
export interface AlertOperationModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 告警id，json string like[4065361266326745818,1927182533035119979] */
  alertIds?: string

  /** 版本号 */
  version?: string
  ids?: string
}

/**
 * 告警列表信息
 */
export interface AlertsModel {
  /** 告警列表 */
  alertList?: SimpleAlertMetadata[]

  /**
   * 实际告警条数
   * @format int32
   */
  recordsFiltered?: number

  /**
   * 告警总条数
   * @format int32
   */
  recordsTotal?: number
}

/**
 * 更新角色实体类
 */
export interface AssignModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 需要更新角色的用户id */
  assignedAccountId?: string

  /** 资源id,json字符串 */
  resourceIds?: string

  /** 角色id,json字符串 */
  roleIds?: string

  /** 需要分配资源的用户id */
  targetAccountId?: string

  /** 版本号 */
  version?: string
}

/**
 * 卷实体类
 */
export interface CloneVolumeModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 克隆类型,有两个值： LAZY_CLONE( 延迟克隆)、SYNC_CLONE(同步克隆) */
  cloneType?: string

  /** 描述 */
  description?: string

  /** 卷所属域的id */
  domainId?: string

  /** 快照id */
  snapshotId?: string

  /** 卷id */
  srcVolumeId?: string

  /** 卷所属存储池的id */
  storagePoolId?: string

  /** 目标卷id */
  targetVolumeId?: string

  /** 版本号 */
  version?: string

  /** 卷名称 */
  volumeName?: string

  /** 掉电保护，有3个值：NONE(关闭)、STRONG(强制)、WEAK(自适应) */
  wtsType?: string
}

export interface CompressedPerformanceDataPointThrift {
  counterValue?: string

  /** @format int64 */
  endTime?: number
  setCounterValue?: boolean
  setEndTime?: boolean
  setStartTime?: boolean

  /** @format int64 */
  startTime?: number
}

export interface CompressedPerformanceDataResponseModel {
  eventLogMessageThriftList?: CompressedPerformanceDataThrift[]

  /** @format int64 */
  timeInterval?: number
}

export interface CompressedPerformanceDataThrift {
  compressedPerformanceDataPointList?: CompressedPerformanceDataPointThrift[]
  compressedPerformanceDataPointListIterator?: IteratorCompressedPerformanceDataPointThrift

  /** @format int32 */
  compressedPerformanceDataPointListSize?: number
  counterKey?: string
  setCompressedPerformanceDataPointList?: boolean
  setCounterKey?: boolean
  setSourceObject?: boolean
  sourceObject?: SourceObjectThrift
}

/**
 * 复制卷实体类
 */
export interface CopyVolumeModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 目标卷id */
  destVolumeId?: string

  /** 源卷id */
  oriVolumeId?: string

  /** 版本号 */
  version?: string
}

export interface CsiVolumeInfo {
  readOnly?: boolean

  /** @format int64 */
  totalSpace?: number

  /** @format int64 */
  usedSpace?: number
  volumeName?: string
}

/**
 * csi卷信息
 */
export interface CsiVolumeModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 卷列表 */
  csiVolumeInfoList?: string

  /** 版本号 */
  version?: string
}

export interface DashboardInfo {
  /** 磁盘：总数 */
  allDiskCount?: string

  /** 系统容量：可用容量 */
  availableCapacity?: string

  /** 系统容量：可用容量百分比 */
  availableCapacityPer?: string

  /** 磁盘：错误 */
  badDiskCount?: string

  /** 告警：已清除 */
  clearedAlertCount?: string

  /** 客户机：数量 */
  clientTotal?: string

  /** 客户机：连接数 */
  connectedClients?: string

  /** 告警:严重告警 */
  criticalAlertCount?: string

  /** 用户名 */
  degreeCounts?: string

  /** 系统容量:未分配容量 */
  freeSpace?: string

  /** 磁盘：健康 */
  goodDiskCount?: string

  /** 告警：重要告警 */
  majorAlertCount?: string

  /** 告警：次要告警 */
  minorAlertCount?: string

  /** 卷：健康 */
  oKCounts?: string

  /** 服务器：健康 */
  okServerNodeCounts?: string

  /** 存储池：健康 */
  poolHigh?: string

  /** 存储池：亚健康 */
  poolLow?: string

  /** 存储池：亚健康 */
  poolMiddle?: string

  /** 存储池：总数 */
  poolTotal?: string

  /** 服务：失败 */
  serviceFailed?: string

  /** 服务：错误 */
  serviceINC?: string

  /** 服务：健康 */
  serviceOK?: string

  /** 服务：总数 */
  serviceTotal?: string

  /** 系统容量：已使用容量百分比 */
  theUsedUniPerStr?: string

  /** 系统容量：已使用容量 */
  theUsedUnitSpace?: string

  /** 系统容量：未使用容量百分比 */
  theunUsedUniPerStr?: string

  /** 系统容量：未使用容量 */
  theunUsedUnitSpace?: string

  /** 系统容量：总容量 */
  totalCapacity?: string

  /** 服务器：总数 */
  totalServerNodeCount?: string

  /** 卷：错误 */
  unavailableCounts?: string

  /** 服务器：错误 */
  unknownServerNodeCount?: string

  /** 系统容量：已用容 */
  usedCapacity?: string

  /** 系统容量：已用容量百分比 */
  usedCapacityPer?: string

  /** 告警:告警 */
  warningAlertCount?: string
}

/**
 * 删除用户实体类
 */
export interface DeleteAccountModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 需要删除的用户 id,json字符串 */
  deleteAccountIds?: string

  /** 版本号 */
  version?: string
}

/**
 * 删除告警规则实体类
 */
export interface DeleteAlertModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 告警规则id */
  rootId?: string

  /** 版本号 */
  version?: string
}

export interface DeleteIOLimitationsResponseMode {
  /** Qos策略信息 */
  qosMigrationRule?: QosMigrationRule

  /** 驱动信息 */
  simpleDriverMetadataList?: SimpleDriverMetadata[]
}

/**
 * 删除ISCSI驱动访问控制返回结果
 */
export interface DeleteIscsiAccessRulesResult {
  /** 访问控制被应用的所有驱动信息 */
  simpleDriverMetadataList?: SimpleDriverMetadata[]

  /** 访问控制信息 */
  simpleIscsiAccessRule?: SimpleIscsiAccessRule
}

export interface DeleteMigrationRulesResponseModel {
  /** Qos策略信息 */
  qosMigrationRule?: QosMigrationRule

  /** 存储池信息信息 */
  simpleStoragePoolList?: SimpleStoragePool[]
}

/**
 * 删除服务器实体类
 */
export interface DeleteModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 服务器 id json string like[8633886165526811481] */
  serverIds?: string

  /** 版本号 */
  version?: string
}

/**
 * 删除角色实体类
 */
export interface DeleteRoleModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 角色id,json字符串 */
  roleIds?: string

  /** 版本号 */
  version?: string
}

export interface DiskInfo {
  /** 卡类型 */
  cardType?: string

  /** 控制id */
  controllerId?: string

  /** enclosure id */
  enclosureId?: string

  /** 型号 */
  model?: string

  /** 磁盘名 */
  name?: string

  /** 转速 */
  rate?: string

  /** 磁盘序列号 */
  serialNumber?: string

  /** 磁盘大小 */
  size?: string

  /** 槽位 */
  slotNumber?: string

  /** Smart检测信息 */
  smartInfos?: SmartInfo[]

  /** 产品序列号 */
  sn?: string

  /** Ssd或者hdd */
  ssdOrHdd?: string

  /** 磁盘灯的状态 */
  swith?: string

  /** 供应商 */
  vendor?: string

  /** wwn号 */
  wwn?: string
}

/**
 * 磁盘点灯/关灯实体类
 */
export interface DiskLightModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** ON 代表开灯，OFF 代表关灯 */
  diskLightStatus?: string

  /** 磁盘名 */
  diskName?: string

  /** 网关 */
  networkCardInfo?: string

  /** 服务器id */
  serverId?: string

  /** 版本号 */
  version?: string
}

/**
 * 磁盘实体类
 */
export interface DiskModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 磁盘 id */
  archiveId?: string

  /** 磁盘类型：RAW_DISK(数据盘)、WTS_DISK(WTS 盘 )、LOG_CACHE( 日 志 缓存盘)、PAGE_READ_CACHE(读缓存盘 )、PAGE_WRITE_CACHE(写缓存盘  )、MIX_DISK( 以上类型、UNSETTLED_DISK(无功能盘)、PAGE_CACHE(缓存盘)的组合) */
  archiveType?: string

  /** 磁盘名称 */
  diskName?: string

  /** ip+端口号，如 10.0.0.52:10011 */
  endpoint?: string

  /** 节点 id */
  instanceId?: string

  /** 版本号 */
  version?: string
}

/**
 * 域实体类
 */
export interface DomainModel {
  /**
   * 用户id
   * @format int64
   */
  accountId: number

  /** 节点id */
  datanodeId: string

  /** 域描述信息 */
  domainDescription?: string

  /** 域id */
  domainId: string

  /** 域名 */
  domainName: string

  /** 域空间 */
  domainfreeSpace: string

  /** 域剩余容量 */
  freeSpace: string

  /** 域总容量 */
  logicalSpace: string

  /** 域的状态 */
  status?: string

  /** 域已用容量 */
  useSpace: string

  /** 版本号 */
  version?: string
}

/**
 * 驱动的chap认证实体类
 */
export interface DriverMetadataModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** chap认证，chapControl=1代表选择认证，chapControl＝0表示取消认证 */
  chapControl?: string

  /** 驱动id */
  driverContainerId?: string

  /** 驱动类型：PYD、ISCSI、FSD */
  driverType?: string

  /** 快照id,默认值为０ */
  snapshotId?: string

  /** 版本号 */
  version?: string

  /** 卷id */
  volumeId?: string
}

export interface EmailForwardItem {
  /** 描述信息 */
  description?: string

  /** 邮箱地址 */
  email?: string

  /** 启用/禁用 */
  enable?: string

  /** 邮箱id */
  id?: string

  /** 名称 */
  name?: string
}

/**
 * 告警接收邮箱实体类
 */
export interface EmailForwardModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 描述 */
  description?: string

  /** 邮箱地址 */
  email?: string

  /** 是否启用 */
  enable?: string

  /** 邮箱id */
  id?: string

  /** 名称 */
  name?: string

  /** 版本号 */
  version?: string
}

export interface EventLog {
  eventLog?: string
  id?: string
}

/**
 * 扩展卷实体类
 */
export interface ExtendVolumeModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 扩展的大小，默认为1024整数倍，单位mb */
  extendSize?: string

  /** 原始卷大小，默认为1024整数倍，单位mb */
  originalSize?: string

  /** 版本号 */
  version?: string

  /** 卷id */
  volumeId?: string
}

export interface FtpInfo {
  deployPath?: string
  ftpPwd?: string
  ftpUsername?: string
}

export interface GetPerformanceDataTimeSpanResponseMode {
  /** 性能数据时间粒度信息 */
  performanceDataTimeGranularityModel?: PerformanceDataTimeGranularityModel

  /** 时间粒度信息 */
  performanceDataTimeUnit?: "FIVE_MINUTES" | "ONE_HOUR" | "ONE_DAY"
}

export interface IOLimitation {
  /** entries信息 */
  entries?: IOLimitationEntry[]

  /** 策略类型,Static(静态)，Dynamic(动态) */
  limitType?: string

  /** 策略id */
  limitationId?: string

  /** 策略名称 */
  limitationName?: string

  /** 状态 */
  status?: string
}

/**
 * 数据访问策略的应用实体类
 */
export interface IOLimitationApplyModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** json string like[{driverContainerId:'937878788561968199',volumeId:'2578067010321559879',snapshotId:'0',driverType:'NBD'}] */
  driverJson?: string

  /** 数据访问策略 id */
  limitationId?: string

  /** 版本号 */
  version?: string
}

/**
 * 删除数据访问策略实体类
 */
export interface IOLimitationDelModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 值为 true 时代表强制删除，值为false 时如果该策略已被应用则不会删除，若未被应用则会删除成功 */
  commit?: string

  /** 数据访问策略json string like[{"limitationId":"4065361266326745818","limitationName":"ee", "limitType":"Static"}] */
  ioLimitationsJson?: string

  /** 版本号 */
  version?: string
}

export interface IOLimitationEntry {
  /** 结束时间 */
  endTime?: string

  /** iops下限 */
  lowerLimitedIOPS?: string

  /** 吞吐量下限 */
  lowerLimitedThroughput?: string

  /** 开始时间 */
  startTime?: string

  /** iops上限 */
  upperLimitedIOPS?: string

  /** 吞吐量上限 */
  upperLimitedThroughput?: string
}

/**
 * 创建数据访问策略实体类
 */
export interface IOLimitationModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** json string like[{upperLimitedIOPS:"0",lowerLimitedIOPS:"99",upperLimitedThroughput:"99",lowerLimitedThroughput:"199",startTime:"",endTime:""}], 其中upperLimitedThroughput与 lowerLimitedThroughput的单位是byte. upperLimitedIOPS(iops上限)> lowerLimitedIOPS(iops下限),upperLimitedThroughput(吞吐量上限) >lowerLimitedThroughput(吞吐量下限) .当upperLimitedIOPS, lowerLimitedIOPS, upperLimitedThroughput, lowerLimitedThroughput传值为-1时表示无限制 */
  entriesJson?: string

  /** 型：Static(静态),Dynamic(动态) */
  limitType?: string

  /** 数据访问策略id */
  limitationId?: string

  /** 数据访问策略名称 */
  limitationName?: string

  /** 状态 */
  status?: string

  /** 版本号 */
  version?: string
  basedOnCapcity?: string
}

/**
 * 维护服务器实体类
 */
export interface InstanceMaintenanceModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 维护时间，单为分钟 */
  durationInMinutes?: string

  /** 节点id */
  instanceId?: string

  /** 节点ip */
  instanceIp?: string

  /** 版本号 */
  version?: string
}

/**
 * 服务实体类
 */
export interface InstanceOperationModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 服务id */
  instanceId?: string

  /** 版本号 */
  version?: string
}

/**
 * ISCSI驱动访问控制实体类
 */
export interface IscsiAccessRulesModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** (预留参数) */
  applied?: string

  /** Initiator名称，以iqn开头 */
  initiatorName?: string

  /** outgoing用户名,outgoing密码为空时此值为空 */
  outPassword?: string

  /** outgoing用户名,outgoing密码为空时此值为空 */
  outUser?: string

  /** ncoming密码,incoming用户名为空时此值为空 */
  password?: string

  /** 权限 */
  permission?: string

  /** 控制访问id */
  ruleId?: string

  /** 驱动名称 */
  ruleNotes?: string

  /** 状态 */
  status?: string

  /** incoming用户名,incoming密码设为空时此值为空 */
  user?: string

  /** 版本号 */
  version?: string
}

/**
 * 序列号实体类
 */
export interface LicenseModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 用户名称 */
  accountName?: string

  /** 序列号 */
  serializedLicense?: string

  /** 版本号 */
  version?: string
}

export interface ListUnusedArchivesResponseModel {
  /** 存储池的磁盘信息 */
  simpleArchiveMetadataSet?: SimpleArchiveMetadata[]

  /** 服务信息 */
  simpleInstance?: SimpleInstance
}

export interface Maintenance {
  /** 当前时间 */
  currentTime?: string
  duration?: string

  /** 结束时间 */
  endTime?: string

  /** 开始时间 */
  startTime?: string
}

/**
 * 应用数据重构策略实体类
 */
export interface MigrationApplyModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 存储池 id,json string like [2610956532720386927,3493796412111633476] */
  poolIds?: string

  /** 数据重构策略id */
  ruleId?: string

  /** 版本号 */
  version?: string
}

/**
 * 删除数据重构策略实体类
 */
export interface MigrationDeleteModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 值为 true 时代表强制删除，值为false 时如果该 qos 已被应用则不会删除，若未被应用则会删除成功 */
  commit?: string

  /** 数据重构策略json string like [{ruleId:4302886456278510912,ruleName:'ggg',maxMigrationSpeed:'32'}] */
  ruleJson?: string

  /** 版本号 */
  version?: string
}

/**
 * 创建数据重构策略实体类
 */
export interface MigrationRuleModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 结束时间，时间戳，策略模式为绝对时间时需要设定此值 */
  endTime?: string

  /** 是否及时追平数据：true/false，false表示及时追平数据 */
  ignoreMissPagesAndLogs?: string

  /** 单盘迁移速度上线:1-100 MB/s，策略类型为手动模式时需要设定此值，否则为空字符串 */
  maxMigrationSpeed?: string

  /** 模式，两个值：AbsoluteTime(绝对时间)、RelativeTime(相对时间) */
  mode?: string

  /** 数据重构策略id */
  ruleId?: string

  /** 数据重构策略名称 */
  ruleName?: string

  /** 开始时间，策略模式为绝对时间时需要设定此值 */
  startTime?: string

  /** 状态 */
  status?: string

  /** 策略类型：Smart(智能)Manual(手动) */
  strategy?: string

  /** 版本号 */
  version?: string

  /** 等待时间，时间戳，策略模式为相对时间时需要设定此值 */
  waitTime?: string
}

/**
 * 对卷挂载驱动实体类
 */
export interface MountVolumeModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 挂载驱动的数量 */
  driverAmount?: string

  /** 驱动名称 */
  driverName?: string

  /** 驱动类型：NBD:pyd、ISCSI:iscsi */
  driverType?: string

  /** 是否自动修复过程挂载驱动 */
  forAutoFixLaunchWithCsi?: boolean

  /** csi类型驱动 */
  forCsi?: boolean

  /** 驱动容器 ip,当驱动数量为 1 时必填 */
  host?: string

  /** node节点id */
  nodeId?: string

  /** 快照id,默认值为０ */
  snapshotId?: string

  /** 版本号 */
  version?: string

  /** 驱动名称 */
  volumeCanNotLaunchMultiDriversThisTime?: string

  /** 卷id */
  volumeId?: string
}

/**
 * 迁移卷实体类
 */
export interface MoveVolumeModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 描述 */
  description?: string

  /** 源卷id */
  srcVolumeId?: string

  /** 目标域id */
  targetDomainId?: string

  /** 目标存储池id */
  targetStoragePoolId?: string

  /** 目标卷id */
  targetVolumeId?: string

  /** 版本号 */
  version?: string
}

/**
 * 挂载磁盘实体类
 */
export interface OnLineDiskModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 磁盘id */
  archiveId?: string

  /** 磁盘名称 */
  diskName?: string

  /** ip+端口号，如: 10.0.0.52:10011 */
  endpoint?: string

  /** 节点id */
  instanceId?: string

  /** 磁盘类型 json string like ['RAW_DISK'],数据盘不可与wts盘，缓存盘共存 */
  typeJson?: string

  /** 版本号 */
  version?: string
}

/**
 * 参数实体
 */
export interface OpenstackModel {
  /** 驱动访问控制id, 如：["4065361266326745818","1927182533035119979"] */
  accessRuleIds?: string

  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 驱动服务id */
  driverContainerId?: string

  /** 驱动类型 */
  driverType?: string

  /** 快照id */
  snapshotId?: string

  /** RESTful版本 */
  version?: string

  /** 卷id */
  volumeId?: string
}

/**
 * PYD驱动的访问控制应用实体类
 */
export interface OperationModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 驱动json */
  driverJson?: string

  /** 访问控制id，如：["12346789","85612334"] */
  ruleId?: string

  /** 访问控制id，如：["12346789","85612334"] */
  ruleIds?: string

  /** 版本号 */
  version?: string

  /** 卷id */
  volumeId?: string

  /** 卷id，json格式 */
  volumeIds?: string
}

/**
 * PYD访问控制驱动实体类
 */
export interface PYDAccessRulesModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 信息 */
  message?: string

  /** 权限 */
  permission?: string

  /** 远程主机 ip 地址 */
  remoteHostName?: string

  /** 访问控制id */
  ruleId?: string

  /** 状态 */
  status?: string

  /** 版本号 */
  version?: string
}

/**
 * 性能数据时间粒度
 */
export interface PerformanceDataTimeGranularityModel {
  /**
   * 保留时长
   * @format int32
   */
  retentionTime?: number

  /**
   * 时间间隔
   * @format int32
   */
  timeSpan?: number
}

export interface PerformanceItem {
  /** 英文描述 */
  en_name?: string

  /** 键 */
  key?: string

  /** 性能类 */
  monitorObject?: string

  /** 性能项类型(Threshold:域值，Status:状态) */
  type?: string

  /** 中文描述 */
  zh_name?: string
}

/**
 * 存储池实体类
 */
export interface PoolModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 描述 */
  description?: string

  /** 存储池中的磁盘,json string like this:[{"datanodeId":"663089890417065921","archiveId":"1505152433217831408"}]，不添加磁盘时填空数组[] */
  diskJson?: string

  /** 域的id */
  domainId?: string

  /** 存储池所属域的id */
  domainName?: string

  /** 存储池的id */
  poolId?: string

  /** 存储池名称 */
  poolName?: string

  /** 存储池状态(Available//可用,Deleting//删除中) */
  status?: string

  /** 存储池类型，有三个值Capacity（容量）,  Mixed（混合）,  Performance（性能） */
  strategy?: string

  /** 版本号 */
  version?: string
}

/**
 * 存储池实体类
 */
export interface PoolOperation {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 磁盘id */
  archiveId?: string

  /** 节点id */
  datanodeId?: string

  /** 域id */
  domainId?: string

  /** 存储池id */
  storagePoolId?: string

  /** 版本号 */
  version?: string
}

export interface QosMigrationRule {
  /** 内置规则标识 */
  builtInRule?: string

  /** 结束时间，策略模式为绝对时间时需要设定此值 */
  endTime?: string

  /** 及时追平数据 */
  ignoreMissPagesAndLogs?: string

  /** 单盘重构速度上限(mb/s),策略类型为手动模式时需要设定此值，否则为空字符串 */
  maxMigrationSpeed?: string

  /** 模式，两个值：AbsoluteTime(绝对时间)/RelativeTime(相对时间) */
  mode?: string

  /** 策略id */
  ruleId?: string

  /** 策略名称 */
  ruleName?: string

  /** 开始时间，策略模式为绝对时间时需要设定此值 */
  startTime?: string

  /** 状态 */
  status?: string

  /** 策略类型,Smart(智能)Manual(手动) */
  strategy?: string

  /** 等待时间，策略模式为相对时间时需要设定此值 */
  waitTime?: string
}

export interface RebalanceAbsoluteTime {
  /** 开始时间 */
  beginTime?: string

  /** 结束时间 */
  endTime?: string
}

/**
 * 负载均衡策略实体类
 */
export interface RebalanceOperationModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 存储池ids,json string like [1687153552709153692,3493796412111633476] */
  poolIdList?: string

  /** 策略id */
  ruleId?: string

  /** 策略id,json string like [2056655781358612973,1976737572136458577] */
  ruleIdList?: string

  /** 版本号 */
  version?: string
}

export interface RebalanceRule {
  /** 绝对时间 */
  absoluteTimeList?: RebalanceAbsoluteTime[]

  /** 策略id */
  ruleId?: string

  /** 策略名称 */
  ruleName?: string

  /** 相对时间 */
  waitTime?: string
}

/**
 * 创建负载均衡策略实体类
 */
export interface RebalanceRuleModel {
  /** 绝对时间,不传值时需要传一个[] */
  absoluteTimeJSON?: string

  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 策略id */
  ruleId?: string

  /** 策略名称 */
  ruleName?: string

  /** 版本号 */
  version?: string

  /** 相对时间 */
  waitTime?: string
}

/**
 * 回收卷实体类
 */
export interface RecycleModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 版本号 */
  version?: string

  /** 卷id */
  volumeId?: string
}

/**
 * 节点实体类
 */
export interface RemoveModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 节点id */
  datanodeId?: string

  /** 域id */
  domainId?: string

  /** 版本号 */
  version?: string
}

/**
 * 重置密码实体类
 */
export interface ResetPwdModel {
  /**
   * 需要重置密码的用户id
   * @format int64
   */
  accountId?: number

  /** 登录用户的id */
  operatorAccountId?: string

  /** 版本号 */
  version?: string
}

export interface Resource {
  /** 资源id */
  resourceId?: string

  /** 资源名称 */
  resourceName?: string

  /** 资源类型 */
  resourceType?: string
}

export interface Role {
  /** 描述 */
  description?: string

  /** 角色名称 */
  name?: string

  /** 角色权限 */
  permissions?: Record<string, APIToAuthorize[]>

  /** 角色id */
  roleId?: string
}

/**
 * 角色实体类
 */
export interface RoleModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 名称Json string,当没有设定相关 api时，传值[] */
  apiNames?: string

  /** 描述 */
  description?: string

  /** 角色id */
  roleId?: string

  /** 角色名称 */
  roleName?: string

  /** 版本号 */
  version?: string
}

/**
 * 告警模板实体类
 */
export interface RuleModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 告警一等级，告警一阈值条件：CRITICAL/MAJOR/MINOR/WARNING/CLEARED/INDETERMINATE */
  alertLevelOne?: string

  /** 告警一等级的告警阈值， 当性能项的类型为Threshold必填，当性能项的类型为Status时不传值 */
  alertLevelOneThreshold?: string

  /** 告警二等级，告警二等级低于告警等级一：CRITICAL/MAJOR/MINOR/WARNING/CLEARED/INDETERMINATE */
  alertLevelTwo?: string

  /** 告警二等级的告警阈值 当性能项的类型为Threshold必填，当性能项的类型为Status时不传值 */
  alertLevelTwoThreshold?: string

  /** 达到恢复告警条件的次数，当性能项的类型为Threshold必填，当性能项的类型为Status时不传值 */
  alertRecoveryEventContinuousOccurTimes?: string

  /** 恢复告警的等级符号，当性能项的类型为Threshold必填，当性能项的类型为Status时不传值 */
  alertRecoveryRelationOperator?: string

  /** 恢复告警的告警阈值，当性能项的类型为Threshold必填，当性能项的类型为Status时不传值 */
  alertRecoveryThreshold?: string

  /** 告警出现的次数，当性能项的类型为Threshold必填，当性能项的类型为Status时不传值 */
  continuousOccurTimes?: string

  /** 性能项,/getPerformanceItem获得相应值 */
  counterKey?: string

  /** 描述 */
  description?: string

  /** 是否开启 */
  enable?: string

  /** 告警id */
  id?: string

  /** 左规则id */
  leftId?: string

  /** 合并方式：AND、OR */
  logicOperator?: string

  /** 规则名,只能输入中英文、数字、"_",至多64位 */
  name?: string

  /** 父规则id */
  parentId?: string

  /** 告警等级符号：GT(>)、EGT(>=)、LT(<)、ELT(<=)、EQ(==)、NEQ(!=)。当性能项的类型为Threshold必填，当性能项的类型为Status时不传值。告警等级一必填，告警等级二选填 */
  relationOperator?: string

  /** 触发告警次数 */
  repeatAlert?: string

  /** 右规则id */
  rightId?: string

  /** 需要合并的规则id */
  rule1Id?: string

  /** 需要合并的规则id */
  rule2Id?: string

  /** 版本号 */
  version?: string
  alertRecoveryLevel?: string
}

export interface ServerNode {
  /** 子框号 */
  childFramNo?: string

  /** cpu信息 */
  cpuInfo?: string

  /** 缓存盘信息 */
  diskCache?: SimpleArchiveMetadata[]

  /** 磁盘大小，单位GB */
  diskInfo?: string

  /** 磁盘信息 */
  diskNotInDataNode?: DiskInfo[]

  /** 所属域 */
  domain?: SimpleDomain

  /** 网关ip */
  gatewayIp?: string

  /** 服务器名称 */
  hostName?: string

  /** 节点信息 */
  instances?: SimpleInstance[]

  /** 维护信息 */
  maintenance?: Maintenance

  /** 管理ip */
  manageIp?: string

  /** 内存大小，单位GB */
  memoryInfo?: string

  /** 系统信息 */
  modelInfo?: string

  /** 网卡ip */
  networkCardInfo?: string

  /** 机柜名称 */
  rackNo?: string

  /** 传感器信息 */
  sensorInfos?: SimpleSensorInfo[]

  /** 服务器 id */
  serverId?: string

  /** 槽位号 */
  slotNo?: string

  /** 状态 */
  status?: string

  /** 存储ip */
  storeIp?: string
}

/**
 * 服务器信息实体类
 */
export interface ServerNodeModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 子框号 */
  childFramNo?: string

  /** 主机名称 */
  hostName?: string

  /** 机柜名 */
  rackNo?: string

  /** 服务器id */
  serverId?: string

  /** 槽位 */
  slotNo?: string

  /** 存储的ip */
  storeIp?: string

  /** 版本号 */
  version?: string
}

export interface SimpleAlertMetadata {
  acknowledge?: string
  alertClass?: string
  alertClear?: string
  alertKey?: string
  alertLevel?: string
  alertObject?: string
  alertRuleName?: string
  clearTime?: string
  description?: string
  discardTimeFiler?: boolean

  /** @format int64 */
  firstOccurTime?: number

  /** @format int32 */
  frequency?: number
  id?: string
  ipAddress?: string

  /** @format int64 */
  lastOccurTime?: number
}

export interface SimpleAlertRule {
  /** 告警一等级 */
  alertLevelOne?: string

  /** 告警一等级的告警阈值 */
  alertLevelOneThreshold?: string

  /** 告警二等级 */
  alertLevelTwo?: string

  /** 告警二等级的告警阈值 */
  alertLevelTwoThreshold?: string

  /** 恢复告警的次数 */
  alertRecoveryEventContinuousOccurTimes?: string

  /** 恢复告警的等级 */
  alertRecoveryLevel?: string

  /** 恢复告警等级符号 */
  alertRecoveryRelationOperator?: string

  /** 恢复告警的告警阈值 */
  alertRecoveryThreshold?: string

  /** 告警出现的次数 */
  continuousOccurTimes?: string

  /** 性能项 */
  counterKey?: string

  /** 描述信息 */
  description?: string

  /** 启用 */
  enable?: string

  /** 告警规则id */
  id?: string

  /** leftId */
  leftId?: string

  /** 合并规则 */
  logicOperator?: string

  /** 告警规则名 */
  name?: string

  /** parentId */
  parentId?: string

  /** 告警等级符号 */
  relationOperator?: string

  /** rightId */
  rightId?: string
}

export interface SimpleAlertTemplate {
  /** 规则信息 */
  alertRuleMap?: Record<string, SimpleAlertRule>

  /** 模板id */
  id?: string

  /** 模板名 */
  name?: string

  /** 源id */
  sourceId?: string
}

export interface SimpleArchiveMetadata {
  /** 磁盘id */
  archiveId?: string

  /** 磁盘类 */
  archiveType?: string

  /** 卡类型 */
  cardType?: string

  /** 控制id */
  controllerId?: string

  /** 主机IP:端口 */
  dataNodeEndPoint?: string

  /** 已用容量 */
  dataSizeMb?: string

  /** 节点id */
  datanodeId?: string

  /** 设备名称 */
  deviceName?: string

  /** 磁盘序列号 */
  diskSerialNumber?: string

  /** 域id */
  domainId?: string

  /** 域名称 */
  domainName?: string

  /** enclosure id */
  enclosureId?: string

  /**
   * 磁盘剩余容量
   * @format int64
   */
  logicalFreeSpace?: number

  /**
   * 磁盘逻辑容量
   * @format int64
   */
  logicalSpace?: number

  /** 磁盘重构进度百分比 */
  migrationRatio?: string

  /** 磁盘重构速度 */
  migrationSpeed?: string

  /** 型号 */
  model?: string

  /** 存储池名称 */
  poolName?: string

  /** 转速 */
  rate?: string

  /** 磁盘序列号 */
  serialNumber?: string

  /** 槽位 */
  slotNumber?: string

  /** smart检测信息 */
  smartInfos?: SmartInfo[]

  /** 产品序列号 */
  sn?: string

  /** 磁盘状态 */
  status?:
    | "GOOD"
    | "DEGRADED"
    | "BROKEN"
    | "CONFIG_MISMATCH"
    | "OFFLINED"
    | "OFFLINING"
    | "EJECTED"
    | "INPROPERLY_EJECTED"
    | "UNKNOWN"
    | "SEPARATED"

  /** 存储池id */
  storagePool?: string

  /** 磁盘存储类型 */
  storageType?: string

  /** 开关 */
  swith?: string

  /** 供应商 */
  vendor?: string

  /** wwn号 */
  wwn?: string
}

export interface SimpleDomain {
  /** 域的节点 */
  dataNodes?: SimpleInstance[]

  /** 描述 */
  domainDescription?: string

  /** 域id */
  domainId?: string

  /** 域名称 */
  domainName?: string

  /** 域空间 */
  domainfreeSpace?: string

  /** 域剩余容量 */
  freeSpace?: string

  /** 域总容量 */
  logicalSpace?: string

  /** 域的状态 */
  status?: string

  /** 域已用容量 */
  useSpace?: string
}

export interface SimpleDriverClientInfo {
  /** 权限(READ:只读,READWRITE:读写) */
  authority?: string

  /** 地址 */
  host?: string
}

export interface SimpleDriverMetadata {
  /** chap认证 */
  chapControl?: string

  /** 驱动用户数量 */
  clientAmount?: string

  /** coordinator端口 */
  coordinatorPort?: string

  /** 创建时间 */
  createTime?: string

  /** 驱动用户信息 */
  driverClientInfoList?: SimpleDriverClientInfo[]

  /** 驱动容器IP */
  driverContainerIP?: string

  /** 驱动容器id */
  driverContainerId?: string

  /** 驱动的名称 */
  driverName?: string

  /** 驱动类型(ISCSI:iscsi,NBD:pyd) */
  driverType?: string

  /** 驱动地址 */
  host?: string

  /** ipv6地址 */
  ipv6Addr?: string

  /** 标记卸载 */
  markUnmountForCsi?: boolean

  /** 驱动端口 */
  port?: string

  /** 快照id */
  snapshotId?: string

  /** 驱动状态 */
  status?: string

  /** 所属卷id */
  volumeId?: string

  /** 卷名称 */
  volumeName?: string
}

export interface SimpleInstance {
  /** 域id */
  domainId?: string

  /** 组id */
  groupId?: string

  /** ip地址 */
  host?: string

  /** 节点id */
  instanceId?: string

  /** 节点名称 */
  instanceName?: string

  /** 主节点 */
  maintenance?: string

  /** 信息 */
  message?: string

  /** 监视器IP地址 */
  monitorFlowHost?: string

  /** 域id */
  netSubHealth?: boolean

  /**
   * 端口号
   * @format int32
   */
  port?: number

  /** 状态 */
  status?: string

  /** 状态 */
  statusInDD?: string
}

export interface SimpleInstanceMetadata {
  /** 节点中磁盘信息 */
  archives?: SimpleArchiveMetadata[]

  /**
   * 总容量
   * @format int64
   */
  capacity?: number

  /**
   * 所属域id
   * @format int64
   */
  domainId?: number

  /** 端口 */
  endPoint?: string

  /**
   * 剩余容量
   * @format int64
   */
  freeSpace?: number
  hostName?: string

  /** 节点id */
  instanceId?: string

  /**
   * 逻辑容量
   * @format int64
   */
  logicalCapacity?: number
}

export interface SimpleIscsiAccessRule {
  /** 是否已被应用 */
  applied?: boolean

  /** initiator名称 */
  initiatorName?: string

  /** outgoing用户密码 */
  outPasswd?: string

  /** outgoing用户 */
  outUser?: string

  /** ncoming用户密码 */
  passwd?: string

  /** 读写权限(READ:只读,READWRITE:读写) */
  permission?: string

  /** 驱动id */
  ruleId?: string

  /** 规则名称 */
  ruleNotes?: string

  /** 客户机状态 */
  status?: string

  /** incoming用户 */
  user?: string
}

export interface SimpleLicense {
  /**
   * 试用期，单位天
   * @format int64
   */
  days?: number

  /** 功能令牌 */
  functionTokens?: Record<string, string>

  /**
   * 剩余试用期，单位天
   * @format int64
   */
  licenseage?: number

  /** 资源令牌 */
  resourceTokens?: Record<string, string>

  /** 类型 */
  type?: string

  /** 序列号 */
  userSequenceNumber?: string
}

export interface SimpleOperation {
  /** 用户id */
  accountId?: string

  /** 用户名 */
  accountName?: string

  /**  描述 */
  description?: string

  /** 结束时间 */
  endTime?: string

  /** 错误信息 */
  errorMessage?: string

  /** 操作id */
  operationId?: string

  /** 操作对象 */
  operationObject?: string

  /** 进程 */
  progress?: string

  /** 开始时间 */
  startTime?: string

  /** 状态(SUCCESS:成功，FAILED:失败) */
  status?: string

  /** 目标id */
  targetId?: string

  /** 目标名称 */
  targetName?: string

  /** 目标类型 */
  targetType?: string

  /** 操作类型 */
  type?: string
}

export interface SimpleSegUnit {
  /** 磁盘名 */
  diskName?: string

  /** 回滚进度 */
  inRollbackProgress?: string

  /** 节点id */
  instanceId?: string

  /** 节点ip */
  instanceIp?: string

  /** Segmentunit在磁盘的初始位置 */
  offset?: string

  /**
   * 迁移进度
   * @format double
   */
  ratioMigration?: number
  simpleSegmentVersion?: SimpleSegmentVersion

  /** 回滚的快照id */
  snapshotIdOfRollback?: string

  /** 状态 */
  status?: string

  /** 状态 */
  statusDisplay?: string

  /** 类型 */
  unitType?: string
}

export interface SimpleSegmentMetadata {
  /**
   * segment id
   * @format int32
   */
  segId?: number

  /** Segment版本 */
  simpleSegmentVersion?: SimpleSegmentVersion

  /** 包含的 unit */
  unitList?: SimpleSegUnit[]

  /**
   * segment　unit　大小
   * @format int32
   */
  unitSize?: number
}

export interface SimpleSegmentVersion {
  /**
   * Membership大版本
   * @format int32
   */
  epoch?: number

  /**
   * Membership小版本
   * @format int32
   */
  generation?: number
}

export interface SimpleSensorInfo {
  /** 名称 */
  name?: string

  /** 状态 */
  status?: string

  /** 值 */
  value?: string
}

export interface SimpleSnapshot {
  /** 颜色 */
  color?: string

  /** 快照创建时间 */
  createTime?: string

  /** 快照描述信息 */
  description?: string

  /**
   * 快照id
   * @format int32
   */
  key?: number

  /** 快照名 */
  name?: string

  /**
   * 父节点id
   * @format int32
   */
  parent?: number
  root?: boolean

  /** 快照容量，单位byte */
  size?: string
}

export interface SimpleSnapshotMetadata {
  /** @format int64 */
  createdTime?: number
  description?: string
  name?: string

  /** @format int32 */
  snapshotId?: number
}

export interface SimpleSnmpForwardItem {
  /** 认 证 密 码 */
  authKey?: string

  /** 认 证 算 法 */
  authProtocol?: string

  /** 团体字 */
  community?: string

  /** 管理站描述 */
  description?: string

  /** 是否启用 */
  enable?: string

  /** Snmp id */
  id?: string

  /** 管理站名称 */
  name?: string

  /** 加 密 算 法 */
  privProtocol?: string

  /** 加 密 密 码 */
  privkey?: string

  /** 安全级别 */
  securityLevel?: string

  /** SNMP 用户 */
  securityName?: string

  /** 类型：SNMPV2C、SNMPV3 */
  snmpVersion?: string

  /** 超时时间，单位毫秒 */
  timeout?: string

  /** SNMP IP */
  trapServerip?: string

  /** 端口 */
  trapServerport?: string
}

export interface SimpleStoragePool {
  /** 磁盘信息集合 */
  archivesInDatanode?: Record<string, SimpleArchiveMetadata[]>

  /** 存储池描述信息 */
  description?: string

  /** 存储池所属域的id */
  domainId?: string

  /** 存储池所属域名称 */
  domainName?: string

  /** 剩余容量 */
  freeSpace?: string

  /** 两副本剩余有效容量 */
  logicalPSAFreeSpace?: string

  /** 三副本剩余有效容量 */
  logicalPSSFreeSpace?: string

  /** 重构进度百分比 */
  migrationRatio?: string

  /** 整个pool的的重构速度,是整个磁盘的速度的相加 */
  migrationSpeed?: string

  /** oS策略 */
  migrationStrategy?: string

  /** 存储池id */
  poolId?: string

  /** 存储池名称 */
  poolName?: string

  /** 存储池状态(Available//可用,Deleting//删除中) */
  status?: string

  /** 存储池等级 */
  storagePoolLevel?: string

  /** 存储池类型，有三个值Capacity（容量）,  Mixed（混合）,  Performance（性能） */
  strategy?: string

  /** 要重构的总共page 大小, 单位MB */
  totalMigrateDataSizeMB?: string

  /** 总容量 */
  totalSpace?: string

  /** 已使用容量 */
  usedSpace?: string

  /** 卷id集合 */
  volumeIds?: string[]
}

export interface SimpleVolumeAccessRule {
  /** 信息 */
  message?: string

  /** 读写权限(Read-Only:只读，Read/Write:读写) */
  permission?: string

  /** 客户机IP */
  remoteHostName?: string

  /** pyd驱动id */
  ruleId?: string

  /** 状态 */
  status?: string
}

export interface SimpleVolumeMetadata {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 缓存类型 */
  cacheType?: string

  /** 卷最后连接时间 */
  clientLastConnectTime?: string

  /**
   * 卷创建时间
   * @format int64
   */
  createTime?: number

  /** 创建进度 */
  creatingProgress?: string

  /** CSI挂载数量 */
  csiLaunchCount?: string

  /** 描述 */
  description?: string
  domainId?: string
  driverMetadatas?: SimpleDriverMetadata[]
  enableLaunchMultiDrivers?: string

  /** 扩展标记 */
  extendFlag?: string

  /** 扩展的大小，默认为1024整数倍 */
  extendSize?: string

  /**
   * 卷使用率
   * @format double
   */
  freeSpaceRatio?: number

  /** Snapshot回滚 */
  inSnapshotRollback?: string

  /** 最后一个扩展时间 */
  lastExtendedTime?: string

  /** 信息 */
  message?: string

  /** 重构进度 */
  migrationRatio?: string

  /** 重构速度 */
  migrationSpeed?: string

  /** 卷所属存储池id */
  poolId?: string

  /** 读写权限 */
  readOnlyForCsi?: string

  /** 设置卷可读写 */
  readWrite?: string

  /** rebalance进度 */
  rebalanceRatio?: string

  /** rebalance版本 */
  rebalanceVersion?: string

  /** 还原进度 */
  rollbackingProgress?: string
  segmentList?: SimpleSegmentMetadata[]

  /** segment状态 */
  segmentStatus?: string

  /** 精简配置 */
  simpleConfiguration?: string

  /** Snapshot　正在回滚 */
  snapshotIdRollbacking?: string
  snapshotMetadatas?: SimpleSnapshotMetadata[]

  /** 被克隆时候的快照名 */
  srcSnapshotNameWithClone?: string

  /** 被克隆时候的源卷名 */
  srcVolumeNameWithClone?: string

  /** 停止延迟 */
  stopDelay?: string

  /** 卷所属存储池名称 */
  storagePoolName?: string

  /** 时间延迟 */
  timeForDelay?: string

  /** 时间回收 */
  timeForRecycle?: string

  /** 磁盘使用率 */
  totalPhysicalSpace?: string

  /** 文件系统总容量 */
  totalSpaceFroCsi?: string

  /** 文件系统已用容量 */
  usedSpaceForCsi?: string

  /**
   * 版本号
   * @format int32
   */
  version?: number

  /** 卷所属域id */
  volumeDomain?: string

  /** 卷id */
  volumeId?: string

  /** 卷名称 */
  volumeName?: string

  /** 卷大小 */
  volumeSize?: string

  /** 卷状态 */
  volumeStatus?: string

  /** 卷所属存储池id */
  volumeStoragePoolId?: string

  /** 卷类型 */
  volumeType?: string

  /** 掉电保护 */
  wtsType?: string
}

export interface SmartInfo {
  /** 中文名 */
  attributeName_CN?: string

  /** 英文名 */
  attributeName_EN?: string

  /** 标记 */
  flag?: string

  /** id */
  id?: string

  /** 原始值 */
  rawValue?: string

  /** 临界值 */
  thresh?: string

  /** 类型 */
  type?: string

  /** 更新频率 */
  updated?: string

  /** 当前值 */
  value?: string

  /** WHEN_FAILED */
  whenFailed?: string

  /** 最差值 */
  worst?: string
}

export interface SmtpItem {
  /** 固定值HTML */
  contentType?: string

  /** 是否启用(true,false) */
  enable?: string

  /** 加密类型(AUTH,SSL,TLS) */
  encryptType?: string

  /** 密码 */
  password?: string

  /** 端口号，默认2 */
  smtpPort?: string

  /** SMTP服务器 */
  smtpServer?: string

  /** 主题 */
  subject?: string

  /** 发件箱地址 */
  userName?: string
}

/**
 * 创建或更新SNMP实体类
 */
export interface SmtpModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 固定值HTML */
  contentType?: string

  /** 是否启用：false、true */
  enable?: string

  /** 加密类型，有 3 个值：AUTH(无加密)、SSL、TLS */
  encryptType?: string

  /** 密码 */
  password?: string

  /** 端口号，值小于 65535 */
  smtpPort?: string

  /** SMTP服务器 */
  smtpServer?: string

  /** 主题 */
  subject?: string

  /** 用户名称 */
  userName?: string

  /** 版本号 */
  version?: string
}

/**
 * 快照实体类
 */
export interface SnapshotModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 描述 */
  description?: string

  /** 快照名称 */
  snapshotName?: string

  /** 版本号 */
  version?: string

  /** 卷id */
  volumeId?: string
}

/**
 * 删除快照实体类
 */
export interface SnapshotOperationModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 快照id */
  snapshotId?: string

  /** 版本号 */
  version?: string

  /** 卷id */
  volumeId?: string
}

/**
 * 创建快照卷实体类
 */
export interface SnapshotVolumeModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 克隆方式：LAZY_CLONE(延迟克隆 ) 、SYNC_CLONE( 同步克隆) */
  cloneType?: string

  /** 描述 */
  description?: string

  /** 域id */
  domainId?: string

  /** 存储池id */
  poolId?: string

  /** 快照名称,只能输入中英文、数字、"_",至多64位 */
  snapshotName?: string

  /** 版本号 */
  version?: string

  /** 卷id */
  volumeId?: string

  /** 卷名称 */
  volumeName?: string
}

/**
 * 更新SNMP实体类
 */
export interface SnmpForwardModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 认 证 密 码 ， 当 安 全 级 别(securityLevel)为 AuthNoPriv、AuthPriv 时必填，否则为空 */
  authKey?: string

  /** 认 证 算 法 ， 当 安 全 级 别(securityLevel)为 uthNoPriv、AuthPriv 时必填，否则为空，有 2 个值：MD5、SHA */
  authProtocol?: string

  /** 团体字，当 SNMP 类型为SNMPV2C 时必填，否则为空 */
  community?: string

  /** 描述 */
  description?: string

  /** 是否启用：false、true */
  enable?: string

  /** SNMP的id */
  id?: string

  /** 名称 */
  name?: string

  /** 加 密 算 法 ， 当 安 全 级 别(securityLevel)为 AuthPriv 时必填，否则为空，有 2 个值：AES、DES */
  privProtocol?: string

  /** 加 密 密 码 ， 当 安 全 级 别(securityLevel)为 AuthPriv 时必填，否则为空 */
  privkey?: string

  /** 安全级别，当 SNMP 类型为SNMPV3 时必填，否则为空，有 3 个值：NoAuthNoPriv(不认证不加密)、AuthNoPriv(认证不加密)、AuthPriv(认证且加密) */
  securityLevel?: string

  /** SNMP 用户，当 SNMP 类型为SNMPV3 时必填，否则为空 */
  securityName?: string

  /** SNMP 类型：SNMPV2C、SNMPV3 */
  snmpVersion?: string

  /** 超时时间，单位毫秒 */
  timeout?: string

  /** SNMP的IP */
  trapServerip?: string

  /** SNMP IP */
  trapServerport?: string

  /** 版本号 */
  version?: string
}

export interface SourceObjectThrift {
  setSourceId?: boolean
  setSourceName?: boolean
  sourceId?: string
  sourceName?: string
}

/**
 * 卸载卷的驱动实体类
 */
export interface UnMountVolumeModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 驱动json字符串，[{snapshotId:"4065361266326745818",driverIp:"192.168.2.1",driverType:"PYD",driverContainerId:"40653612663267458"}] */
  driverJson?: string

  /**
   * csi 延迟卸载驱动
   * @format int64
   */
  forDelayUmountTime?: number

  /** 强制卸载标识 */
  forceUmount?: boolean

  /** csi node 节点id */
  nodeId?: string

  /** 版本号 */
  version?: string

  /** 卷id */
  volumeId?: string
}

export interface Volume2Snapshot {
  /** 快照信息 */
  snapshotList?: SimpleSnapshot[]

  /** 卷信息 */
  volume?: SimpleVolumeMetadata
}

export interface VolumeAccessRuleOperationResult {
  /** 已应用卷信息 */
  appliedRule2VolumeTable?: Record<string, string[]>

  /** 已应用操作 */
  existingActionOnRuleList?: number[]

  /** 信息 */
  message?: string
}

/**
 * 卷实体类
 */
export interface VolumeModel {
  /**
   * 用户id
   * @format int64
   */
  accountId?: number

  /** 缓存类型，有2个值：NONE(无缓存)、SSD(SSD缓存) */
  cacheType?: string

  /**
   * CSI挂载数量
   * @format int32
   */
  csiLaunchCount?: number

  /** 描述信息 */
  description?: string

  /** 域id */
  domainId?: string

  /** 是否支持挂载多个驱动（false、true） */
  enableLaunchMultiDrivers?: string

  /** 标志 */
  flag?: boolean

  /** 卷名称 */
  name?: string

  /** 精简配置，有2个值：Yes(是)、 No(否) */
  simpleConfiguration?: string

  /** 卷的大小，默认是1024的整数倍,单位为Mb */
  size?: string

  /** 存储池id */
  storagePoolId?: string

  /** 卷的所属类型，有3个值：REGULAR(3 副本)、SAMLL(2副本)、LARGE(3副本-高可靠) */
  type?: string

  /** 版本号 */
  version?: string

  /** 卷id */
  volumeId?: string

  /** 掉电保护，有3个值：NONE(关闭)、STRONG(强制)、WEAK(自适应) */
  wtsType?: string
}

export interface ZookeeperEtcdStatus {
  /** 节点ip */
  hostname?: string

  /** 服务状态 */
  status?: string
}

export type IteratorCompressedPerformanceDataPointThrift = object

/**
 * 响应对象
 */
export interface ResponseModelAccount {
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
  data?: Account
}

/**
 * 响应对象
 */
export interface ResponseModelAlertMessageModel {
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
  data?: AlertMessageModel
}

/**
 * 响应对象
 */
export interface ResponseModelAlertsModel {
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
  data?: AlertsModel
}

/**
 * 响应对象
 */
export interface ResponseModelArrayByte {
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

  /**
   * 响应数据
   * @format byte
   */
  data?: string
}

/**
 * 响应对象
 */
export interface ResponseModelCompressedPerformanceDataResponseModel {
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
  data?: CompressedPerformanceDataResponseModel
}

/**
 * 响应对象
 */
export interface ResponseModelCsiVolumeInfo {
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
  data?: CsiVolumeInfo
}

/**
 * 响应对象
 */
export interface ResponseModelDashboardInfo {
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
  data?: DashboardInfo
}

/**
 * 响应对象
 */
export interface ResponseModelFtpInfo {
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
  data?: FtpInfo
}

/**
 * 响应对象
 */
export interface ResponseModelListAPIToAuthorize {
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
  data?: APIToAuthorize[]
}

/**
 * 响应对象
 */
export interface ResponseModelListAccount {
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
  data?: Account[]
}

/**
 * 响应对象
 */
export interface ResponseModelListDeleteIOLimitationsResponseMode {
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
  data?: DeleteIOLimitationsResponseMode[]
}

/**
 * 响应对象
 */
export interface ResponseModelListDeleteIscsiAccessRulesResult {
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
  data?: DeleteIscsiAccessRulesResult[]
}

/**
 * 响应对象
 */
export interface ResponseModelListDeleteMigrationRulesResponseModel {
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
  data?: DeleteMigrationRulesResponseModel[]
}

/**
 * 响应对象
 */
export interface ResponseModelListEmailForwardItem {
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
  data?: EmailForwardItem[]
}

/**
 * 响应对象
 */
export interface ResponseModelListGetPerformanceDataTimeSpanResponseMode {
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
  data?: GetPerformanceDataTimeSpanResponseMode[]
}

/**
 * 响应对象
 */
export interface ResponseModelListIOLimitation {
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
  data?: IOLimitation[]
}

/**
 * 响应对象
 */
export interface ResponseModelListListUnusedArchivesResponseModel {
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
  data?: ListUnusedArchivesResponseModel[]
}

/**
 * 响应对象
 */
export interface ResponseModelListPerformanceItem {
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
  data?: PerformanceItem[]
}

/**
 * 响应对象
 */
export interface ResponseModelListQosMigrationRule {
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
  data?: QosMigrationRule[]
}

/**
 * 响应对象
 */
export interface ResponseModelListRebalanceRule {
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
  data?: RebalanceRule[]
}

/**
 * 响应对象
 */
export interface ResponseModelListResource {
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
  data?: Resource[]
}

/**
 * 响应对象
 */
export interface ResponseModelListRole {
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
  data?: Role[]
}

/**
 * 响应对象
 */
export interface ResponseModelListServerNode {
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
  data?: ServerNode[]
}

/**
 * 响应对象
 */
export interface ResponseModelListSimpleArchiveMetadata {
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
  data?: SimpleArchiveMetadata[]
}

/**
 * 响应对象
 */
export interface ResponseModelListSimpleDomain {
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
  data?: SimpleDomain[]
}

/**
 * 响应对象
 */
export interface ResponseModelListSimpleDriverMetadata {
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
  data?: SimpleDriverMetadata[]
}

/**
 * 响应对象
 */
export interface ResponseModelListSimpleInstanceMetadata {
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
  data?: SimpleInstanceMetadata[]
}

/**
 * 响应对象
 */
export interface ResponseModelListSimpleInstance {
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
  data?: SimpleInstance[]
}

/**
 * 响应对象
 */
export interface ResponseModelListSimpleIscsiAccessRule {
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
  data?: SimpleIscsiAccessRule[]
}

/**
 * 响应对象
 */
export interface ResponseModelListSimpleOperation {
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
  data?: SimpleOperation[]
}

/**
 * 响应对象
 */
export interface ResponseModelListSimpleSegmentMetadata {
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
  data?: SimpleSegmentMetadata[]
}

/**
 * 响应对象
 */
export interface ResponseModelListSimpleSnmpForwardItem {
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
  data?: SimpleSnmpForwardItem[]
}

/**
 * 响应对象
 */
export interface ResponseModelListSimpleStoragePool {
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
  data?: SimpleStoragePool[]
}

/**
 * 响应对象
 */
export interface ResponseModelListSimpleVolumeAccessRule {
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
  data?: SimpleVolumeAccessRule[]
}

/**
 * 响应对象
 */
export interface ResponseModelListSimpleVolumeMetadata {
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
  data?: SimpleVolumeMetadata[]
}

/**
 * 响应对象
 */
export interface ResponseModelListSmartInfo {
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
  data?: SmartInfo[]
}

/**
 * 响应对象
 */
export interface ResponseModelListVolume2Snapshot {
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
  data?: Volume2Snapshot[]
}

/**
 * 响应对象
 */
export interface ResponseModelListString {
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
  data?: string[]
}

/**
 * 响应对象
 */
export interface ResponseModelServerNode {
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
  data?: ServerNode
}

/**
 * 响应对象
 */
export interface ResponseModelSetSimpleStoragePool {
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
  data?: SimpleStoragePool[]
}

/**
 * 响应对象
 */
export interface ResponseModelSetLong {
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
  data?: number[]
}

/**
 * 响应对象
 */
export interface ResponseModelSimpleAlertTemplate {
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
  data?: SimpleAlertTemplate
}

/**
 * 响应对象
 */
export interface ResponseModelSimpleDomain {
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
  data?: SimpleDomain
}

/**
 * 响应对象
 */
export interface ResponseModelSimpleInstance {
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
  data?: SimpleInstance
}

/**
 * 响应对象
 */
export interface ResponseModelSimpleIscsiAccessRule {
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
  data?: SimpleIscsiAccessRule
}

/**
 * 响应对象
 */
export interface ResponseModelSimpleLicense {
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
  data?: SimpleLicense
}

/**
 * 响应对象
 */
export interface ResponseModelSimpleStoragePool {
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
  data?: SimpleStoragePool
}

/**
 * 响应对象
 */
export interface ResponseModelSimpleVolumeMetadata {
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
  data?: SimpleVolumeMetadata
}

/**
 * 响应对象
 */
export interface ResponseModelSmtpItem {
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
  data?: SmtpItem
}

/**
 * 响应对象
 */
export interface ResponseModelVolumeAccessRuleOperationResult {
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
  data?: VolumeAccessRuleOperationResult
}

/**
 * 响应对象
 */
export interface ResponseModelZookeeperEtcdStatus {
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
  data?: ZookeeperEtcdStatus
}

/**
 * 响应对象
 */
export interface ResponseModelBoolean {
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
  data?: boolean
}

/**
 * 响应对象
 */
export interface ResponseModelInt {
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

  /**
   * 响应数据
   * @format int32
   */
  data?: number
}

/**
 * 响应对象
 */
export interface ResponseModelLong {
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

  /**
   * 响应数据
   * @format int64
   */
  data?: number
}

/**
 * 响应对象
 */
export interface ResponseModelString {
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
  data?: string
}
