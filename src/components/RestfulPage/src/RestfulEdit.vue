<script setup lang="ts">
import { useDesign } from '@/hooks/web/useDesign'
import { ref, unref, PropType, onMounted, TeleportProps } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { useI18n } from '@/hooks/web/useI18n'
import { useEmitt } from '@/hooks/web/useEmitt'
import { ElButton } from 'element-plus'
import RestfulWrite from './components/RestfulWrite.vue'
import { Descriptions } from '@/components/Descriptions'
import { get } from 'lodash-es'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('RestfulEdit')
const { emitter } = useEmitt()
const { t } = useI18n()

type ItemRecord = Recordable

const props = defineProps({
  id: {
    type: [String, Number],
    default: ''
  },
  modProperty: {
    type: String,
    default: ''
  },
  nameCode: propTypes.string.def('CRUD'),
  config: {
    type: Object as PropType<Recordable>,
    default: () => ({})
  },
  types: {
    type: Object,
    default: () => ({})
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
    default: () => ({})
  },
  editable: propTypes.bool.def(false),
  actionTo: undefined as unknown as PropType<TeleportProps['to']>
})

const emit = defineEmits<{
  (e: 'save', row: ItemRecord): void
}>()

const currentRow = ref<Nullable<ItemRecord>>(null)

const getTableDet = async () => {
  const res = await props.config.getApi(props.id)
  if (res) {
    currentRow.value = props.config?.response?.get
      ? get(res.data || {}, props.config?.response?.get as string)
      : res.data?.[props.modProperty]
  }
}

if (props.id) getTableDet()

const writeRef = ref<ComponentRef<typeof RestfulWrite>>()

const loading = ref(false)

const onSave = async () => {
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
      emit('save', { ...(currentRow.value || {}) } || null)
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
      :config="config.formProps"
    />
    <Descriptions v-else :data="currentRow || {}" :schema="detailSchema" v-bind="config.descProps">
      <template v-for="(item, key, index) in $slots" :key="index" #[key]="data">
        <slot :name="key" v-bind="data" :src="item"></slot>
      </template>
    </Descriptions>
    <div v-if="editable" class="flex justify-center">
      <Teleport v-if="mounted" :to="actionTo" :disabled="!actionTo">
        <ElButton type="primary" :loading="loading" @click="onSave">
          {{ t('exampleDemo.save') }}
        </ElButton>
      </Teleport>
    </div>
  </div>
</template>
