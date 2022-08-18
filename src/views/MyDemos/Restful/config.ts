import { h, reactive } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { ElTag } from 'element-plus'
import { useValidator } from '@/hooks/web/useValidator'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { getTableListApi, delTableListApi, saveTableApi, getTableDetApi } from '@/api/table'
import { TableData } from '@/api/table/types'

const { t } = useI18n()
const { required } = useValidator()

// -------- 配置区域开始 -----------------------------------
// TODO 1）需在src/locales语言文件的“rest”字段下添加以“Restful”和“RestfulDes”为key的语言项
// TODO 2）把routes.ts中的路由引用（不要复制）到路由配置文件中：
//            a. 顶部引入 import { getRoutes as getRestfulRoutes } from '@/views/MyDemos/Restful/routes'
//            b. 合适的位置加入并展开（参数为父级路由） ...getRestfulRoutes('/my-demos')

export type ItemRecord = TableData
export const getListApi = getTableListApi
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
  getListApi,
  delListApi,
  getApi,
  saveApi,
  response: {
    list: 'list',
    total: 'total'
  },
  props: {
    expand: true
  }
}

const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'index',
    label: t('tableDemo.index'),
    type: 'index',
    form: {
      show: false
    },
    detail: {
      show: false
    }
  },
  {
    field: 'title',
    label: t('tableDemo.title'),
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
    field: 'author',
    label: t('tableDemo.author')
  },
  {
    field: 'display_time',
    label: t('tableDemo.displayTime'),
    form: {
      component: 'DatePicker',
      componentProps: {
        type: 'datetime',
        valueFormat: 'YYYY-MM-DD HH:mm:ss'
      }
    }
  },
  {
    field: 'importance',
    label: t('tableDemo.importance'),
    formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
      return h(
        ElTag,
        {
          type: cellValue === 1 ? 'success' : cellValue === 2 ? 'warning' : 'danger'
        },
        () =>
          cellValue === 1
            ? t('tableDemo.important')
            : cellValue === 2
            ? t('tableDemo.good')
            : t('tableDemo.commonly')
      )
    },
    form: {
      component: 'Select',
      componentProps: {
        options: [
          {
            label: '重要',
            value: 1
          },
          {
            label: '良好',
            value: 2
          },
          {
            label: '一般',
            value: 3
          }
        ]
      }
    }
  },
  {
    field: 'pageviews',
    label: t('tableDemo.pageviews'),
    form: {
      component: 'InputNumber',
      value: 0
    }
  },
  {
    field: 'content',
    label: t('exampleDemo.content'),
    table: {
      show: false
    },
    form: {
      component: 'Editor',
      colProps: {
        span: 24
      }
    },
    detail: {
      span: 24
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
  title: [required()],
  author: [required()],
  importance: [required()],
  pageviews: [required()],
  display_time: [required()],
  content: [required()]
})
// ---------------------------------- 配置区域结束 ---------

export const { allSchemas } = useCrudSchemas(crudSchemas)
