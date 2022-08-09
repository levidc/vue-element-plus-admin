import { h, reactive } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { useValidator } from '@/hooks/web/useValidator'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { getTableListApi, delTableListApi, saveTableApi, getTableDetApi } from '@/api/table'

const { t } = useI18n()
const { required } = useValidator()

// -------- 配置区域开始 -----------------------------------
// TODO 1）需在src/locales语言文件的“rest”字段下添加以“Test”和“TestDes”为key的语言项
// TODO 2）把routes.ts中的路由引用（不要复制）到路由配置文件中：
//            a. 顶部引入 import { getRoutes as getTestRoutes } from '@/views/Test/routes'
//            b. 合适的位置加入并展开（参数为父级路由） ...getTestRoutes('/my-demos')

// TODO 3）配置增删改查接口
export const getListApi = getTableListApi
export const delListApi = delTableListApi
export const saveApi = saveTableApi
export const getApi = getTableDetApi

const crudSchemas = reactive<CrudSchema[]>([
  // TODO 4）此处配置展示的项目
  {
    field: 'title',
    label: t('tableDemo.title'),
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
