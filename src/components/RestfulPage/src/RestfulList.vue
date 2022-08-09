<script setup lang="ts">
import { useDesign } from '@/hooks/web/useDesign'
import { Search } from '@/components/Search'
import { useI18n } from '@/hooks/web/useI18n'
import { ElButton } from 'element-plus'
import { Table } from '@/components/Table'
import { useTable } from '@/hooks/web/useTable'
import { propTypes } from '@/utils/propTypes'
import { ref, PropType, TeleportProps, onMounted } from 'vue'
import { useEmitt } from '@/hooks/web/useEmitt'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('RestfulList')
const { t } = useI18n()

const props = defineProps({
  nameCode: propTypes.string.def('CRUD'),
  config: {
    type: Object as PropType<Recordable>,
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
  actionsTo: Object as PropType<TeleportProps['to']>,
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

type ItemRecord = typeof props.types.recordType | any

const emit = defineEmits<{
  (e: 'add'): void
  (e: 'edit', row: ItemRecord): void
  (e: 'detail', row: ItemRecord): void
}>()

const { register, tableObject, methods } = useTable<ItemRecord>(props.config as any)

const { getList, setSearchParams } = methods

getList()

useEmitt({
  name: `${props.nameCode}List`,
  callback: (type: string) => {
    if (type === 'add') {
      tableObject.currentPage = 1
    }
    getList()
  }
})

const AddAction = () => {
  emit('add')
}

const delLoading = ref(false)

const delData = async (row: ItemRecord | null, multiple: boolean) => {
  tableObject.currentRow = row
  const { delList, getSelections } = methods
  const selections = await getSelections()
  delLoading.value = true
  await delList(
    multiple ? selections.map((v) => v.id) : [tableObject.currentRow?.id as string],
    multiple
  ).finally(() => {
    delLoading.value = false
  })
}

const action = (row: ItemRecord, type: string) => {
  emit(type as any, row)
}

const mounted = ref(false)
onMounted(() => (mounted.value = true))
</script>

<template>
  <div :class="[prefixCls]" class="flex flex-col">
    <Search
      v-if="!hideSearch && searchPosition == 'top'"
      :schema="searchSchema"
      @search="setSearchParams"
      @reset="setSearchParams"
    />

    <div class="flex align-bottom">
      <div v-if="!hideAction" class="mb-10px">
        <Teleport v-if="mounted" :to="actionsTo" :disabled="!actionsTo">
          <ElButton v-if="!hideBtnAdd" type="primary" @click="AddAction">
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
          <Search :schema="searchSchema" @search="setSearchParams" @reset="setSearchParams" />
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
    >
      <template v-for="(item, key, index) in $slots" :key="index" #[key]="data">
        <slot
          v-if="key !== 'action' && key != 'action-item'"
          :name="key"
          v-bind="data"
          :src="item"
        ></slot>
      </template>
      <template #action="{ row }">
        <slot name="action-item" v-bind="{ row }"></slot>
        <ElButton v-if="!hideBtnEditItem" type="primary" @click="action(row, 'edit')">
          {{ t('exampleDemo.edit') }}
        </ElButton>
        <ElButton v-if="!hideBtnDetailItem" type="success" @click="action(row, 'detail')">
          {{ t('exampleDemo.detail') }}
        </ElButton>
        <ElButton v-if="!hideBtnDelItem" type="danger" @click="delData(row, false)">
          {{ t('exampleDemo.del') }}
        </ElButton>
      </template>
    </Table>
  </div>
</template>
