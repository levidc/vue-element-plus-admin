<script setup lang="ts">
import { useDesign } from '@/hooks/web/useDesign'
import { ref, unref, PropType, onMounted, TeleportProps } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { useI18n } from '@/hooks/web/useI18n'
import { useRouter } from 'vue-router'
import { useEmitt } from '@/hooks/web/useEmitt'
import { ElButton } from 'element-plus'
import RestfulWrite from './components/RestfulWrite.vue'
import RestfulDetail from './components/RestfulDetail.vue'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('RestfulEdit')
const { push } = useRouter()
const { emitter } = useEmitt()
const { t } = useI18n()

const props = defineProps({
  id: {
    type: [String, Number],
    default: ''
  },
  nameCode: propTypes.string.def('CRUD'),
  config: {
    type: Object as PropType<Recordable>,
    default: () => {}
  },
  types: {
    type: Object,
    default: () => {}
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
    type: Object as PropType<Record<string, any[]>>,
    default: () => {}
  },
  editable: propTypes.bool.def(false),
  actionTo: Object as PropType<TeleportProps['to']>
})

type ItemRecord = typeof props.types.recordType | any

const currentRow = ref<Nullable<ItemRecord>>(null)

const getTableDet = async () => {
  const res = await props.config.getApi(props.id)
  if (res) {
    currentRow.value = res.data
  }
}

if (props.id) getTableDet()

const writeRef = ref<ComponentRef<typeof RestfulWrite>>()

const loading = ref(false)

const save = async () => {
  const write = unref(writeRef)
  const validate = await write?.elFormRef?.validate()?.catch(() => {})
  if (validate) {
    loading.value = true
    const data = (await write?.getFormData()) as ItemRecord
    const res = await props.config
      .saveApi(data)
      .catch(() => {})
      .finally(() => {
        loading.value = false
      })
    if (res) {
      emitter.emit(`${props.nameCode}List`, props.id ? 'edit' : 'add')
      push({ name: `${props.nameCode}List` })
    }
  }
}

const mounted = ref(false)
onMounted(() => (mounted.value = true))
</script>

<template>
  <div :class="[prefixCls]">
    <RestfulWrite
      v-if="editable"
      ref="writeRef"
      :current-row="currentRow"
      :form-schema="formSchema"
      :rules="rules"
    />
    <RestfulDetail v-else :current-row="currentRow" :detail-schema="detailSchema">
      <template v-for="(item, key, index) in $slots" :key="index" #[key]="data">
        <slot :name="key" v-bind="data" :src="item"></slot>
      </template>
    </RestfulDetail>
    <div v-if="editable" class="flex justify-center">
      <Teleport v-if="mounted" :to="actionTo" :disabled="!actionTo">
        <ElButton type="primary" :loading="loading" @click="save">
          {{ t('exampleDemo.save') }}
        </ElButton>
      </Teleport>
    </div>
  </div>
</template>
