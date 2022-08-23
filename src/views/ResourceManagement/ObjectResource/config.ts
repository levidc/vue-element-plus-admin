import { h, reactive } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { useValidator } from '@/hooks/web/useValidator'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { getTableListApi, delTableListApi, saveTableApi, getTableDetApi } from '@/api/table'
import { TableData } from '@/api/table/types'
import { listObjectStorageResource } from '@/api/fs/ObjectStorage'
const { t } = useI18n()
const { required } = useValidator()

// -------- 配置区域开始 -----------------------------------
// TODO 1）需在src/locales语言文件的“rest”字段下添加以“ObjectResource”和“ObjectResourceDes”为key的语言项
// TODO 2）把routes.ts中的路由引用（不要复制）到路由配置文件中：
//            a. 顶部引入 import { getRoutes as getObjectResourceRoutes } from '@/views/ResourceManagement/ObjectResource/routes'
//            b. 合适的位置加入并展开（参数为父级路由） ...getObjectResourceRoutes('/my-demos')

// TODO 3）配置数据记录类型和增删改查接口
export type ItemRecord = TableData // 若没有类型，默认可设置为：Recordable
export const getListApi = listObjectStorageResource
export const delListApi = delTableListApi
export const saveApi = saveTableApi
export const getApi = getTableDetApi

// 虚拟分页配置方式
// a）在config的use中开启virtualPage:true
// b）虚拟分页开启后，默认检索和排序都是本地模式，可通过在crudSchemas配置项中设置realFilter:true、realSort:true
//    单独此字段的远程检索排序模式
// c）启用排序需在crudSchemas配置项中设置 sortable:'custom'（不能设为true），可通过virtualSortMethod来替换
//    默认的排序方式：virtualSortMethod:(a,b)=>{return -1/0/1}
// d）可通过virtualFilterMethod来替换默认的排序方式：virtualFilterMethod:(value,row,column)=>{return true/false}
//    有多个检索字段时，virtualFilterMethod可能会调用多次，只要有一次返回false，此数据就不会出现在最终列表中

export const PerformanceType = [
  { label: 'PERFOR_NULL', value: '0' },
  { label: 'HIGH', value: '1' },
  { label: 'MIDDLE', value: '2' },
  { label: 'LOW', value: '3' }
]

export const StorageStatus = [
  { label: 'STORAGE_NULL', value: 'STORAGE_NULL' },
  { label: 'STORAGE_BROKEN', value: 'STORAGE_BROKEN' },
  { label: 'STORAGE_ONLINE', value: 'STORAGE_ONLINE' },
  { label: 'STORAGE_OFFLINE', value: 'STORAGE_OFFLINE' },
  { label: 'CONFIG_MISMATCH', value: 'CONFIG_MISMATCH' }
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

export const config: UseTableConfigX<ItemRecord> = {
  getListApi,
  delListApi,
  getApi,
  saveApi,
  response: {
    list: 'storageResources',
    total: 'total'
  }
}

const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'storageName',
    label: t('externalStorage.name'),
    search: {
      show: true
    },
    form: {
      formItemProps: {
        rules: [required()]
      }
    }
  },
  {
    field: 'storageStatus',
    label: t('common.status'),
    form: {
      component: 'Select',
      componentProps: {
        options: [
          { label: 'STORAGE_NULL', value: 'STORAGE_NULL' },
          { label: 'STORAGE_BROKEN', value: 'STORAGE_BROKEN' },
          { label: 'STORAGE_ONLINE', value: 'STORAGE_ONLINE' },
          { label: 'STORAGE_OFFLINE', value: 'STORAGE_OFFLINE' },
          { label: 'CONFIG_MISMATCH', value: 'CONFIG_MISMATCH' }
        ]
      },
      formItemProps: {
        rules: [required()]
      }
    }
    // formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
    //   return h(
    //     ElTag,
    //     {
    //       type: cellValue === 1 ? 'success' : cellValue === 2 ? 'warning' : 'danger'
    //     },
    //     () => (cellValue === 1 ? '在线' : '离线')
    //   )
    // },
    // form: {
    //   component: 'Select',
    //   componentProps: {
    //     options: [
    //       {
    //         label: '在线',
    //         value: '1'
    //       },
    //       {
    //         label: '离线',
    //         value: '2'
    //       }
    //     ]
    //   }
    // }
  },
  {
    field: 'storageType',
    label: '存储类型',
    form: {
      component: 'Select',
      componentProps: {
        options: [
          { label: 'S3', value: 'S3' },
          { label: 'DOS', value: 'DOS' },
          { label: 'MIO', value: 'MIO' },
          { label: 'NAS', value: 'NAS' },
          { label: 'DBS', value: 'DBS' },
          { label: 'REMOTE_DISK', value: 'REMOTE_DISK' },
          { label: 'LOCAL_DISK', value: 'LOCAL_DISK' }
        ]
      },
      formItemProps: {
        rules: [required()]
      }
    }
  },
  {
    field: 'performanceType',
    label: '性能类型',
    form: {
      component: 'Select',
      componentProps: {
        options: PerformanceType
      },
      formItemProps: {
        rules: [required()]
      }
    },
    formatter: (_: Recordable, __: TableColumn, cellValue: string) => {
      return t('enumerable.' + cellValue)
    }
  },
  {
    field: 'totalSpace',
    label: t('common.totalSpace') + '(GB)',
    form: {
      show: false
      // formItemProps: {
      //   rules: [
      //     {
      //       validator: (_, data, cb) => {
      //         const reg = /^(0|[1-9]\d*)$/
      //         if (data !== '' && !reg.test(data)) {
      //           return cb('输入大于等于的正整数')
      //         } else {
      //           cb()
      //         }
      //       }
      //     }
      //   ]
      // }
    }
  },
  {
    field: 'usedSpace',
    label: t('common.usedSpace') + '(GB)',
    form: {
      show: false
    }
  },
  {
    field: 'allocatedSpace',
    label: '已分配容量',
    form: {
      show: false
    }
  },

  {
    field: 'url',
    label: '路径',
    form: {
      formItemProps: {
        rules: [required()]
      }
    }
  },
  {
    field: 'userName',
    label: '用户名',
    // table: {
    //   show: false
    // }
    form: {
      formItemProps: {
        rules: [required()]
      }
    }
  },
  {
    field: 'password',
    label: '密码',
    table: {
      show: false
    },
    form: {
      component: 'Input',
      componentProps: {
        type: 'password'
      },
      formItemProps: {
        rules: [required()]
      }
    }
  }
  // {
  //   field: 'action',
  //   width: '260px',
  //   label: t('tableDemo.action'),
  //   form: {
  //     show: false
  //   },
  //   detail: {
  //     show: false
  //   }
  // }
])

export const rules = reactive({
  // TODO 5）此处配置修改时的验证规则
  // title: [required()],
})
// ---------------------------------- 配置区域结束 ---------

export const { allSchemas } = useCrudSchemas(crudSchemas)
