<script setup lang="ts">
import { useValidator } from '@/hooks/web/useValidator'
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Dialog } from '@/components/Dialog'
import {
  ElButton,
  ElDropdown,
  ElDropdownMenu,
  ElTabPane,
  ElTabs,
  ElTag,
  ElCascaderPanel
} from 'element-plus'
import { Form } from '@/components/Form'
import { mockNFS } from '@/api/storageManagement'
import { delTableListApi } from '@/api/table'
import { Search } from '@/components/Search'
import { ref, reactive, computed, h, watch, unref } from 'vue'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { Table } from '@/components/Table'
import { useTable } from '@/hooks/web/useTable'
import { TableData } from '@/api/table/types'
const { t } = useI18n()
const { required } = useValidator()
// 操作数据后更新视图
let activeName = ref('overview')

const options = [
  {
    value: 'quota',
    label: '修改存储桶配额'
  },
  {
    value: 'access',
    label: '修改访问权限'
  },
  {
    value: 'owner',
    label: '修改拥有者'
  },
  {
    value: 'nfsShare',
    label: 'NFS共享',
    children: [
      { value: 'set', label: '设置NFS共享' },
      { value: 'unset', label: '取消NFS共享' },
      { value: 'add', label: '添加客户端' },
      { value: 'remove', label: '移除客户端' }
    ]
  },
  {
    value: 'setAccess',
    label: '修改访问密钥'
  },
  {
    value: 'setWrite',
    label: '设置写保护'
  },
  {
    value: 'versions',
    label: '设置多版本'
  },
  {
    value: 'lifecycle',
    label: '生命周期管理'
  },
  {
    value: 'lifeCycleExe',
    label: '生命周期执行时间'
  },
  {
    value: 'delete',
    label: '删除',
    disabled: true
  }
]

const overviewColumn = [
  {
    field: 'body',
    label: t('externalStorage.name'),
    search: {
      show: true
    },
    form: {
      show: false
    }
  },
  {
    field: 'status',
    label: t('common.status'),
    formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
      return h(
        ElTag,
        {
          type: cellValue === 1 ? 'success' : cellValue === 2 ? 'warning' : 'danger'
        },
        () => (cellValue === 1 ? '在线' : '离线')
      )
    },
    form: {
      show: false
    }
  },
  {
    field: 'ipPort',
    label: t('StorageManager.ipPort'),
    form: {
      show: false
    }
  },
  {
    field: 'clientCount',
    label: t('StorageManager.clientCount'),
    form: {
      show: false
    }
  },
  {
    field: 'applyBucketCount',
    label: t('StorageManager.applyBucketCount'),
    form: {
      show: false
    }
  },
  {
    field: 'updateTime',
    label: t('common.updateTime'),
    formatter: (_, __, date: any) => {
      date = new Date(date)
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      var d = date.getDate()
      var h = date.getHours()
      var m1 = date.getMinutes()
      var s = date.getSeconds()
      m = m < 10 ? '0' + m : m
      h = h < 10 ? '0' + h : h
      m1 = m1 < 10 ? '0' + m1 : m1
      d = d < 10 ? '0' + d : d
      s = s < 10 ? '0' + s : s
      return y + '/' + m + '/' + d + ' ' + h + ':' + m1 + ':' + s
    },
    form: {
      show: false
    }
  },
  {
    field: 'name',
    label: 'NFS网关名称',
    table: {
      show: false
    },
    form: {
      colProps: {
        span: 24
      },
      formItemProps: {
        rules: [
          required(),
          {
            validator: (_, data, cb) => {
              const reg = /^(0|[1-9]\d*)$/
              if (data !== '' && !reg.test(data)) {
                return cb('输入大于等于的正整数')
              } else {
                cb()
              }
            }
          }
        ]
      }
    }
  },
  {
    field: 'desc',
    label: '描述',
    table: {
      show: false
    },
    form: {
      colProps: {
        span: 24
      }
    }
  },
  {
    field: 'server',
    label: '选择服务器',
    table: {
      show: false
    },
    form: {
      formItemProps: {
        rules: [required()]
      },
      component: 'Select',
      componentProps: {
        options: []
      },
      colProps: {
        span: 24
      }
    }
  },
  {
    field: 'ip',
    label: '网关IP地址',
    form: {
      formItemProps: {
        rules: [required()]
      },
      component: 'Select',
      componentProps: {
        options: []
      },
      colProps: {
        span: 14
      }
    }
  },
  {
    field: 'port',
    label: '端口号',
    form: {
      colProps: {
        span: 10
      }
    }
  }
]

const { register, tableObject, methods } = useTable<TableData>({
  getListApi: mockNFS,
  delListApi: delTableListApi,
  // getListApi: getTableListApi,
  response: {
    list: 'data',
    total: 'total'
  }
})
const { getList, setSearchParams } = methods
getList()

const crudSchemas = reactive<CrudSchema[]>(overviewColumn)

const handleClick = (tab) => {
  activeName.value = tab.paneName
}

const tableData = computed(() =>
  tableObject?.tableList.slice(
    (tableObject.currentPage - 1) * tableObject.pageSize,
    tableObject.pageSize * tableObject.currentPage
  )
)
const { allSchemas } = useCrudSchemas(crudSchemas)

const { formSchema } = allSchemas

// console.log(crudSchemas, 'allSchemas', allSchemas)

const creatFlag = ref(false)

// 级联触发方式、展示当前选择path的value
const props = {
  expandTrigger: 'hover',
  emitPath: false
}
const pane = ref()
const getValue = (val) => {
  console.log(val, 'change')
}
const dropdown = ref()
const paneR = ref()

const btn = ref('str')
const handleInitPane = (val) => {
  if (val) {
    // 清空级联、高亮
    console.log(paneR, '123', paneR.value.activePath)
    paneR.value.clearCheckedNodes()
  }
}

const formRef = ref()
const formSubmit = () => {
  unref(formRef)
    ?.getElFormRef()
    ?.validate((valid) => {
      if (valid) {
        console.log('submit success')
      } else {
        console.log('submit fail')
      }
    })
}
const TableR = ref()

const renderForm = computed(() => {
  if (btn.value === 'add') {
    return overviewColumn
  } else {
    return formSchema
  }
})

const selections = ref([])

const disableSingle = ref(true)
watch(
  () => TableR.value?.selections,
  (val) => {
    selections.value = [].concat(val)
    disableSingle.value = val.length !== 1
  }
)

watch(
  () => pane.value,
  (val) => {
    if (val) {
      btn.value = pane.value
      console.log('当前操作btn', btn.value)
      // 清除所选
      dropdown.value.handleClose()
      creatFlag.value = true
    }
  }
)

// watch(
//   () => btn.value,
//   () => {}
// )
</script>
<template>
  <ContentWrap title="存储桶">
    <div class="mb-10px flex justify-between">
      <div class="flex justify-between">
        <ElButton class="mr-10px" type="primary" @click="creatFlag = true">{{
          t('common.create')
        }}</ElButton>

        <ElDropdown ref="dropdown" trigger="hover" @visible-change="handleInitPane">
          <ElButton class="mr-10px" type="danger" :disabled="disableSingle">
            {{ t('tableDemo.operate') }}
            <Icon icon="ep:arrow-down" />
          </ElButton>
          <template #dropdown>
            <ElDropdownMenu>
              <ElCascaderPanel
                ref="paneR"
                :options="options"
                :props="props"
                v-model="pane"
                @change="getValue"
              />
            </ElDropdownMenu>
          </template>
        </ElDropdown>

        <Search
          :schema="allSchemas.searchSchema"
          @search="setSearchParams"
          @reset="setSearchParams"
        />
      </div>
      <div>
        <ElTabs type="card" v-model="activeName" @tab-click="handleClick">
          <ElTabPane label="总览" name="overview" />
          <!-- <ElTabPane label="性能" name="performance" /> -->
        </ElTabs>
      </div>
    </div>

    <Table
      ref="TableR"
      v-model:pageSize="tableObject.pageSize"
      v-model:currentPage="tableObject.currentPage"
      :columns="allSchemas.tableColumns"
      :data="tableData"
      :loading="tableObject.loading"
      :pagination="{
        total: tableObject.total
      }"
      @register="register"
    />
  </ContentWrap>
  <Dialog v-model="creatFlag" title="创建文件网关" :max-height="300" width="40%">
    <ContentWrap>
      <Form ref="formRef" :schema="renderForm" />
    </ContentWrap>
    <template #footer>
      <ElButton type="primary" @click="formSubmit">{{ t('dialogDemo.submit') }}</ElButton>
      <ElButton @click="creatFlag = false">{{ t('dialogDemo.close') }}</ElButton>
    </template>
  </Dialog>
</template>
