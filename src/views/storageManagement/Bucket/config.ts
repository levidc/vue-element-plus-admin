import { h, reactive, ref } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { useValidator } from '@/hooks/web/useValidator'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { getTableListApi, delTableListApi, saveTableApi, getTableDetApi } from '@/api/table'
import { listBuckets } from '@/api/fs/Buckets'
import { TableData } from '@/api/table/types'
import { formatTime } from '@/utils/index'
import { ElButton, ElMessage } from 'element-plus'
const { t } = useI18n()
const { required } = useValidator()
export const validateHostName = ref([])

// -------- 配置区域开始 -----------------------------------
// TODO 1）需在src/locales语言文件的“rest”字段下添加以“Bucket”和“BucketDes”为key的语言项
// TODO 2）把routes.ts中的路由引用（不要复制）到路由配置文件中：
//            a. 顶部引入 import { getRoutes as getBucketRoutes } from '@/views/storageManagement//Bucket/routes'
//            b. 合适的位置加入并展开（参数为父级路由） ...getBucketRoutes('/my-demos')

// TODO 3）配置数据记录类型和增删改查接口
export type ItemRecord = TableData // 若没有类型，默认可设置为：Recordable
export const idCol = 'id'
export const getListApi = listBuckets
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
export const config: UseTableConfigX<ItemRecord> = {
  idCol,
  getListApi,
  delListApi,
  getApi,
  saveApi,
  response: {
    list: 'buckets',
    total: 'total'
  },
  use: {
    virtualPage: true
  }
}

const copyUrl = (str) => {
  navigator.clipboard.writeText(str)
  ElMessage.success('已复制')
}

const crudSchemas = reactive<CrudSchema[]>([
  // TODO 4）此处配置展示的项目
  {
    field: 'bucket',
    label: '桶名称',
    virtualFilterMethod: (value, row, _) => {
      console.log(value, row, '123')
      return row.bucket.indexOf(value) > -1
    },
    table: {
      show: true
    },
    search: {
      show: true
    },
    form: {
      colProps: {
        span: 24
      }
    },
    detail: {
      span: 24
    }
  },
  {
    field: 'storageName',
    label: '资源名称'
  },
  {
    field: 'nfsShare',
    label: '是否开启nfs共享',
    formatter: (_, __, value) => {
      return h('span', value ? '是' : '否')
    }
  },
  {
    field: 'sharePath',
    label: 'nfs共享路径'
    // <ElButton>
    //   <Icon icon="ep:search" class="mr-5px" />
    // </ElButton>
    // formatter: (_, __, value) => {
    //   return h(
    //     Icon,
    //     {
    //       icon: 'ep:DocumentCopy'
    //     },
    //     () => 'value'
    //   )
    // }
  },
  {
    field: 'creationDate',
    label: '创建日期',
    formatter: (_, __, value) => {
      // const dateFormat = function (v, format) {
      //   const date = new Date(v)
      //   const o = {
      //     'M+': date.getMonth() + 1, //month
      //     'd+': date.getDate(), //day
      //     'H+': date.getHours(), //hour
      //     'm+': date.getMinutes(), //minute
      //     's+': date.getSeconds(), //second
      //     S: date.getMilliseconds() //millisecond
      //   }
      //   if (/(y+)/.test(format))
      //     format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))

      //   for (const k in o)
      //     if (new RegExp('(' + k + ')').test(format))
      //       format = format.replace(
      //         RegExp.$1,
      //         RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      //       )
      //   return format
      // }
      // console.log(dateFormat('Mon Jul 18 14:51:22 CST 2022', 'yyyy/MM/dd HH:mm:ss'), '123')
      return formatTime(value, 'yyyy/MM/dd HH:mm:ss')
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

export const renderAddForm = [
  // {
  //   field: 'bucket',
  //   label: '桶名称',
  //   form: {
  //     colProps: {
  //       span: 24
  //     },
  //     component: 'Input',
  //     componentProps: {
  //       disalbed: true
  //     }
  //   }
  // },
  {
    field: 'hostname',
    label: '客户端IP',
    component: 'Input',
    formItemProps: {
      rules: [
        required(),
        {
          trigger: ['change', 'blur'],
          validator: (_, data, cb) => {
            // hostname 唯一校验
            const res = validateHostName.value.filter((item) => item.hostname === data)
            if (res && res.length) {
              return cb('客户端IP重复请修改')
            } else {
              cb()
            }
          }
        }
      ]
    }
  },
  {
    field: 'readOnly',
    label: '访问权限',
    value: true,
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
    value: true,
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

export const rules = reactive({
  // TODO 5）此处配置修改时的验证规则
  // title: [required()],
})
// ---------------------------------- 配置区域结束 ---------

export const { allSchemas } = useCrudSchemas(crudSchemas)
