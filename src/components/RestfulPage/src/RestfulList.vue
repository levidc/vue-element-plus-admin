<script setup lang="ts">
import { useDesign } from '@/hooks/web/useDesign'
import { Search } from '@/components/Search'
import { Dialog } from '@/components/Dialog'
import { useI18n } from '@/hooks/web/useI18n'
import { ElButton } from 'element-plus'
// import { get } from 'lodash-es'
import { Table } from '@/components/Table'
// import { useTable } from '@/hooks/web/useTable'
import { useTableX } from '@/hooks/web/useTableX'
import { propTypes } from '@/utils/propTypes'
import { ref, PropType, TeleportProps, onMounted } from 'vue'
import { useEmitt } from '@/hooks/web/useEmitt'
import RestfulEdit from './RestfulEdit.vue'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('RestfulList')
const { t } = useI18n()

type ItemRecord = Recordable

const props = defineProps({
  nameCode: propTypes.string.def('CRUD'),
  config: {
    type: Object as PropType<Parameters<typeof useTableX<ItemRecord>>[0]>,
    default: () => {}
  },
  types: {
    type: Object,
    default: () => {}
  },
  searchSchema: {
    type: Array as PropType<FormSchema[]>,
    default: () => []
  },
  tableColumns: {
    type: Array as PropType<TableColumn[]>,
    default: () => []
  },
  formSchema: {
    type: Array as PropType<FormSchema[]>,
    default: () => []
  },
  detailSchema: {
    type: Array as PropType<FormSchema[]>,
    default: () => []
  },
  rules: {
    type: Object as PropType<Recordable>,
    default: () => {}
  },
  tableHideColumns: {
    type: Array as PropType<String[]>,
    default: () => []
  },
  idCol: propTypes.string.def('id'),
  virtualPage: propTypes.bool.def(false),
  virtualPageDelay: propTypes.number.def(250),
  dialog: propTypes.bool.def(false),
  dialogWidth: propTypes.string.def('60%'),
  actionsTo: undefined as unknown as PropType<TeleportProps['to']>,
  searchPosition: propTypes.string
    .validate((v: string) => ['top', 'right'].includes(v))
    .def('right'),
  hideSearch: propTypes.bool.def(false),
  hideAction: propTypes.bool.def(false),
  hideBtnAdd: propTypes.bool.def(false),
  hideBtnDelAll: propTypes.bool.def(false),
  hideBtnEditItem: propTypes.bool.def(false),
  hideBtnDetailItem: propTypes.bool.def(false),
  hideBtnDelItem: propTypes.bool.def(false)
})

const emit = defineEmits<{
  (e: 'add'): void
  (e: 'edit', row: ItemRecord): void
  (e: 'detail', row: ItemRecord): void
  (e: 'save', row: ItemRecord): void
}>()

const { register, tableObject, methods } = useTableX<ItemRecord>(
  {
    ...props.config,
    use: {
      virtualPage: props.virtualPage || props.config?.use?.virtualPage,
      virtualPageDelay: props.virtualPageDelay || props.config?.use?.virtualPageDelay
    }
  } as typeof props.config,
  props.tableColumns
)

const { getList, setSearchParams } = methods

getList()

useEmitt({
  name: `${props.nameCode}List`,
  callback: (type: string) => {
    if (type === 'add') {
      tableObject.currentPage = 1
    }
    methods.setNeedReload()
    getList()
  }
})

const onAdd = () => {
  if (props.dialog) {
    openEditDialog('add')
    return
  }
  emit('add')
}

const delLoading = ref(false)

const delData = async (row: ItemRecord | null, multiple: boolean) => {
  tableObject.currentRow = row
  const { delList, getSelections } = methods
  const selections = await getSelections()
  delLoading.value = true
  await delList(
    multiple
      ? selections.map((v) => v[props.idCol])
      : [(tableObject.currentRow || {})[props.idCol] as string],
    multiple
  ).finally(() => {
    delLoading.value = false
  })
}

const onAction = (row: ItemRecord, type: string) => {
  if (props.dialog) {
    openEditDialog(type, row[props.idCol])
    return
  }
  emit(type as any, row)
}

const onSearchChange = (param: Recordable) => {
  setSearchParams(
    Object.keys(param).reduce((prev, k) => {
      prev[k] = param[k] || null
      return prev
    }, {})
  )
}

const onSortChange = ({ prop, order }) => {
  order = order == 'ascending' ? 'asc' : order == 'descending' ? 'desc' : null
  setSearchParams({ orderField: prop || null, orderType: prop && order ? order : null })
}

const mounted = ref(false)
onMounted(() => (mounted.value = true))

const editDialogVisible = ref(false)
const editId = ref<string | number>('')
const editEditable = ref(false)

const openEditDialog = (type: string, id: string | number = '') => {
  closeEditDialog()
  editId.value = id
  if (type == 'add' || type == 'edit') {
    editEditable.value = true
  }
  editDialogVisible.value = true
}

const closeEditDialog = () => {
  editId.value = ''
  editEditable.value = false
  editDialogVisible.value = false
}

const saveAction = (row: ItemRecord) => {
  closeEditDialog()
  emit('save', row)
}

const removeEditTag = (tag: string | number) => tag.toString().replace(/^edit-/, '')
</script>

<template>
  <div :class="[prefixCls]" class="flex flex-col">
    <Search
      v-if="!hideSearch && searchPosition == 'top'"
      :schema="searchSchema"
      @search="onSearchChange"
      @reset="onSearchChange"
    />

    <div class="flex align-bottom">
      <div v-if="!hideAction" class="mb-10px">
        <Teleport v-if="mounted" :to="actionsTo" :disabled="!actionsTo">
          <ElButton v-if="!hideBtnAdd" type="primary" @click="onAdd">
            {{ t('exampleDemo.add') }}
          </ElButton>
          <slot name="action"></slot>
          <ElButton
            v-if="!hideBtnDelAll"
            :loading="delLoading"
            type="danger"
            @click="delData(null, true)"
          >
            {{ t('exampleDemo.del') }}
          </ElButton>
        </Teleport>
      </div>
      <div
        v-if="!hideSearch && searchPosition == 'right'"
        class="w-px flex-grow ml-100px overflow-x-hidden"
      >
        <div class="flex justify-end" style="width: calc(100% + 32px)">
          <Search :schema="searchSchema" @search="onSearchChange" @reset="onSearchChange" />
        </div>
      </div>
    </div>

    <Table
      v-model:pageSize="tableObject.pageSize"
      v-model:currentPage="tableObject.currentPage"
      :columns="tableColumns"
      :data="tableObject.tableList"
      :loading="tableObject.loading"
      :pagination="{
        total: tableObject.total
      }"
      style="min-height: 10px"
      class="flex-grow"
      @register="register"
      @sort-change="onSortChange"
    >
      <template v-for="(item, key, index) in $slots" :key="index" #[key]="data">
        <slot
          v-if="key !== 'action' && key != 'action-item' && !key.toString().startsWith('edit-')"
          :name="key"
          v-bind="data"
          :src="item"
        ></slot>
      </template>
      <template #action="{ row }">
        <slot name="action-item" v-bind="{ row }"></slot>
        <ElButton v-if="!hideBtnEditItem" type="primary" @click="onAction(row, 'edit')">
          {{ t('exampleDemo.edit') }}
        </ElButton>
        <ElButton v-if="!hideBtnDetailItem" type="success" @click="onAction(row, 'detail')">
          {{ t('exampleDemo.detail') }}
        </ElButton>
        <ElButton v-if="!hideBtnDelItem" type="danger" @click="delData(row, false)">
          {{ t('exampleDemo.del') }}
        </ElButton>
      </template>
    </Table>

    <Dialog
      v-if="editDialogVisible"
      v-model="editDialogVisible"
      :title="
        t(`rest.${nameCode}`) +
        (!editId
          ? t('exampleDemo.add')
          : editEditable
          ? t('exampleDemo.edit')
          : t('exampleDemo.detail'))
      "
      :width="dialogWidth"
      @closed="closeEditDialog"
    >
      <RestfulEdit
        :id="editId"
        :name-code="nameCode"
        :editable="editEditable"
        :config="config"
        :form-schema="formSchema"
        :detail-schema="detailSchema"
        :rules="rules"
        action-to="#_edit-actions-to_"
        @save="saveAction"
      >
        <template v-for="(item, key, index) in $slots" :key="index" #[removeEditTag(key)]="data">
          <slot
            v-if="key.toString().startsWith('edit-')"
            :name="key"
            v-bind="data"
            :src="item"
          ></slot>
        </template>
      </RestfulEdit>
      <template v-if="editEditable" #footer>
        <span id="_edit-actions-to_"></span>
      </template>
    </Dialog>
  </div>
</template>
