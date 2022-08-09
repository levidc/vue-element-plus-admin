<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '@/hooks/web/useI18n'
import { RestfulEdit } from '@/components/RestfulPage'
import { allSchemas, rules, getApi, saveApi } from './config'
import { propTypes } from '@/utils/propTypes'

const { query } = useRoute()
const { t } = useI18n()

const id = ref(query.id as string)
defineProps({
  nameCode: propTypes.string.isRequired,
  editable: propTypes.bool.def(false)
})

const config = { getApi, saveApi }
</script>

<template>
  <RestfulEdit
    :id="id"
    :name-code="nameCode"
    :editable="editable"
    :config="config"
    :form-schemas="allSchemas.formSchema"
    :detail-schema="allSchemas.detailSchema"
    :rules="rules"
  >
    <!-- 可定制详情页内容项样式 -->
    <!-- <template #importance="{ row }: { row }">
      <span style="color: blue">{{ row.importance }}</span>
    </template> -->
  </RestfulEdit>
</template>
