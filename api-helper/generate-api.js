const { generate } = require('./generate')
const path = require('path')

const dist = 'src/api'
// const dist = 'api-helper/dist'

const apis = {
  DBS: {
    api: 'http://user:password@10.0.2.137:8081/v2/api-docs?group=1.0',
    tags: {
      '01-域': 'Domain',
      '02-存储池': 'Pool',
      '03-卷': 'Volume',
      '04-快照': 'Snapshot',
      '05-访问控制': 'IscsiRule',
      '06-磁盘': 'Disk',
      '07-Qos策略': 'Qos',
      '08-负载均衡策略': 'Rebalance',
      '09-驱动': 'Driver',
      '10-服务器': 'ServerNode',
      '11-监控': 'Alarm',
      '12-服务': 'Service',
      '13-操作日志': 'Log',
      '14-系统日志': 'Log',
      '15-许可证': 'Licence',
      '16-负载均衡': 'Rebalance',
      '17-角色管理': 'User',
      '18-用户管理': 'User',
      '19-检查服务状态': 'Status'
    }
  },
  HASF: {
    api: 'http://10.0.3.223:8081/v2/api-docs?group=1.0',
    tags: {
      '01-域': 'Domain',
      '02-节点': 'Node',
      '03-node池': 'NodePool',
      '04-卷': 'Volume',
      '05-快照': 'Snapshot',
      '06-性能': 'Performance',
      '07-备份的dos资源': 'BackupResource',
      '08-NAS/DBS资源': 'ExternalResource',
      '09-用户': 'User',
      '10-服务': 'Service',
      'version-controller': 'System'
    }
  },
  FileCloud: {
    api: 'http://admin:123456@10.0.2.102:8080/v2/api-docs?group=1.0',
    tags: {
      '存储管理 | 存储资源管理': 'StorageResource',
      '存储管理 | 虚拟存储管理': 'Storage',
      '文件分享 | 我的分享': 'MyShareManage',
      '文件操作 | 回收站管理': 'FileRecycle',
      '文件操作 | 文件下载': 'FileDownload',
      '文件操作 | 文件删除': 'FileDelete',
      '文件操作 | 文件存储': 'FileCopy',
      '文件操作 | 文件查看': 'FileList',
      '系统管理 | 操作日志': 'OperationLog',
      '系统管理 | 用户管理': 'SystemMgmt',
      '系统管理 | 角色管理': 'RoleMgmt',
      '系统管理 | 调试': 'DebugMgmt',
      '自服务|空间信息': 'SpaceManage'
    }
  },
  FS: {
    api: 'http://10.0.3.218:8099/v2/api-docs',
    tags: {
      'apply-nfs-acl-relationship-controller': 'NfsAcl',
      'apply-samba-acl-relationship-controller': 'SambaAcl',
      'basic-error-controller': 'BasicError',
      'cancel-nfs-acl-relationship-controller': 'NfsAcl',
      'cancel-samba-acl-relationship-controller': 'SambaAcl',
      'create-nfs-acl-controller': 'NfsAcl',
      'create-nfs-gateway-controller': 'NfsGateway',
      'create-samba-acl-controller': 'SambaAcl',
      'create-samba-gateway-controller': 'SambaGateway',
      'format-controller': 'Format',
      'get-nfs-acl-controller': 'NfsAcl',
      'get-nfs-gateway-controller': 'NfsGateway',
      'get-samba-acl-controller': 'SambaAcl',
      'get-samba-gateway-controller': 'SambaGateway',
      'list-buckets-controller': 'Buckets',
      'list-nfs-acl-controller': 'NfsAcl',
      'list-nfs-gateway-controller': 'NfsGateway',
      'list-samba-acl-controller': 'SambaAcl',
      'list-samba-gateway-controller': 'SambaGateway',
      'mount-controller': 'Mount',
      'remove-nfs-acl-controller': 'NfsAcl',
      'remove-nfs-gateway-controller': 'NfsGateway',
      'remove-samba-acl-controller': 'SambaAcl',
      'remove-samba-gateway-controller': 'SambaGateway',
      '外部NAS/DBS资源': 'ExternalStorage',
      对象存储资源: 'ObjectStorage'
    },
    ignorePaths: [
      '/error',
      '/1/13{bucketName}',
      '/11320/545452{bucketName}/**',
      '/12/12{bucketName}/{objectKey}'
    ]
  }
}

function doGenerate(name, modular) {
  generate(
    apis[name].api,
    modular
      ? path.resolve(__dirname, '../', dist, name.toLowerCase())
      : path.resolve(__dirname, '../', dist),
    modular,
    modular ? 'api.ts' : `api-${name.toLowerCase()}.ts`,
    apis[name].tags,
    apis[name].ignorePaths
  )
}

doGenerate('FS', true)
