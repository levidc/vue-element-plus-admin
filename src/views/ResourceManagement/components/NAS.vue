<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { Search } from '@/components/Search'
import { useI18n } from '@/hooks/web/useI18n'
import { Table } from '@/components/Table'
import { Dialog } from '@/components/Dialog'
import { delTableListApi } from '@/api/table'
import { useTable } from '@/hooks/web/useTable'
import { TableData } from '@/api/table/types'
import {
  h,
  ref,
  unref,
  reactive,
  watch,
  computed,
  defineEmits,
  onMounted,
  onBeforeUnmount
} from 'vue'
import { PerformanceType, StorageType, StorageStatus } from './index'
import { useValidator } from '@/hooks/web/useValidator'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import Write from './nasForm.vue'
import { ElTag, ElButton } from 'element-plus'
import { checkRedisStatus, addObjectStorageResource } from '@/api/resourceMangement'
const { register, tableObject, methods } = useTable<TableData>({
  getListApi: checkRedisStatus,
  // getListApi: getTableListApi,
  delListApi: delTableListApi,
  response: {
    list: 'data',
    total: 'total'
  }
})

const { required } = useValidator()

const { t } = useI18n()

const { getList, setSearchParams } = methods

let timer: null | NodeJS.Timeout = null

onMounted(async () => {
  getList()
  let gg = await checkRedisStatus()
  console.log(gg, gg.data.data[1].storageId.toString(), 'gg')
})
onBeforeUnmount(() => {
  timer && clearTimeout(timer)
  // console.log('clear timer')
})
const listInterval = () => {
  timer && clearTimeout(timer)
  timer = setTimeout(() => {
    getList().then(() => {
      listInterval()
    })
  }, 5000)
}
const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'storageName',
    label: t('externalStorage.name'),
    search: {
      show: true
    },
    form: {
      formItemProps: {
        rules: [required()]
      }
    }
  },
  {
    field: 'storageStatus',
    label: t('common.status'),
    form: {
      component: 'Select',
      componentProps: {
        options: [
          { label: 'STORAGE_NULL', value: 'STORAGE_NULL' },
          { label: 'STORAGE_BROKEN', value: 'STORAGE_BROKEN' },
          { label: 'STORAGE_ONLINE', value: 'STORAGE_ONLINE' },
          { label: 'STORAGE_OFFLINE', value: 'STORAGE_OFFLINE' },
          { label: 'CONFIG_MISMATCH', value: 'CONFIG_MISMATCH' }
        ]
      }
    }
    // formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
    //   return h(
    //     ElTag,
    //     {
    //       type: cellValue === 1 ? 'success' : cellValue === 2 ? 'warning' : 'danger'
    //     },
    //     () => (cellValue === 1 ? '在线' : '离线')
    //   )
    // },
    // form: {
    //   component: 'Select',
    //   componentProps: {
    //     options: [
    //       {
    //         label: '在线',
    //         value: '1'
    //       },
    //       {
    //         label: '离线',
    //         value: '2'
    //       }
    //     ]
    //   }
    // }
  },
  {
    field: 'storageType',
    label: '存储类型',
    form: {
      component: 'Select',
      componentProps: {
        options: [
          { label: 'S3', value: 'S3' },
          { label: 'DOS', value: 'DOS' },
          { label: 'MIO', value: 'MIO' },
          { label: 'NAS', value: 'NAS' },
          { label: 'DBS', value: 'DBS' },
          { label: 'REMOTE_DISK', value: 'REMOTE_DISK' },
          { label: 'LOCAL_DISK', value: 'LOCAL_DISK' }
        ]
      }
    }
  },
  {
    field: 'performanceType',
    label: '性能类型',
    table: {
      formItemProps: {
        center: true
      }
    },
    form: {
      component: 'Select',
      componentProps: {
        options: PerformanceType
      }
    },
    formatter: (_: Recordable, __: TableColumn, cellValue: string) => {
      return t('enumerable.' + cellValue)
    }
  },
  {
    field: 'totalSpace',
    label: t('common.totalSpace') + '(GB)',
    form: {
      show: false
      // formItemProps: {
      //   rules: [
      //     {
      //       validator: (_, data, cb) => {
      //         const reg = /^(0|[1-9]\d*)$/
      //         if (data !== '' && !reg.test(data)) {
      //           return cb('输入大于等于的正整数')
      //         } else {
      //           cb()
      //         }
      //       }
      //     }
      //   ]
      // }
    }
  },
  {
    field: 'usedSpace',
    label: t('common.usedSpace') + '(GB)',
    form: {
      show: false
    }
  },
  {
    field: 'allocatedSpace',
    label: '已分配容量',
    form: {
      show: false
    }
  },

  {
    field: 'url',
    label: '路径'
  },
  {
    field: 'userName',
    label: '用户名',
    // table: {
    //   show: false
    // }
    form: {
      formItemProps: {
        rules: [required()]
      }
    }
  },
  {
    field: 'password',
    label: '密码',
    table: {
      show: false
    },
    form: {
      formItemProps: {
        rules: [required()]
      }
    },
    form: {
      component: 'Input',
      componentProps: {
        type: 'password'
      },
      formItemProps: {
        rules: [required()]
      }
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

const { allSchemas } = useCrudSchemas(crudSchemas)

const TableT = ref()
// console.dir(TableT.value?.selections, TableT)

const emit = defineEmits(['disable'])

watch(
  () => TableT.value?.selections,
  (val: Array<any>) => {
    emit('disable', val)
    if (val && val.length) {
      // console.log('check clearTimer')
      timer && clearTimeout(timer)
    } else {
      // listInterval()
      // console.log('restart Timer')
    }
  }
)
const writeRef = ref<ComponentRef<typeof Write>>()

// 分页复选框
const tableData = computed(() => {
  // console.log(tableObject, '123')
  // return tableObject?.tableList || []
  return tableObject?.tableList.slice(
    (tableObject.currentPage - 1) * tableObject.pageSize,
    tableObject.pageSize * tableObject.currentPage
  )
})

const createFlag = ref(false)

defineExpose({
  createFlag
})
// console.log(writeRef, 'rrrrrrrrrr')

const save = () => {
  const { getFormData } = writeRef?.value
  unref(writeRef?.value?.elFormRef)!.validate(async (isValid) => {
    console.log(isValid)
    if (isValid) {
      // console.log(writeRef, 'writeRef')
      let data = await getFormData()
      // 获取表单model值
      data = Object.assign(data, { token: '12345', storageId: 0 })
      console.log(writeRef.value, 'save', data)
      //   data: {
      //   storageId: 0,
      //   storageName: 'whats',
      //   storageType: 'LOCAL_DISK',
      //   storageStatus: 'STORAGE_ONLINE',
      //   totalSpace: 600,
      //   allocatedSpace: 200,
      //   usedSpace: 50,
      //   performanceType: 'MIDDLE',
      //   url: 'http://172.17.0.3:9000',
      //   token: '12531365',
      //   userName: 'minioadmin',
      //   password: 'minioadmi'
      // }
      // storageType、storageStatus、performanceType、不传参或者有效枚举值
      addObjectStorageResource(data).then((res) => {
        console.log(res, 'addObjectStorageResource')
        createFlag.value = false
        getList()
      })
      // console.log('createNAs')
    }
  })
}
</script>

<template>
  <ContentWrap>
    <div class="mb-10px">
      <Search
        :schema="allSchemas.searchSchema"
        @search="setSearchParams"
        @reset="setSearchParams"
      />
    </div>
    <Table
      ref="TableT"
      v-model:pageSize="tableObject.pageSize"
      v-model:currentPage="tableObject.currentPage"
      :columns="allSchemas.tableColumns"
      :data="tableData"
      :loading="tableObject.loading"
      :pagination="{
        total: tableObject.total
      }"
      :selection="false"
      @register="register"
    />
  </ContentWrap>
  <Dialog v-model="createFlag" title="创建对象存储资源" :max-height="300">
    <ContentWrap>
      <Write ref="writeRef" :form-schema="allSchemas.formSchema" />
      <!-- :current-row="tableObject.currentRow" -->
    </ContentWrap>
    <template #footer>
      <ElButton type="primary" @click="save">
        {{ t('exampleDemo.save') }}
      </ElButton>
      <ElButton @click="createFlag = false">{{ t('dialogDemo.close') }}</ElButton>
    </template>
  </Dialog>
</template>
