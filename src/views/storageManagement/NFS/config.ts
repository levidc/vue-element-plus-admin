import { h, reactive } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { useValidator } from '@/hooks/web/useValidator'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { getTableListApi, delTableListApi, saveTableApi, getTableDetApi } from '@/api/table'
import { TableData } from '@/api/table/types'
import { listNFSGateway, createNFSGateway } from '@/api/fs/NfsGateway'
import { formItemProps } from 'element-plus'
import { formatDate } from '@/utils/index'
const { t } = useI18n()
const { required } = useValidator()

// -------- 配置区域开始 -----------------------------------
// TODO 1）需在src/locales语言文件的“rest”字段下添加以“NFS”和“NFSDes”为key的语言项
// TODO 2）把routes.ts中的路由引用（不要复制）到路由配置文件中：
//            a. 顶部引入 import { getRoutes as getNFSRoutes } from '@/views/storageManagement/NFS/routes'
//            b. 合适的位置加入并展开（参数为父级路由） ...getNFSRoutes('/my-demos')

// TODO 3）配置数据记录类型和增删改查接口
export type ItemRecord = TableData // 若没有类型，默认可设置为：Recordable
export const getListApi = listNFSGateway
export const delListApi = delTableListApi
export const saveApi = createNFSGateway
export const getApi = getTableDetApi

// 虚拟分页配置方式
// a）在config的use中开启virtualPage:true
// b）虚拟分页开启后，默认检索和排序都是本地模式，可通过在crudSchemas配置项中设置realFilter:true、realSort:true
//    单独此字段的远程检索排序模式
// c）启用排序需在crudSchemas配置项中设置 sortable:'custom'（不能设为true），可通过virtualSortMethod来替换
//    默认的排序方式：virtualSortMethod:(a,b)=>{return -1/0/1}
// d）可通过virtualFilterMethod来替换默认的排序方式：virtualFilterMethod:(value,row,column)=>{return true/false}
//    有多个检索字段时，virtualFilterMethod可能会调用多次，只要有一次返回false，此数据就不会出现在最终列表中

export const permission = [
  {
    label: '只读',
    value: 'read'
  },
  {
    label: '只写',
    value: 'write'
  }
]
export const renderAddForm = [
  {
    field: 'hostname',
    label: 'hostname',
    component: 'Input',
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'readOnly',
    label: '读写控制',
    component: 'RadioButton',
    componentProps: {
      options: [
        {
          label: '只读',
          value: true
        },
        {
          label: '读写',
          value: false
        }
      ]
    }
  },
  {
    field: 'sync',
    label: '同步/异步',
    component: 'RadioButton',
    componentProps: {
      options: [
        {
          label: '同步',
          value: true
        },
        {
          label: '异步',
          value: false
        }
      ]
    }
  }
]

export const NFSType = [
  { label: 'NFS', value: 'NFS' },
  { label: 'SAMBA', value: 'SAMBA' }
]

export const config: UseTableConfigX<ItemRecord> = {
  idCol: 'gateWayId',
  getListApi,
  delListApi,
  getApi,
  saveApi,
  response: {
    list: 'NFSGatewayList',
    total: 'total'
  },
  use: {
    virtualPage: true
  }
}

const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'gatewayName',
    label: t('externalStorage.name'),
    table: {
      show: true
    },
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
    field: 'storageId',
    label: '对象资源',
    table: {
      show: false
    },
    form: {
      component: 'Select',
      componentProps: {
        options: []
      },
      formItemProps: {
        rules: [required()]
      }
    }
  },
  {
    field: 'gatewayType',
    label: '网关类型',
    form: {
      component: 'Select',
      componentProps: {
        options: NFSType
      },
      formItemProps: {
        rules: [required()]
      }
    }
  },
  {
    field: 'status',
    label: '状态',
    form: {
      show: false
    }
  },
  {
    field: 'mountPath',
    label: '挂载路径',
    form: {
      show: false
    }
  },
  {
    field: 'virtualIp',
    label: '虚拟Ip',
    form: {
      show: false
    }
  },
  {
    field: 'sharedBucket',
    label: '共享存储桶',
    form: {
      show: false
    }
  },
  {
    field: 'createTime',
    label: '创建时间',
    form: {
      show: false
    },
    formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
      return formatDate(cellValue)
    }
  },
  {
    field: 'lastReportTime',
    label: '最后上报时间',
    form: {
      show: false
    },
    formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
      return formatDate(cellValue)
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
