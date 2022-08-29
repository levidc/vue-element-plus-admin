<script setup lang="ts">
import { useValidator } from '@/hooks/web/useValidator'
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Dialog } from '@/components/Dialog'
import {
  ElButton,
  ElMessage,
  ElMessageBox,
  ElSelect,
  ElOption
  // ElTable,
  // ElTableColumn,
  // ElInput,
  // ElForm,
  // ElFormItem
} from 'element-plus'
import { CascadeDropdown } from '@/components/CascadeDropdown'
// import { Form } from '@/components/Form'
import { ref, reactive, computed, h, watch, unref, nextTick } from 'vue'
// import { useTable } from '@/hooks/web/useTable'
import { Table } from '@/components/Table'
// import { TableData } from '@/api/table/types'
import { listObjectStorageResource } from '@/api/fs/ObjectStorage'
import { listBuckets } from '@/api/fs/Buckets'
import { getNFSGateway, listNFSGateway } from '@/api/fs/NfsGateway'
import { applyNfsAclRelationship, cancelNfsAclRelationship } from '@/api/fs/NfsAcl'
const { t } = useI18n()
const { required } = useValidator()
// 操作数据后更新视图
const TableAcl = ref()

const applyFlag = ref(false)

const searchOption = ref([])

const searchGatewayOpt = ref([])

const searchId = ref('')

const searchGateway = ref('')

const getBucketFlag = ref(false)

const gatewayAcl = ref([])

interface TableObject<T = any> {
  pageSize: number
  currentPage: number
  total: number
  tableList: T[]
  params: any
  loading: boolean
  currentRow: Nullable<T>
}

const shareType = ref('apply')

const tableObject = reactive<TableObject>({
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

const tableColumns = [
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

const aclColumns = [
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

const scehema = ref<cascadeDropdownSchema[]>([
  {
    label: '添加NFS共享',
    command: async () => {
      shareType.value = 'apply'
      applyFlag.value = true
      const res = await listNFSGateway()
      searchGatewayOpt.value = res.data.NFSGatewayList.map((item) => {
        return {
          label: item.gatewayName,
          value: item.gatewayId
        }
      })
    }
  },
  {
    label: '取消NFS共享',
    command: async () => {
      applyFlag.value = true
      shareType.value = 'cancel'
      const res = await listNFSGateway()
      searchGatewayOpt.value = res.data.NFSGatewayList.map((item) => {
        return {
          label: item.gatewayName,
          value: item.gatewayId
        }
      })
    }
  }
  // {
  //   label: '删除网关',
  //   command: (tagItem) => {
  //     const { getList } = restful?.value
  //     ElMessageBox.confirm(t('common.delMessage'), t('common.delWarning'), {
  //       confirmButtonText: t('common.delOk'),
  //       cancelButtonText: t('common.delCancel'),
  //       type: 'warning'
  //     }).then(() => {
  //       removeNFSGateway({ gatewayId: tagItem.row.gatewayId }).then((res) => {
  //         ElMessage.success(t('common.delSuccess'))
  //         getList()
  //       })
  //     })
  //   }
  // }
])

// listBuckets
const initList = () => {
  tableObject.loading = false
  listObjectStorageResource()
    .then((res) => {
      searchOption.value = res.data.storageResources.map((item) => {
        return {
          label: item.storageName,
          value: item.storageId
        }
      })
    })
    .finally(() => {
      tableObject.loading = false
    })
  // 初始化选择、重置按钮重新刷新
}

initList()
// 存储桶展示还需调用获取对象资源list 拼接所需数据？

const search = () => {
  tableObject.tableList = []
  if (!searchId.value) {
    return ElMessage.error('请选择对象资源')
  }
  tableObject.loading = true
  listBuckets({ storageId: searchId.value })
    .then((res) => {
      console.log(res, 'errrrrrrrrr')
      tableObject.tableList = [...res.data.buckets]
      tableObject.loading = false
      getBucketFlag.value = true
    })
    .finally(() => {
      tableObject.loading = false
    })
}

const reset = () => {
  // 重置搜索条件、表格隐藏
  searchId.value = ''
  getBucketFlag.value = false
  tableObject.tableList = []
  tableObject.total = 0
  tableObject.pageSize = 10
  tableObject.currentPage = 1
}

const getGateway = () => {
  if (!searchGateway.value) {
    return ElMessage.error('请选择网关')
  }
  getNFSGateway({ gatewayId: searchGateway.value }).then((res) => {
    console.log('res', res)
    gatewayAcl.value = [...res.data.NFSGateway.nfsAclModelList]
  })
}

watch(
  () => applyFlag.value,
  () => {
    searchGateway.value = ''
    gatewayAcl.value = []
  }
)

// const overviewColumn = [
//   {
//     field: 'body',
//     label: t('externalStorage.name'),
//     search: {
//       show: true
//     },
//     form: {
//       show: false
//     }
//   },
//   {
//     field: 'status',
//     label: t('common.status'),
//     formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
//       return h(
//         ElTag,
//         {
//           type: cellValue === 1 ? 'success' : cellValue === 2 ? 'warning' : 'danger'
//         },
//         () => (cellValue === 1 ? '在线' : '离线')
//       )
//     },
//     form: {
//       show: false
//     }
//   },
//   {
//     field: 'ipPort',
//     label: t('StorageManager.ipPort'),
//     form: {
//       show: false
//     }
//   },
//   {
//     field: 'clientCount',
//     label: t('StorageManager.clientCount'),
//     form: {
//       show: false
//     }
//   },
//   {
//     field: 'applyBucketCount',
//     label: t('StorageManager.applyBucketCount'),
//     form: {
//       show: false
//     }
//   },
//   {
//     field: 'updateTime',
//     label: t('common.updateTime'),
//     formatter: (_: any, __: any, date: any) => {
//       date = new Date(date)
//       var y = date.getFullYear()
//       var m = date.getMonth() + 1
//       var d = date.getDate()
//       var h = date.getHours()
//       var m1 = date.getMinutes()
//       var s = date.getSeconds()
//       m = m < 10 ? '0' + m : m
//       h = h < 10 ? '0' + h : h
//       m1 = m1 < 10 ? '0' + m1 : m1
//       d = d < 10 ? '0' + d : d
//       s = s < 10 ? '0' + s : s
//       return y + '/' + m + '/' + d + ' ' + h + ':' + m1 + ':' + s
//     },
//     form: {
//       show: false
//     }
//   },
//   {
//     field: 'name',
//     label: 'NFS网关名称',
//     table: {
//       show: false
//     },
//     form: {
//       colProps: {
//         span: 24
//       },
//       formItemProps: {
//         rules: [
//           required(),
//           {
//             validator: (_: any, data: string, cb: (arg0: string | undefined) => void) => {
//               const reg = /^(0|[1-9]\d*)$/
//               if (data !== '' && !reg.test(data)) {
//                 return cb('输入大于等于的正整数')
//               } else {
//                 cb()
//               }
//             }
//           }
//         ]
//       }
//     }
//   },
//   {
//     field: 'desc',
//     label: '描述',
//     table: {
//       show: false
//     },
//     form: {
//       colProps: {
//         span: 24
//       }
//     }
//   },
//   {
//     field: 'server',
//     label: '选择服务器',
//     table: {
//       show: false
//     },
//     form: {
//       formItemProps: {
//         rules: [required()]
//       },
//       component: 'Select',
//       componentProps: {
//         options: []
//       },
//       colProps: {
//         span: 24
//       }
//     }
//   },
//   {
//     field: 'ip',
//     label: '网关IP地址',
//     form: {
//       formItemProps: {
//         rules: [required()]
//       },
//       component: 'Select',
//       componentProps: {
//         options: []
//       },
//       colProps: {
//         span: 14
//       }
//     }
//   },
//   {
//     field: 'port',
//     label: '端口号',
//     form: {
//       colProps: {
//         span: 10
//       }
//     }
//   }
// ]

// 应用acl=> 按钮 添加NFS共享
const formSubmit = () => {
  const data = {
    applyNfsAclIdList: TableAcl.value.selections.map((item) => item.id),
    bucketName: tableObject.tableList[0].bucket,
    gatewayId: searchGateway.value,
    storageId: searchId.value
  }
  shareType.value === 'apply'
    ? applyNfsAclRelationship(data)
        .then((res) => {
          ElMessage.success(t('common.resSuccess'))
        })
        .finally(() => {
          applyFlag.value = false
        })
    : cancelNfsAclRelationship(data)
        .then((res) => {
          ElMessage.success(t('common.resSuccess'))
        })
        .finally(() => {
          applyFlag.value = false
        })
  // console.log(TableAcl.value.selections, 'table')
  // console.log(searchId.value, searchGateway.value, tableObject.tableList)
}

// const TableR = ref()
// nextTick(() => {
//   console.log(TableR.value.elTableRef, 'TableR获取expose的实例')
//   // doLayout()
// })
// const selections = ref([])

// const disableSingle = ref(true)
// watch(
//   () => TableR.value?.selections,
//   (val) => {
//     console.log(val, 'multiple')
//     // selections.value = [].concat(val)
//     // disableSingle.value = val.length !== 1
//   }
// )

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
</script>
<template>
  <ContentWrap title="存储桶">
    <div class="mb-10px flex justify">
      <ElSelect
        class="mr-10"
        style="width: 20%"
        v-model="searchId"
        placeholder="选择对象资源"
        clearable
      >
        <ElOption
          v-for="item in searchOption"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </ElSelect>
      <ElButton type="primary" @click="search">
        <Icon icon="ep:search" class="mr-5px" />
        {{ t('common.query') }}
      </ElButton>
      <ElButton @click="reset">
        <Icon icon="ep:refresh-right" class="mr-5px" />
        {{ t('common.reset') }}
      </ElButton>
    </div>

    <Table
      ref="TableR"
      v-model:pageSize="tableObject.pageSize"
      v-model:currentPage="tableObject.currentPage"
      :columns="tableColumns"
      :data="tableObject.tableList"
      :loading="tableObject.loading"
      :pagination="{
        total: tableObject.tableList.length
      }"
    >
      <template #action="{ row }">
        <CascadeDropdown :schema="scehema" :tagItem="row" type="primary">操作</CascadeDropdown>
      </template>
    </Table>
  </ContentWrap>

  <Dialog
    v-model="applyFlag"
    :title="shareType === 'apply' ? '添加NFS共享' : '取消NFS共享'"
    :max-height="300"
    width="40%"
  >
    <ElSelect
      class="mr-10"
      style="width: 50%"
      v-model="searchGateway"
      placeholder="选择网关"
      clearable
    >
      <ElOption
        v-for="item in searchGatewayOpt"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </ElSelect>
    <ElButton type="primary" @click="getGateway">
      <Icon icon="ep:search" class="mr-5px" />
      {{ t('common.query') }}
    </ElButton>
    <ElButton @click="resetGateway">
      <Icon icon="ep:refresh-right" class="mr-5px" />
      {{ t('common.reset') }}
    </ElButton>
    <Table
      ref="TableAcl"
      v-model:pageSize="tableObject.pageSize"
      v-model:currentPage="tableObject.currentPage"
      :columns="aclColumns"
      :data="gatewayAcl"
      :loading="tableObject.loading"
      :pagination="{
        total: gatewayAcl.length
      }"
    />
    <template #footer>
      <ElButton type="primary" @click="formSubmit">{{ t('common.ok') }}</ElButton>
      <ElButton @click="applyFlag = false">{{ t('dialogDemo.close') }}</ElButton>
    </template>
  </Dialog>
</template>
