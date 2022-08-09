<script setup lang="ts">
import { useValidator } from '@/hooks/web/useValidator'
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Dialog } from '@/components/Dialog'
import { ElButton, ElDropdown, ElDropdownMenu, ElTag, ElCascaderPanel } from 'element-plus'
import { useForm } from '@/hooks/web/useForm'
import { Form } from '@/components/Form'
import { mockNFS } from '@/api/storageManagement'
import { delTableListApi } from '@/api/table'
import { Search } from '@/components/Search'
import { ref, reactive, computed, h, watch, unref, nextTick } from 'vue'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { Table } from '@/components/Table'
import { useTable } from '@/hooks/web/useTable'
import { TableData } from '@/api/table/types'
const { t } = useI18n()
const { required } = useValidator()

const options = [
  {
    value: 'nfsShare',
    label: 'NFS共享',
    children: [
      {
        value: 'set',
        label: '设置NFS共享',
        children: [
          { value: 'innner1', label: 'inner1' },
          { value: 'innner2', label: 'inner2' },
          { value: 'innner3', label: 'inner3' }
        ]
      },
      { value: 'unset', label: '取消NFS共享' },
      { value: 'add', label: '添加客户端' },
      { value: 'remove', label: '移除客户端' }
    ]
  },
  {
    value: 'delete',
    label: '删除',
    disabled: true
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
      }
    }
  }
]

const formReflect = {
  set: [
    {
      field: 'field1',
      label: t('formDemo.input'),
      component: 'Input',
      formItemProps: {
        rules: [required()]
      }
    },
    {
      field: 'field2',
      label: 'set',
      component: 'Select',
      componentProps: {
        options: [
          {
            label: 'option1',
            value: '1'
          },
          {
            label: 'option2',
            value: '2'
          }
        ]
      }
    }
  ],
  unset: [
    {
      field: 'field1',
      label: 'unset',
      component: 'Input',
      formItemProps: {
        rules: [required()]
      }
    },
    {
      field: 'field2',
      label: t('formDemo.select'),
      component: 'Select',
      componentProps: {
        options: [
          {
            label: 'option1',
            value: '1'
          },
          {
            label: 'option2',
            value: '2'
          }
        ]
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

// const matchForm = (val) => {
//   switch (val) {
//     case 'create':
//       console.log(val, 'create')
//       break
//     case 'set':
//       console.log(val, 'set')
//       break
//     default:
//       break
//   }
// }

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
      // console.log(formModel, '123', formRef.value)
      if (valid) {
        console.log('submit success')
      } else {
        console.log('submit fail')
      }
    })
}
const TableR = ref()

const btn = ref()

const renderForm = computed(() => {
  if (pane.value === 'create') {
    return formSchema
  } else if (pane.value === 'add') {
    // let { formModel } = formRef.value
    // console.log(formModel, '123', formRef.value)
    // console.log(TableR.value.selections[0], 'selected')
    // nextTick(() => {
    //   console.log(formRef.value.formModel, '133')
    //   // setValues({
    //   //   field1: '123'
    //   // })
    //   // setValues无效
    //   formRef.value.formModel.field1 = '123'
    // })
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
  }
)

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
  const title = allTiltle.filter((item) => item.value == btn.value)?.[0]
  return title?.label
})

const getPane = (val: string | number | void) => {
  if (val) {
    // pane值清空取消级联面板高亮显示、赋值btn作为判断title名称及渲染form的标识
    btn.value = val
    // dropdown关闭
    dropdown.value.handleClose()
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
      <!-- <div>
        <ElTabs type="card" v-model="activeName" @tab-click="handleClick">
          <ElTabPane label="总览" name="overview" />
        </ElTabs>
      </div> -->
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
    <ContentWrap>
      <Form ref="formRef" :schema="renderForm" />
    </ContentWrap>
    <template #footer>
      <ElButton type="primary" @click="formSubmit">{{ t('dialogDemo.submit') }}</ElButton>
      <ElButton @click="createFlag = false">{{ t('dialogDemo.close') }}</ElButton>
    </template>
  </Dialog>
</template>
<style>
.el-cascader-panel.is-bordered {
  border: none;
}
</style>
