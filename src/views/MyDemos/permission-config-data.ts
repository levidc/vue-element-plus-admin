export const permissionConfig = {
  Account: [
    {
      apiName: 'resetAccountPassword',
      category: 'Account',
      chineseText: '重置用户密码',
      englishText: 'Reset Account Password',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'createAccount',
      category: 'Account',
      chineseText: '新建用户',
      englishText: 'Create Account',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'assignRoles',
      category: 'Account',
      chineseText: '角色赋予',
      englishText: 'Assign Roles',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'assignResources',
      category: 'Account',
      chineseText: '资源赋予',
      englishText: 'Assign Resources',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteAccounts',
      category: 'Account',
      chineseText: '删除用户',
      englishText: 'Delete Accounts',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  SnapShot: [
    {
      apiName: 'rollbackFromSnapshot',
      category: 'SnapShot',
      chineseText: '从快照回滚',
      englishText: 'Rollback From Snapshot',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteSnapshot',
      category: 'SnapShot',
      chineseText: '删除快照',
      englishText: 'Delete Snapshot',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'createSnapshot',
      category: 'SnapShot',
      chineseText: '创建快照',
      englishText: 'Create Snapshot',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  StoragePool: [
    {
      apiName: 'createStoragePool',
      category: 'StoragePool',
      chineseText: '创建存储池',
      englishText: 'Create StoragePool',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteStoragePool',
      category: 'StoragePool',
      chineseText: '删除存储池',
      englishText: 'Delete StoragePool',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'updateStoragePool',
      category: 'StoragePool',
      chineseText: '更新存储池',
      englishText: 'Update StoragePool',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'removeArchiveFromStoragePool',
      category: 'StoragePool',
      chineseText: '移除存储池中的磁盘',
      englishText: 'Remove Archive From StoragePool',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  Rebalance: [
    {
      apiName: 'getUnAppliedRebalanceRulePool',
      category: 'Rebalance',
      chineseText: '获取未应用到rebalance规则的存储池信息',
      englishText: 'get pool not applied to rebalance rule',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'addRebalanceRule',
      category: 'Rebalance',
      chineseText: '创建rebalance规则',
      englishText: 'create rebalance rule',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'getRebalanceRule',
      category: 'Rebalance',
      chineseText: '获取rebalance规则信息',
      englishText: 'get rebalance rule information',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'applyRebalanceRule',
      category: 'Rebalance',
      chineseText: '应用rebalance规则到存储池',
      englishText: 'apply rebalance rule to pool',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'getAppliedRebalanceRulePool',
      category: 'Rebalance',
      chineseText: '获取rebalance规则应用的存储池信息',
      englishText: 'get rebalance rule applied pool',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteRebalanceRule',
      category: 'Rebalance',
      chineseText: '删除rebalance规则',
      englishText: 'delete rebalance rule',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'updateRebalanceRule',
      category: 'Rebalance',
      chineseText: '修改rebalance规则',
      englishText: 'update rebalance rule',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'unApplyRebalanceRule',
      category: 'Rebalance',
      chineseText: '从存储池中撤销应用的rebalance规则',
      englishText: 'revocation rebalance rule from pool',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  Access_Rule: [
    {
      apiName: 'cancelVolumeAccessRules',
      category: 'Access_Rule',
      chineseText: '取消客户机',
      englishText: 'Cancel Volume Access Rules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'createVolumeAccessRules',
      category: 'Access_Rule',
      chineseText: '创建客户机',
      englishText: 'Create Volume AccessRules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteVolumeAccessRules',
      category: 'Access_Rule',
      chineseText: '删除客户机',
      englishText: 'Delete Volume Access Rules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'createIscsiAccessRules',
      category: 'Access_Rule',
      chineseText: '创建CHAP认证',
      englishText: 'Create Iscsi AccessRules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'applyVolumeAccessRuleOnVolumes',
      category: 'Access_Rule',
      chineseText: '应用客户机',
      englishText: 'Apply Volume Access Rules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteIscsiAccessRules',
      category: 'Access_Rule',
      chineseText: '删除CHAP认证',
      englishText: 'Delete Iscsi Access Rules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'cancelIscsiAccessRules',
      category: 'Access_Rule',
      chineseText: '取消CHAP认证',
      englishText: 'Cancel Iscsi Access Rules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'cancelVolAccessRuleAllApplied',
      category: 'Access_Rule',
      chineseText: '取消客户机',
      englishText: 'Cancel Volume Access Rules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'applyIscsiAccessRules',
      category: 'Access_Rule',
      chineseText: '应用CHAP认证',
      englishText: 'Apply Iscsi Access Rules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  License: [
    {
      apiName: 'updateLicense_Thrift',
      category: 'License',
      chineseText: '更新序列号',
      englishText: 'Update License',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'viewLicense_Thrift',
      category: 'License',
      chineseText: '查看序列号',
      englishText: 'View License',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'genericLicenseSequenceNumber_Thrift',
      category: 'License',
      chineseText: '生成序列号',
      englishText: 'Generic License SequenceNumber',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  PerformanceData: [
    {
      apiName: 'verifyReportStatisticsPermission',
      category: 'PerformanceData',
      chineseText: '导出性能报表',
      englishText: 'Export Performance Data Report',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'listMultiCompressedPerformanceData',
      category: 'PerformanceData',
      chineseText: '性能统计',
      englishText: 'Performance Data Statistic',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  Driver: [
    {
      apiName: 'umountDriver',
      category: 'Driver',
      chineseText: '卸载驱动',
      englishText: 'Umount Driver',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'launchDriver',
      category: 'Driver',
      chineseText: '挂载驱动',
      englishText: 'Launch Driver',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  AlertTemplate: [
    {
      apiName: 'createAlertRule',
      category: 'AlertTemplate',
      chineseText: '创建告警规则',
      englishText: 'Create Alert Rule',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'mergeAlertRule',
      category: 'AlertTemplate',
      chineseText: '合并告警规则',
      englishText: 'Merge Alert Rule',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteAlertRule',
      category: 'AlertTemplate',
      chineseText: '删除告警规则',
      englishText: 'Delete Alert Rule',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'updateAlertRule',
      category: 'AlertTemplate',
      chineseText: '修改告警规则',
      englishText: 'Update Alert Rule',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  resultMessage: {
    message: 'success'
  },
  AlertFoward: [
    {
      apiName: 'updateSnmpForwardItem',
      category: 'AlertFoward',
      chineseText: '创建和更新snmp配置',
      englishText: 'update Snmp Forward Item',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'saveEmailForwardItem',
      category: 'AlertFoward',
      chineseText: '创建Email转发项',
      englishText: 'Save Email Forward Item',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'saveOrUpdateSmtpItem',
      category: 'AlertFoward',
      chineseText: '创建和更新smtp配置',
      englishText: 'Save or Update Smtp Item',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'updateEmailForwardItem',
      category: 'AlertFoward',
      chineseText: '更新Email转发项',
      englishText: 'Update Email Forward Item',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteEmailForwardItem',
      category: 'AlertFoward',
      chineseText: '删除Email转发项',
      englishText: 'Delete Email Forward Item',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  Role: [
    {
      apiName: 'deleteRoles',
      category: 'Role',
      chineseText: '删除角色',
      englishText: 'Delete Roles',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'createRole',
      category: 'Role',
      chineseText: '创建角色',
      englishText: 'Create Role',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'updateRole',
      category: 'Role',
      chineseText: '更新角色',
      englishText: 'Update Role',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  QOS: [
    {
      apiName: 'createIOLimitations',
      category: 'QOS',
      chineseText: '创建数据访问QOS',
      englishText: 'Create IO Limitations',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'updateMigrationRules',
      category: 'QOS',
      chineseText: '更新数据重构QOS',
      englishText: 'Update Migration Rules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'createMigrationRules',
      category: 'QOS',
      chineseText: '创建数据重构QOS',
      englishText: 'Create Migration Rules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteMigrationRules',
      category: 'QOS',
      chineseText: '删除数据重构QOS',
      englishText: 'Delete Migration Rules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'applyMigrationRules',
      category: 'QOS',
      chineseText: '应用数据重构QOS',
      englishText: 'Apply Migration Rules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'cancelIOLimitations',
      category: 'QOS',
      chineseText: '取消数据访问QOS',
      englishText: 'Cancel IO Limitations',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'cancelMigrationRules',
      category: 'QOS',
      chineseText: '取消数据重构QOS',
      englishText: 'Cancel Migration Rules',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'updateIOLimitations',
      category: 'QOS',
      chineseText: '更新数据访问QOS',
      englishText: 'Update IO Limitations',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteIOLimitations',
      category: 'QOS',
      chineseText: '删除数据访问QOS',
      englishText: 'Delete IO Limitations',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'applyIOLimitations',
      category: 'QOS',
      chineseText: '应用数据访问QOS',
      englishText: 'Apply IO Limitations',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  Volume: [
    {
      apiName: 'cloneVolume',
      category: 'Volume',
      chineseText: '克隆卷',
      englishText: 'Clone Volume',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'copyVolumeToExistVolume',
      category: 'Volume',
      chineseText: '复制卷数据',
      englishText: 'Copy Volume To Exist Volume',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'recycleVolume',
      category: 'Volume',
      chineseText: '回收卷',
      englishText: 'Recycle Volume',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'moveVolume',
      category: 'Volume',
      chineseText: '迁移卷',
      englishText: 'Move Volume',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'confirmFixVolume',
      category: 'Volume',
      chineseText: '确认修复卷',
      englishText: 'Confirm Fix Volume',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'extendVolume',
      category: 'Volume',
      chineseText: '扩展卷',
      englishText: 'Extend Volume',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'fixVolume',
      category: 'Volume',
      chineseText: '修复卷',
      englishText: 'Fix Volume',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'createSnapshotVolume',
      category: 'Volume',
      chineseText: '创建快照卷',
      englishText: 'Create Snapshot Volume',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'createVolume',
      category: 'Volume',
      chineseText: '创建卷',
      englishText: 'Create Volume',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteVolume',
      category: 'Volume',
      chineseText: '删除卷',
      englishText: 'Delete Volume',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  Hardware: [
    {
      apiName: 'deleteServerNodes',
      category: 'Hardware',
      chineseText: '删除服务器节点',
      englishText: 'Delete Server Nodes',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'markInstanceMaintenance',
      category: 'Hardware',
      chineseText: '标记节点维护状态',
      englishText: 'Mark Instance Maintenance',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'fixConfigMismatchDisk',
      category: 'Hardware',
      chineseText: '修复配置不匹配磁盘',
      englishText: 'Fix Config Mismatch Disk',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'cancelInstanceMaintenance',
      category: 'Hardware',
      chineseText: '取消节点维护状态',
      englishText: 'Cancel Instance Maintenance',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'offlineDisk',
      category: 'Hardware',
      chineseText: '磁盘离线',
      englishText: 'Offline Disk',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'onlineDisk',
      category: 'Hardware',
      chineseText: '磁盘上线',
      englishText: 'Online Disk',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'changeDiskLightStatus',
      category: 'Hardware',
      chineseText: '修改硬盘灯状态',
      englishText: 'Change Disk Light Status',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'updateServerNode',
      category: 'Hardware',
      chineseText: '修改服务器节点信息',
      englishText: 'Update Server Node',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  Domain: [
    {
      apiName: 'updateDomain',
      category: 'Domain',
      chineseText: '更新域',
      englishText: 'Update Domain',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteDomain',
      category: 'Domain',
      chineseText: '删除域',
      englishText: 'Delete Domain',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'removeDatanodeFromDomain',
      category: 'Domain',
      chineseText: '移除域中的数据节点',
      englishText: 'Remove Datanode From Domain',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'createDomain',
      category: 'Domain',
      chineseText: '创建域',
      englishText: 'Create Domain',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  AlertMessage: [
    {
      apiName: 'alertsClear',
      category: 'AlertMessage',
      chineseText: '告警清除',
      englishText: 'Alerts Clear',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteAlerts',
      category: 'AlertMessage',
      chineseText: '告警删除',
      englishText: 'Delete Alerts',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'alertsAcknowledge',
      category: 'AlertMessage',
      chineseText: '告警确认',
      englishText: 'Alerts Acknowledge',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'clearAlertsAcknowledge',
      category: 'AlertMessage',
      chineseText: '取消告警确认',
      englishText: 'Clear Alerts Acknowledge',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  DTO: [
    {
      apiName: 'deleteDTOUsers',
      category: 'DTO',
      chineseText: '删除DTO用户',
      englishText: 'delete DTO user',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'saveDTOUser',
      category: 'DTO',
      chineseText: '创建DTO用户',
      englishText: 'create DTO user',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'updateDTOUserFlag',
      category: 'DTO',
      chineseText: '修改DTO用户启用状态',
      englishText: 'update DTO user flag',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'deleteDTOSendLog',
      category: 'DTO',
      chineseText: '删除DTO发送日志',
      englishText: 'delete DTO SendLog',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    },
    {
      apiName: 'updateDTOUser',
      category: 'DTO',
      chineseText: '修改DTO用户',
      englishText: 'update DTO user',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ],
  Other: [
    {
      apiName: 'saveOperationLogsToCSV',
      category: 'Other',
      chineseText: '导出操作日志',
      englishText: 'Save Operations To File',
      setApiName: true,
      setCategory: true,
      setChineseText: true,
      setEnglishText: true
    }
  ]
}
