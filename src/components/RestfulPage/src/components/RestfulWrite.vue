<script setup lang="ts">
import { useDesign } from '@/hooks/web/useDesign'
import { Form } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { PropType, watch } from 'vue'
import { TableData } from '@/api/table/types'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('RestfulWrite')
const props = defineProps({
  currentRow: {
    type: Object as PropType<Nullable<TableData>>,
    default: () => null
  },
  formSchema: {
    type: Array as PropType<FormSchema[]>,
    default: () => []
  },
  rules: {
    type: Object as PropType<Recordable>,
    default: () => {}
  }
})

const { register, methods, elFormRef } = useForm({
  schema: props.formSchema
})

watch(
  () => props.currentRow,
  (currentRow) => {
    if (!currentRow) return
    const { setValues } = methods
    setValues(currentRow)
  },
  {
    deep: true,
    immediate: true
  }
)

defineExpose({
  elFormRef,
  getFormData: methods.getFormData
})
</script>

<template>
  <Form :class="[prefixCls]" :rules="rules" @register="register" />
</template>
