<script setup lang="ts">
import { RestfulList } from '@/components/RestfulPage'
import { useRouter } from 'vue-router'
import { useI18n } from '@/hooks/web/useI18n'
import { propTypes } from '@/utils/propTypes'
import { allSchemas, getListApi, delListApi } from './config'
import { nameCode as baseNameCode } from './routes'

const { push } = useRouter()
const { t } = useI18n()

defineOptions({
  name: `${baseNameCode}List`
})

const props = defineProps({
  nameCode: propTypes.string.isRequired
})

const config = {
  getListApi: getListApi,
  delListApi: delListApi,
  response: {
    // 可配置返回列表的字段
    list: 'list',
    total: 'total'
  },
  props: {
    // 可配置列表的属性，参考ElTable
    // expand: false
  }
}

const onAdd = () => {
  push({ name: `${props.nameCode}Add` })
}
const onEdit = (row) => {
  push({ name: `${props.nameCode}Edit`, query: { id: row.id } })
}
const onDetail = (row) => {
  push({ name: `${props.nameCode}Detail`, query: { id: row.id } })
}
</script>

<template>
  <RestfulList
    :name-code="nameCode"
    :config="config"
    :search-schema="allSchemas.searchSchema"
    :table-columns="allSchemas.tableColumns"
    @add="onAdd"
    @edit="onEdit"
    @detail="onDetail"
  >
    <!-- 可定制列表项和扩展项样式 -->
    <!-- <template #expand="data">
      <div class="ml-30px">
        <div>{{ t('tableDemo.title') }}：{{ data.row.title }}</div>
        <div>{{ t('tableDemo.author') }}：{{ data.row.author }}</div>
        <div>{{ t('tableDemo.displayTime') }}：{{ data.row.display_time }}</div>
      </div>
    </template> -->
  </RestfulList>
</template>
