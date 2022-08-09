<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '@/hooks/web/useI18n'
import { useRouter } from 'vue-router'
import { ElTag } from 'element-plus'
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { RestfulEdit } from '@/components/RestfulPage'
import { allSchemas, rules, getApi, saveApi } from './config'
import { propTypes } from '@/utils/propTypes'

const { query } = useRoute()
const { push } = useRouter()
const { t } = useI18n()

const id = ref(query.id as string)
const props = defineProps({
  nameCode: propTypes.string.isRequired,
  editable: propTypes.bool.def(false)
})

const config = { getApi, saveApi }

const back = () => {
  push({ name: `${props.nameCode}List` })
}
</script>

<template>
  <ContentDetailWrap
    :title="t(`rest.${nameCode}`) + (editable ? t('exampleDemo.edit') : t('exampleDemo.detail'))"
    @back="back"
  >
    <RestfulEdit
      :id="id"
      :name-code="nameCode"
      :editable="editable"
      :config="config"
      :form-schema="allSchemas.formSchema"
      :detail-schema="allSchemas.detailSchema"
      :rules="rules"
      action-to="#_actions-to_"
    >
      <template #importance="{ row }: { row }">
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

      <template #content="{ row }: { row }">
        <div v-html="row.content"></div>
      </template>
    </RestfulEdit>
    <template #right>
      <span id="_actions-to_"></span>
    </template>
  </ContentDetailWrap>
</template>
