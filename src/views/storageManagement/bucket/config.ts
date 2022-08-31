import { reactive, h } from 'vue'

interface TableObject<T = any> {
  pageSize: number
  currentPage: number
  total: number
  tableList: T[]
  params: any
  loading: boolean
  currentRow: Nullable<T>
}

export const tableColumns = [
  {
    field: 'bucket',
    label: '桶名'
  },
  {
    field: 'creationDate',
    label: '创建日期'
  },
  {
    field: 'action',
    label: '操作'
  }
]

export const aclColumns = [
  {
    field: 'hostname',
    label: '客户端IP'
  },
  {
    field: 'readOnly',
    label: '访问权限',
    formatter: (_, __, value) => {
      return h('span', value ? '只读' : '读写')
    }
  },
  {
    field: 'sync',
    label: '同步/异步',
    formatter: (_, __, value) => {
      return h('span', value ? '同步' : '异步')
    }
  }
]

export const tableObject = reactive<TableObject>({
  // 页数
  pageSize: 10,
  // 当前页
  currentPage: 1,
  // 总条数
  total: 0,
  // 表格数据
  tableList: [],
  // AxiosConfig 配置
  params: {},
  // 加载中
  loading: true,
  // 当前行的数据
  currentRow: null
})
