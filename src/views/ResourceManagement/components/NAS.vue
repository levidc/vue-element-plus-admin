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
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import Write from './nasForm.vue'
import { ElTag, ElButton } from 'element-plus'
import { checkRedisStatus } from '@/api/resourceMangement'
const { register, tableObject, methods } = useTable<TableData>({
  getListApi: checkRedisStatus,
  // getListApi: getTableListApi,
  delListApi: delTableListApi,
  response: {
    list: 'data',
    total: 'total'
  }
})
const { t } = useI18n()

const { getList, setSearchParams } = methods

let timer: null | NodeJS.Timeout = null

onMounted(() => {
  getList()
})
onBeforeUnmount(() => {
  timer && clearTimeout(timer)
  console.log('clear timer')
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
    field: 'body',
    label: t('externalStorage.name'),
    search: {
      show: true
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
      component: 'Select',
      componentProps: {
        options: [
          {
            label: '在线',
            value: '1'
          },
          {
            label: '离线',
            value: '2'
          }
        ]
      }
    }
  },
  {
    field: 'totalSpace',
    label: t('common.totalSpace') + '(GB)',
    form: {
      formItemProps: {
        rules: [
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
    field: 'usedSpace',
    label: t('common.usedSpace') + '(GB)'
  },
  {
    field: 'mountType',
    label: t('common.mountType'),
    form: {
      component: 'Select',
      componentProps: {
        options: [
          {
            label: 'CIFS',
            value: '1'
          },
          {
            label: 'NFS',
            value: '2'
          }
        ]
      }
    }
  },
  {
    field: 'remoteDirectory',
    label: t('common.remoteDirectory')
  },
  {
    field: 'localDirectory',
    label: t('common.localDirectory')
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
      console.log('check clearTimer')
      timer && clearTimeout(timer)
    } else {
      listInterval()
      console.log('restart Timer')
    }
  }
)
const writeRef = ref<ComponentRef<typeof Write>>()

// 分页复选框
const tableData = computed(() =>
  tableObject?.tableList.slice(
    (tableObject.currentPage - 1) * tableObject.pageSize,
    tableObject.pageSize * tableObject.currentPage
  )
)

const createFlag = ref(false)

defineExpose({
  createFlag
})
// console.log(writeRef, 'rrrrrrrrrr')

const save = () => {
  unref(writeRef?.value?.elFormRef)!.validate((isValid) => {
    console.log(isValid)
    if (isValid) {
      console.log('createNAs')
      createFlag.value = false
      getList()
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
      @register="register"
    />
  </ContentWrap>
  <Dialog v-model="createFlag" title="创建NAS存储" :max-height="300">
    <ContentWrap>
      <Write
        ref="writeRef"
        :form-schema="allSchemas.formSchema"
        :current-row="tableObject.currentRow"
      />
    </ContentWrap>
    <template #footer>
      <ElButton type="primary" @click="save">
        {{ t('exampleDemo.save') }}
      </ElButton>
      <ElButton @click="createFlag = false">{{ t('dialogDemo.close') }}</ElButton>
    </template>
  </Dialog>
</template>
