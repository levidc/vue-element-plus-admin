<script setup lang="ts">
import { useDesign } from '@/hooks/web/useDesign'
import { propTypes } from '@/utils/propTypes'
import { computed, onBeforeMount, PropType, ref, unref, useSlots, watch } from 'vue'
import { ElButton, ElButtonGroup, ElSteps, ElStep } from 'element-plus'
import { Form } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { useI18n } from '@/hooks/web/useI18n'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('FormSteps')
const { t } = useI18n()

const props = defineProps({
  schema: {
    type: Array as PropType<FormStepsSchema[]>,
    default: () => []
  },
  // 表单数据对象
  model: {
    type: Object as PropType<Recordable>,
    default: () => ({})
  },
  stepsProps: {
    type: Object as PropType<Recordable>,
    default: () => ({})
  },
  formProps: {
    type: Object as PropType<Recordable>,
    default: () => ({})
  },
  actionPlacement: propTypes.string
    .validate((v: string) => ['top', 'bottom'].includes(v))
    .def('top'),
  rules: {
    type: Object as PropType<Recordable>,
    default: () => ({})
  },
  dividerHeight: propTypes.string.def('50px'),
  btnDownText: propTypes.string
})

const active = ref(0)

const formModel = ref<Recordable>({})

const formHandlers: Record<string, ReturnType<typeof useForm>> = {}

const f = (index: number) => `f-${index}`

const slots = useSlots()

const createFormHandlers = () => {
  props.schema.forEach((it, index) => {
    if (slots[`step-${index + 1}`]) return
    formHandlers[f(index)] = useForm({ schema: it.formSchema })
  })
  syncData()
}

const syncData = () => {
  if (!formModel.value) return
  Object.keys(formHandlers).forEach((k) => {
    formHandlers[k].methods.setValues(formModel.value)
  })
}

watch(
  () => props.model,
  (model) => {
    if (!model) return
    formModel.value = { ...model }
  },
  {
    deep: true,
    immediate: true
  }
)

watch(
  () => formModel.value,
  (model) => {
    if (!model) return
    syncData()
  },
  {
    deep: true,
    immediate: true
  }
)

onBeforeMount(() => createFormHandlers())

const updateCurrentData = async () => {
  if (!formHandlers[f(active.value)]) return
  const data: Recordable = await formHandlers[f(active.value)].methods.getFormData()
  formModel.value = Object.assign(unref(formModel), data)
}

const stepActive = async (n: number) => {
  await updateCurrentData()
  active.value = Math.min(Math.max(0, active.value + n), props.schema.length - 1)
}

const handleDone = async () => {
  await updateCurrentData()
}

const cFormProps = computed(() => {
  return Object.assign(
    {
      isCol: true, // 是否需要栅格布局
      autoSetPlaceholder: true, // 是否自动设置placeholder
      isCustom: false, // 是否自定义内容
      labelWidth: 'auto' // 表单label宽度
    },
    props.formProps
  )
})

const cStepsProps = computed(() => {
  return Object.assign(
    {
      alignCenter: true,
      simple: false,
      processStatus: 'finish',
      finishStatus: 'process' // 设置结束步骤的状态
    },
    props.stepsProps
  ) as unknown as typeof ElSteps
})
</script>

<template>
  <div :class="[prefixCls]">
    <div
      class="flex"
      :style="
        cStepsProps.simple && actionPlacement == 'top'
          ? {
              alignItems: 'center',
              backgroundColor: 'var(--el-fill-color-light)',
              paddingRight: '6px'
            }
          : undefined
      "
    >
      <ElSteps v-bind="cStepsProps" :active="active" class="flex-grow">
        <ElStep
          v-for="(sc, index) in schema"
          :key="index"
          :title="sc.title"
          :icon="sc.icon"
          :description="sc.description"
        />
      </ElSteps>
      <ElButtonGroup v-if="actionPlacement == 'top'" type="primary" class="step-action ml-2">
        <ElButton :disabled="active <= 0" @click="() => stepActive(-1)"
          ><Icon icon="ep:arrow-left" />{{ t('common.prevLabel') }}</ElButton
        >
        <ElButton v-if="active < schema.length - 1" @click="() => stepActive(1)"
          >{{ t('common.nextLabel') }}<Icon icon="ep:arrow-right"
        /></ElButton>
        <ElButton v-if="active >= schema.length - 1" @click="handleDone">{{
          btnDownText || t('common.doneLabel')
        }}</ElButton>
      </ElButtonGroup>
    </div>
    <div class="flex justify-center" :style="{ marginTop: dividerHeight }">
      <div
        v-for="(sc, index) in schema"
        :key="index"
        v-show="index == active"
        class="flex justify-center"
        :style="{ width: sc.width || '100%' }"
      >
        <slot :name="`step-${index + 1}`" v-bind="{ data: formModel, schema: sc.formSchema }">
          <Form
            v-bind="cFormProps"
            :rules="rules"
            :style="{ width: sc.width || undefined }"
            @register="formHandlers[f(index)].register"
          /> </slot
      ></div>
    </div>
    <div
      v-if="actionPlacement == 'bottom'"
      class="flex justify-center"
      :style="{ marginTop: dividerHeight }"
    >
      <ElButtonGroup type="primary" class="step-action">
        <ElButton :disabled="active <= 0" @click="() => stepActive(-1)"
          ><Icon icon="ep:arrow-left" />{{ t('common.prevLabel') }}</ElButton
        >
        <ElButton v-if="active < schema.length - 1" @click="() => stepActive(1)"
          >{{ t('common.nextLabel') }}<Icon icon="ep:arrow-right"
        /></ElButton>
        <ElButton v-if="active >= schema.length - 1" @click="handleDone">{{
          t('common.doneLabel')
        }}</ElButton>
      </ElButtonGroup>
    </div>
  </div>
</template>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-FormSteps';

.@{prefix-cls} {
  :deep(.step-action) {
    .el-button {
      width: 90px;
    }
  }
}
</style>
