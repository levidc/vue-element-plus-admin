export const PerformanceType = [
  { label: '空', value: '0' },
  { label: '高', value: '1' },
  { label: '中', value: '2' },
  { label: '低', value: '3' }
]

export const StorageStatus = [
  { label: '空', value: 'STORAGE_NULL' },
  { label: '损坏', value: 'STORAGE_BROKEN' },
  { label: '在线', value: 'STORAGE_ONLINE' },
  { label: '离线', value: 'STORAGE_OFFLINE' },
  { label: '不匹配', value: 'CONFIG_MISMATCH' }
]

export const StorageType = [
  { label: 'S3', value: 'S3' },
  { label: 'DOS', value: 'DOS' },
  { label: 'MIO', value: 'MIO' },
  { label: 'NAS', value: 'NAS' },
  { label: 'DBS', value: 'DBS' },
  { label: 'REMOTE_DISK', value: 'REMOTE_DISK' },
  { label: 'LOCAL_DISK', value: 'LOCAL_DISK' }
]

export const NFSType = [
  { label: 'NFS', value: 'NFS' },
  { label: 'SAMBA', value: 'SAMBA' }
]

export const NFStatus = {
  UNAVAILABLE: '不可用',
  AVAILABLE: '可用',
  REMOVING: '删除中',
  CREATING: '创建中'
}
