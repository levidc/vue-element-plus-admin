<script setup lang="ts">
import { useValidator } from '@/hooks/web/useValidator'
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Dialog } from '@/components/Dialog'
import {
  ElButton,
  ElDropdown,
  ElDropdownMenu,
  ElTag,
  ElCascaderPanel,
  ElMessageBox,
  ElTable,
  ElTableColumn,
  ElSelect,
  ElOption,
  ElInput,
  ElForm,
  ElFormItem
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
const createFlag = ref(false)
const addClientFlag = ref(false)
const permission = [
  {
    label: '只读',
    value: 'read'
  },
  {
    label: '只写',
    value: 'write'
  }
]
const options = [
  // {
  //   value: 'quota',
  //   label: '修改存储桶配额'
  // },
  // {
  //   value: 'access',
  //   label: '修改访问权限'
  // },
  // {
  //   value: 'owner',
  //   label: '修改拥有者'
  // },
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
  // {
  //   value: 'setAccess',
  //   label: '修改访问密钥'
  // },
  // {
  //   value: 'setWrite',
  //   label: '设置写保护'
  // },
  // {
  //   value: 'versions',
  //   label: '设置多版本'
  // },
  // {
  //   value: 'lifecycle',
  //   label: '生命周期管理'
  // },
  // {
  //   value: 'lifeCycleExe',
  //   label: '生命周期执行时间'
  // },
  {
    value: 'delete',
    label: '删除',
    disabled: true
  }
]
function getTitles(arr: string | any[]) {
  const temp = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].children) {
      temp.push(...getTitles(arr[i].children))
    } else {
      temp.push(arr[i])
    }
  }
  return temp
}

const allTiltle = getTitles(options)

const getTitle = computed(() => {
  if (pane.value === 'create') {
    return '创建存储桶'
  }
  const title = allTiltle.filter((item) => item.value == btn.value)?.[0]
  return title?.label
})

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
    formatter: (_: any, __: any, date: any) => {
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
            validator: (_: any, data: string, cb: (arg0: string | undefined) => void) => {
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

const tableData = computed(() =>
  tableObject?.tableList.slice(
    (tableObject.currentPage - 1) * tableObject.pageSize,
    tableObject.pageSize * tableObject.currentPage
  )
)
const { allSchemas } = useCrudSchemas(crudSchemas)

const { formSchema } = allSchemas

// console.log(crudSchemas, 'allSchemas', allSchemas)

// 级联触发方式、展示当前选择path的value
const props = {
  expandTrigger: 'hover',
  emitPath: false
}
const pane = ref()
const dropdown = ref()
const paneR = ref()

const handleInitPane = (val: any) => {
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
    ?.validate((valid: any) => {
      if (valid) {
        console.log('submit success')
      } else {
        console.log('submit fail')
      }
    })
}
const TableR = ref()

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
  () => addClientFlag.value,
  (val) => {
    if (val) {
      formF.value.initAddClient = [
        {
          ip: '测试',
          permission: 'write' //驱动
        }
      ]
    } else {
      getList()
    }
  }
)
const formF = ref({
  initAddClient: [
    {
      ip: '',
      permission: ''
    }
  ]
})

const getInput = (val, v) => {
  console.log(val, 'val', v)
}

const addDeny = () => {
  console.log(formF.value.initAddClient, '123')
  // let temp = [].concat(initAddClient.value)
  // initAddClient.value = temp.concat({ ip: '', permission: '' })
  formF.value.initAddClient.push({ ip: '', permission: '' })
}

const formReflect = {
  set: [
    {
      field: 'field1',
      label: '选择NFS网关',
      component: 'Select',
      componentProps: {
        options: [
          {
            label: '123',
            value: 123
          }
        ]
      },
      colProps: {
        span: 24
      },
      formItemProps: {
        rules: [required()]
      }
    }
  ],
  add: [
    {
      field: 'field1',
      label: 'add',
      component: 'Input',
      componentProps: {
        readonly: true
      }
    },
    {
      field: 'field2',
      label: '测试双栏',
      component: 'Input',
      componentProps: {
        placeholder: '输入中英文'
        // readonly: true
      }
    }
  ],
  remove: [
    {
      field: 'field1',
      label: 'remove',
      component: 'Input'
    }
  ],
  delete: [
    {
      field: 'field1',
      label: 'delete',
      component: 'Input'
    }
  ]
}

const handleDelete = (index: number, row: any) => {
  formF.value.initAddClient.splice(index, 1)
  console.log(index, row, 'scoped')
}

import type { FormInstance } from 'element-plus'
const formAddRef = ref<FormInstance>()
// console.log(formAddRef.value, 'refff')

const getTable = (formEl: FormInstance | undefined) => {
  console.log(formF.value.initAddClient, '123')

  // if (!formEl) return
  // 6onsole.log(formAddRef.value, '1233')
  // formEl.validate((valid) => {
  //   if (valid) {
  //     console.log('submit!')
  //   } else {
  //     console.log('error submit!')
  //     return false
  //   }
  // })
  // console.log(initAddClient, 'table')
}

const btn = ref()
const renderForm = computed(() => {
  if (pane.value === 'create') {
    return formSchema
  } else if (pane.value === 'add') {
    // let { formModel } = formRef.value
    // console.log(formModel, '123', formRef.value)
    //   formRef.value.formModel.field1 = '123'
    formRef?.value?.setValues({
      field1: 'nolonger'
    })
  }
  // pane.value
  return formReflect[btn.value]
})

watch(
  () => createFlag.value,
  (val) => {
    if (!val) {
      // list
      getList()
    }
  }
)

const getPane = (val: string | number | void) => {
  if (val) {
    // pane值清空取消级联面板高亮显示、赋值btn作为判断title名称及渲染form的标识
    btn.value = val
    // dropdown关闭
    // dropdown.value.handleClose()
    if (val === 'add') {
      addClientFlag.value = true
      return
    } else if (val === 'unset') {
      return ElMessageBox.confirm('取消NFS共享?', t('common.reminder'), {
        confirmButtonText: t('common.ok'),
        cancelButtonText: t('common.cancel'),
        type: 'warning'
      }).then(() => {
        console.log('123')
      })
    } else if (val === 'delete') {
      return ElMessageBox.confirm(
        '删除存储桶?' + TableR.value.selections[0].name,
        t('common.reminder'),
        {
          confirmButtonText: t('common.ok'),
          cancelButtonText: t('common.cancel'),
          type: 'warning'
        }
      ).then(() => {
        console.log('123')
      })
    }
    createFlag.value = true
  }
}

const testRules = {
  ip: {
    required: true,
    trigger: 'change',
    validator: (_: any, value: any, cb: any) => {
      console.log(value, 'trigger', _)
    }
  }
}
</script>
<template>
  <ContentWrap title="存储桶">
    <div class="mb-10px flex justify-between">
      <div class="flex justify-between">
        <ElButton class="mr-10px" type="primary" @click=";(createFlag = true), (pane = 'create')">{{
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
                @change="getPane"
                clearable
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

  <Dialog v-model="createFlag" :title="getTitle" :max-height="300" width="40%">
    <ContentWrap title="NFS共享" message="设置NFS网关共享后,存储桶不允许开启多版本功能;">
      <Form ref="formRef" :schema="renderForm" />
    </ContentWrap>
    <template #footer>
      <ElButton type="primary" @click="formSubmit">{{ t('dialogDemo.submit') }}</ElButton>
      <ElButton @click="createFlag = false">{{ t('dialogDemo.close') }}</ElButton>
    </template>
  </Dialog>

  <Dialog v-model="addClientFlag" title="添加客户端" width="40%" :max-height="400">
    <p>名称:{{ TableR.selections[0].name }}</p>
    <ELForm :model="formF" ref="formAddRef">
      <!-- ElFormItem -->
      <ElTable :data="formF.initAddClient">
        <ElTableColumn label="客户端IP">
          <template #default="scope">
            <ElFormItem :prop="`initAddClient.${scope.$index}.ip`" :rules="testRules.ip">
              <ElInput v-model="scope.row.ip" @input="getInput(scope.$index, scope.row.ip)" />
            </ElFormItem>
          </template>
        </ElTableColumn>
        <ElTableColumn label="访问权限" prop="permission">
          <template #default="scope">
            <ElSelect v-model="scope.row.permission" placeholder="选择访问权限" clearable>
              <ElOption
                v-for="item in permission"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </ElSelect>
          </template>
        </ElTableColumn>
        <ElTableColumn label="操作">
          <template #default="scope">
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
              ><Icon icon="ep:close-bold" />
            </el-button>
          </template>
        </ElTableColumn>
      </ElTable>
    </ELForm>
    <ElButton @click="addDeny" link type="success"> <Icon icon="ep:plus" />添加 </ElButton>
    <template #footer>
      <ElButton type="primary" @click="getTable">添加</ElButton>
    </template>
  </Dialog>
</template>

<style>
.el-cascader-panel.is-bordered {
  border: none;
}
</style>
