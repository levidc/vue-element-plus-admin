import { config as axiosConfig } from '@/config/axios/config'
import { useTable } from '@/hooks/web/useTable'
import { isNullOrUnDef } from '@/utils/is'
import { ElTable } from 'element-plus'
import { get } from 'lodash-es'
import { computed, nextTick, onMounted, Ref } from 'vue'

const sameObj = (obj1: Recordable, obj2: Recordable) => {
  const o1 = Object.keys(obj1).reduce((prev, k) => {
    if (obj1[k] !== null && obj1[k] !== undefined) prev[k] = obj1[k]
    return prev
  }, {})
  const o2 = Object.keys(obj2).reduce((prev, k) => {
    if (obj2[k] !== null && obj2[k] !== undefined) prev[k] = obj2[k]
    return prev
  }, {})
  const props1 = Object.getOwnPropertyNames(o1)
  const props2 = Object.getOwnPropertyNames(o2)
  if (props1.length != props2.length) {
    return false
  }
  for (let i = 0, max = props1.length; i < max; i++) {
    const propName = props1[i]
    if (JSON.stringify(o1[propName]) !== JSON.stringify(o2[propName])) {
      return false
    }
  }
  return true
}

const findTableColumn = (tableColumns: TableColumn[], field: string) => {
  for (const v of tableColumns) {
    if (v.field === field) {
      return v
    } else if (v.children?.length) {
      const c = findTableColumn(v.children, field)
      if (c) return c
    }
  }
  return null
}

const listTableColumnWithCol = (
  tableColumns: TableColumn[],
  col: string,
  initialValue: Recordable<TableColumn, string> = {}
) => {
  return tableColumns.reduce((prev, tc) => {
    if (tc[col]) prev[tc.field] = tc
    if (tc.children?.length) listTableColumnWithCol(tc.children, col, prev)
    return prev
  }, initialValue)
}

export const useTableX = <T = any>(config?: UseTableConfigX<T>, tableColumns?: TableColumn[]) => {
  let tableListAll: T[] = []
  let willReload = true
  let listParamCache: Recordable = {}
  let virtualPage = false
  let virtualPageDelay = 0
  const cfg = { ...config } as UseTableConfigX<T>
  let allColumns: Recordable<TableColumn, string> = {}
  let virtualFilterMethodColumns: Recordable<TableColumn, string> = {}
  let realFilterColumns: Recordable<TableColumn, string> = {}
  let virtualSortMethodColumns: Recordable<TableColumn, string> = {}
  let realSortColumns: Recordable<TableColumn, string> = {}
  if (tableColumns) {
    allColumns = listTableColumnWithCol(tableColumns, 'field')
    virtualFilterMethodColumns = listTableColumnWithCol(tableColumns, 'virtualFilterMethod')
    realFilterColumns = listTableColumnWithCol(tableColumns, 'realFilter')
    virtualSortMethodColumns = listTableColumnWithCol(tableColumns, 'virtualSortMethod')
    realSortColumns = listTableColumnWithCol(tableColumns, 'realSort')
  }

  const getListRst = <R extends (...args: any) => any>(
    list: Array<T>,
    total: number
  ): Parameters<R>[0] => {
    const rst: Parameters<R>[0] = {
      code: axiosConfig.result_code as any,
      data: {
        [cfg?.response.list || 'list']: list,
        [cfg?.response?.total || 'total']: total
      } as any
    }
    return rst
  }

  const enVirtualPage = () => {
    virtualPage = config?.use?.virtualPage || false
    virtualPageDelay = config?.use?.virtualPageDelay || 0
    if (!virtualPage || !config?.getListApi) return config

    const getListApi = cfg.getListApi
    cfg.getListApi = (...args) => {
      const { pageSize, pageIndex, ...param } = args[0] || {}

      const vtFilterParam = {}
      const vtSortParam = {}

      for (const field in param) {
        if (
          Object.prototype.hasOwnProperty.call(param, field) &&
          field != 'orderField' &&
          field != 'orderType'
        ) {
          if (allColumns[field] && !realFilterColumns[field]) {
            vtFilterParam[field] = param[field]
            delete param[field]
          }
        }
      }
      if (param['orderField'] && param['orderField']) {
        if (!realSortColumns[param['orderField']]) {
          vtSortParam['orderField'] = param['orderField']
          vtSortParam['orderType'] = param['orderType']
          delete param['orderField']
          delete param['orderType']
        }
      }

      if (!sameObj(listParamCache, param)) {
        willReload = true
      }
      listParamCache = { ...param }
      return new Promise((resolve, reject) => {
        const loadPageData = () => {
          willReload = false

          let list = tableListAll.filter((_) => true)
          if (vtFilterParam) {
            list = list.filter((row) => {
              for (const field in vtFilterParam) {
                if (vtFilterParam[field] === null || vtFilterParam[field] === undefined) continue
                if (Object.prototype.hasOwnProperty.call(vtFilterParam, field)) {
                  const same = virtualFilterMethodColumns[field]
                    ? virtualFilterMethodColumns[field].virtualFilterMethod(
                        vtFilterParam[field],
                        row,
                        virtualFilterMethodColumns[field]
                      )
                    : vtFilterParam[field] === row[field]
                  if (!same) return false
                }
              }
              return true
            })
          }
          if (vtSortParam) {
            const sortFunc = virtualSortMethodColumns[vtSortParam['orderField']]
              ? virtualSortMethodColumns[vtSortParam['orderField']].virtualSortMethod
              : (a: string, b: string) => {
                  if (a < b) return -1
                  if (a > b) return 1
                  return 0
                }
            list = list.sort(
              (a, b) =>
                (((vtSortParam['orderType'] as string) || '').toLowerCase() == 'desc' ? -1 : 1) *
                sortFunc(a[vtSortParam['orderField']], b[vtSortParam['orderField']])
            )
          }

          resolve(
            getListRst<typeof resolve>(
              list.filter(
                (_, index) => index < pageSize * pageIndex && index >= pageSize * (pageIndex - 1)
              ),
              list.length
            )
          )
        }

        if (!willReload) {
          setTimeout(() => {
            loadPageData()
          }, virtualPageDelay)
          return
        }

        args[0] = param
        getListApi(...args)
          .then((res) => {
            tableListAll = get(res.data || {}, cfg?.response.list as string)
            loadPageData()
          })
          .catch(reject)
      })
    }
    return cfg
  }

  enVirtualPage()

  const useHandler = useTable<T>(cfg)
  const setNeedReload = () => {
    tableListAll = []
    willReload = true
  }
  return { ...useHandler, methods: { ...useHandler.methods, setNeedReload } }
}

export const useSearchDefault = <T extends { params: any }>(
  searchSchema: FormSchema[],
  tableObject: T,
  defaultSearch?: Recordable
) => {
  const searchSchemaWithDefault = computed<FormSchema[]>(() => {
    return defaultSearch
      ? searchSchema.map((tc) => {
          if (
            tc.field &&
            defaultSearch &&
            tc.field in defaultSearch &&
            !isNullOrUnDef(defaultSearch[tc.field])
          ) {
            tc.value = defaultSearch[tc.field]
          }
          return tc
        })
      : searchSchema
  })
  if (defaultSearch) {
    tableObject.params = Object.assign(tableObject.params, defaultSearch)
  }

  return { searchSchemaWithDefault }
}

export const useOrderDefault = <T extends { params: any }>(
  tableColumns: TableColumn[],
  tableObject: T,
  elTableRef: Ref<ComponentRef<typeof ElTable> | undefined>,
  getList: () => Promise<void>,
  defaultOrder?: RestfulOrder
) => {
  const allColumns = listTableColumnWithCol(tableColumns, 'field')
  const defOrder: Required<RestfulOrder> = { orderField: '', orderType: 'asc', ...defaultOrder }
  let getDefaultOrderedList = () => {}

  if (defOrder.orderField) {
    tableObject.params = Object.assign(tableObject.params, defOrder)
    if (defOrder.orderField in allColumns) {
      getDefaultOrderedList = () => {
        onMounted(() => {
          nextTick(() => {
            defOrder?.orderField &&
              elTableRef.value?.sort(defOrder.orderField, defOrder.orderType + 'ending')
          })
        })
      }
    } else {
      getDefaultOrderedList = getList
    }
  } else {
    getDefaultOrderedList = getList
  }

  const mergeDefaultOrder = (order: RestfulOrder) => {
    const def = { orderType: 'asc' }
    const defOdr = defaultOrder?.orderField
      ? { ...def, ...defaultOrder }
      : { orderField: null, orderType: null }
    const odr = order?.orderField ? { ...def, ...order } : {}
    return { ...defOdr, ...odr }
  }

  return { getDefaultOrderedList, mergeDefaultOrder }
}
