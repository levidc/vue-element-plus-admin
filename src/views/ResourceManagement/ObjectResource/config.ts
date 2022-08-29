import { reactive } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { useValidator } from '@/hooks/web/useValidator'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { TableData } from '@/api/table/types'
import {
  listObjectStorageResource,
  addObjectStorageResource,
  removeObjectStorageResource,
  getObjectStorageResource
} from '@/api/fs/ObjectStorage'
import { PerformanceType, StorageStatus, StorageType } from '@/locales/enum'
import { ApiPacker } from '@/hooks/web/useApiX'
const { t } = useI18n()
const { required } = useValidator()
// export type modRow = {
//   id: string
//   author: string
//   title: string
//   content: string
//   importance: number
//   display_time: string
//   pageviews: number
// }
// -------- 配置区域开始 -----------------------------------
// TODO 1）需在src/locales语言文件的“rest”字段下添加以“ObjectResource”和“ObjectResourceDes”为key的语言项
// TODO 2）把routes.ts中的路由引用（不要复制）到路由配置文件中：
//            a. 顶部引入 import { getRoutes as getObjectResourceRoutes } from '@/views/ResourceManagement/ObjectResource/routes'
//            b. 合适的位置加入并展开（参数为父级路由） ...getObjectResourceRoutes('/my-demos')

// TODO 3）配置数据记录类型和增删改查接口

// 传递id、删除、get、id、不支持多参数传递
export const idCol = 'storageId'
export type ItemRecord = TableData // 若没有类型，默认可设置为：Recordable
export const getListApi = listObjectStorageResource
export const delListApi = ApiPacker.from(removeObjectStorageResource)
  .paramArrFirst()
  .paramArrToObj(idCol)
  .build()

// removeObjectStorageResource
export const saveApi = addObjectStorageResource
export const getApi = getObjectStorageResource

// 虚拟分页配置方式
// a）在config的use中开启virtualPage:true
// b）虚拟分页开启后，默认检索和排序都是本地模式，可通过在crudSchemas配置项中设置realFilter:true、realSort:true
//    单独此字段的远程检索排序模式
// c）启用排序需在crudSchemas配置项中设置 sortable:'custom'（不能设为true），可通过virtualSortMethod来替换
//    默认的排序方式：virtualSortMethod:(a,b)=>{return -1/0/1}
// d）可通过virtualFilterMethod来替换默认的排序方式：virtualFilterMethod:(value,row,column)=>{return true/false}
//    有多个检索字段时，virtualFilterMethod可能会调用多次，只要有一次返回false，此数据就不会出现在最终列表中

export const config: UseTableConfigX<ItemRecord> = {
  idCol,
  getListApi,
  delListApi,
  getApi,
  saveApi,
  response: {
    list: 'storageResources',
    total: 'total'
  },
  use: {
    virtualPage: true
  }
}

const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'storageName',
    label: t('externalStorage.name'),
    search: {
      show: true
    },
    sortable: 'custom',
    virtualFilterMethod: (value, row, _) => {
      return row.storageName.indexOf(value) > -1
    },
    virtualSortMethod: (a, b) => {
      return a - b
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
        options: StorageStatus
      },
      formItemProps: {
        rules: [required()]
      }
    }
  },
  {
    field: 'storageType',
    label: '存储类型',
    form: {
      component: 'Select',
      componentProps: {
        options: StorageType
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
  // {
  //   field: 'totalSpace',
  //   label: t('common.totalSpace') + '(GB)',
  //   form: {
  //     // formItemProps: {
  //     //   rules: [
  //     //     {
  //     //       validator: (_, data, cb) => {
  //     //         const reg = /^(0|[1-9]\d*)$/
  //     //         if (data !== '' && !reg.test(data)) {
  //     //           return cb('输入大于等于的正整数')
  //     //         } else {
  //     //           cb()
  //     //         }
  //     //       }
  //     //     }
  //     //   ]
  //     // }
  //   }
  // },
  // {
  //   field: 'usedSpace',
  //   label: t('common.usedSpace') + '(GB)'
  // },
  // {
  //   field: 'allocatedSpace',
  //   label: '已分配容量' + '(GB)'
  // },

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
  },
  {
    field: 'action',
    width: '260px',
    label: t('tableDemo.action'),
    form: {
      show: false
    },
    detail: {
      show: false
    }
  }
])

export const rules = reactive({
  // TODO 5）此处配置修改时的验证规则
  // title: [required()],
})
// ---------------------------------- 配置区域结束 ---------

export const { allSchemas } = useCrudSchemas(crudSchemas)
