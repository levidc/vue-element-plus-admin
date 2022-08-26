<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { RestfulList } from '@/components/RestfulPage'
import { PropType } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '@/hooks/web/useI18n'
import { propTypes } from '@/utils/propTypes'
import { ElTag } from 'element-plus'
import { allSchemas, rules, config, ItemRecord } from './config'
import { nameCode as baseNameCode, titleInfo } from './routes'

const { push } = useRouter()
const { t } = useI18n()

defineOptions({
  name: `${baseNameCode}List`
})

const props = defineProps({
  nameCode: propTypes.string.isRequired,
  search: Object as PropType<Recordable>,
  order: Object as PropType<RestfulOrder>
})

const onAdd = () => {
  push({ name: `${props.nameCode}Add` })
}
const onEdit = (row: ItemRecord) => {
  push({ name: `${props.nameCode}Edit`, query: { id: row[config.idCol] } })
}
const onDetail = (row: ItemRecord) => {
  push({ name: `${props.nameCode}Detail`, query: { id: row[config.idCol] } })
}
</script>

<template>
  <ContentWrap :title="titleInfo.title" :message="titleInfo.message">
    <RestfulList
      :name-code="nameCode"
      :config="config"
      :search-schema="allSchemas.searchSchema"
      :table-columns="allSchemas.tableColumns"
      :form-schema="allSchemas.formSchema"
      :detail-schema="allSchemas.detailSchema"
      :rules="rules"
      :default-search="search"
      :default-order="order"
      dialog
      @add="onAdd"
      @edit="onEdit"
      @detail="onDetail"
    >
      <template #expand="data">
        <div class="ml-30px">
          <div>{{ t('tableDemo.title') }}：{{ data.row.title }}</div>
          <div>{{ t('tableDemo.author') }}：{{ data.row.author }}</div>
          <div>{{ t('tableDemo.displayTime') }}：{{ data.row.display_time }}</div>
        </div>
      </template>
      <template #edit-importance="{ row }: { row: ItemRecord }">
        <ElTag
          :type="row.importance === 1 ? 'success' : row.importance === 2 ? 'warning' : 'danger'"
        >
          {{
            row.importance === 1
              ? t('tableDemo.important')
              : row.importance === 2
              ? t('tableDemo.good')
              : t('tableDemo.commonly')
          }}
        </ElTag>
      </template>

      <template #edit-content="{ row }: { row: ItemRecord }">
        <div v-html="row.content"></div>
      </template>
    </RestfulList>
  </ContentWrap>
</template>
