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
  ElTable,
  ElTableColumn,
  ElSelect,
  ElOption,
  ElInput,
  ElMessageBox
} from 'element-plus'
import { useForm } from '@/hooks/web/useForm'
import { Form } from '@/components/Form'
import { mockNFS, getOption } from '@/api/storageManagement'
import { delTableListApi } from '@/api/table'
import { Search } from '@/components/Search'
import { ref, reactive, computed, h, watch, unref } from 'vue'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { Table } from '@/components/Table'
import { useTable } from '@/hooks/web/useTable'
import { TableData } from '@/api/table/types'
const { t } = useI18n()
const { required } = useValidator()

const TableR = ref()

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

// ref value 可调用方法
let initAddClient = ref([
  {
    ip: '测试',
    permission: '' //驱动
  }
])

//表格数据绑定 与 ref不同步？
const addDeny = () => {
  console.log(initAddClient, '123')
  // let temp = [].concat(initAddClient.value)
  // initAddClient.value = temp.concat({ ip: '', permission: '' })
  initAddClient.value.push({ ip: '', permission: '' })
}

const handleDelete = (index: number, row: any) => {
  initAddClient.value.splice(index, 1)
  console.log(index, row, 'scoped')
}

const getTable = () => {
  console.log(initAddClient)
}

const disabledDel = ref(true)

const options = [
  {
    value: 'nfsShare',
    label: 'NFS共享',
    children: [
      { value: 'add', label: '添加客户端' },
      { value: 'remove', label: '移除客户端' }
    ]
  },
  {
    value: 'test',
    label: '測試展開',
    children: [
      { value: 12, label: 12 },
      { value: 13, label: 13 },
      { value: 14, label: 14 }
    ]
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
        options: [],
        placeholder: '请选择服务器'
      },
      colProps: {
        span: 24
      }
    }
  },
  {
    field: 'ip',
    label: '网关IP地址',
    table: {
      show: false
    },
    form: {
      formItemProps: {
        rules: [required()]
      },
      component: 'Select',
      componentProps: {
        options: [],
        placeholder: '请选择IP地址'
      },
      colProps: {
        span: 14
      }
    }
  },
  {
    field: 'port',
    label: '端口号',
    table: {
      show: false
    },
    form: {
      colProps: {
        span: 10
      },
      component: 'Input',
      componentProps: {
        placeholder: '1024'
      }
    }
  }
]
let reS = []
const asyncoptions = async () => {
  let msg = await getOption()
  reS.length == 0 && reS.push(...msg)
  // 接口获取option
}

// 页面加载执行一次
// 判断dialog显示调用获取option
const formReflect = {
  set: [
    {
      field: 'field1',
      label: '选择NFS网关',
      component: 'Select',
      componentProps: {
        options: reS
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

const { methods: methodForm } = useForm({ formSchema })

const { setValues } = methodForm

// console.log(crudSchemas, 'allSchemas', allSchemas)

const createFlag = ref(false)
const addClientFlag = ref(false)

// 级联触发方式、默认click
enum ExpandTrigger {
  CLICK = 'click',
  HOVER = 'hover'
}

const props = {
  emitPath: false, //绑定的值不对应数组、只返回节点的值
  expandTrigger: ExpandTrigger['HOVER']
}
const pane = ref()
const dropdown = ref()
const paneR = ref()

const handleInitPane = (val) => {
  if (val) {
    // 清除高亮
    paneR.value.clearCheckedNodes()
  } else {
    // 清除数据回显
    pane.value = ''
    // 清除展开面板、关联所选数据
    paneR.value.menuList.length = 1
    paneR.value.menus.length = 1
  }
}

const formRef = ref()

//表单提交、validate&& 接口参数获取
const formSubmit = () => {
  unref(formRef)
    ?.getElFormRef()
    ?.validate((valid) => {
      //formModel 表单绑定对应值
      let { formModel } = formRef.value
      console.log(formModel, '123', formRef.value)
      if (valid) {
        console.log('submit success')
        // case btn.value => 对应api
      } else {
        console.log('submit fail')
      }
    })
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

const disableSingle = ref(true)
watch(
  // 表格多选框
  () => TableR.value?.selections,
  (val) => {
    disableSingle.value = val.length !== 1
    disabledDel.value = val?.[0]?.clientCount > 100
  }
)
watch(
  () => createFlag.value,
  (val) => {
    if (!val) {
      // list
      getList()
    } else {
      if (btn.value === 'set') {
        // 刷新option
        asyncoptions()
      }
    }
  }
)

// 重置添加客户端信息
watch(
  () => addClientFlag.value,
  (val) => {
    if (val) {
      initAddClient.value = [
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

// 匹配title返回
function getTitles(arr) {
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
    return '创建NFS网关'
  }
  const title = allTiltle.filter((item) => item.value == btn.value)?.[0]
  return title?.label
})

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
      console.log(123)

      // return ElMessageBox.confirm('取消NFS共享?', t('common.reminder'), {
      //   confirmButtonText: t('common.ok'),
      //   cancelButtonText: t('common.cancel'),
      //   type: 'warning'
      // }).then(() => {
      //   console.log('123')
      // })
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
</script>
<template>
  <ContentWrap :title="t('StorageManager.NFS')">
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
      </div>

      <Search
        :schema="allSchemas.searchSchema"
        @search="setSearchParams"
        @reset="setSearchParams"
      />
    </div>

    <div v-if="false">
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
    </div>
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

    <ElTable :data="initAddClient">
      <ElTableColumn label="客户端IP" prop="ip">
        <template #default="scope">
          <ElInput v-model="scope.row.ip" />
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
    <ElButton @click="addDeny" text type="success"> <Icon icon="ep:plus" />添加 </ElButton>
    <template #footer>
      <ElButton type="primary" @click="getTable">添加</ElButton>
    </template>
  </Dialog>
</template>
