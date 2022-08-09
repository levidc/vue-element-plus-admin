<script setup lang="ts">
import { useDesign } from '@/hooks/web/useDesign'
import { reactive, PropType, onMounted, watch } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { PermissionCheck, PermissionGroup } from './types'
import { ElCheckbox, ElCheckboxGroup, ElDivider } from 'element-plus'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('PermissionConfig')

const props = defineProps({
  // 权限定义
  permissions: {
    type: Array as PropType<PermissionGroup[]>,
    default: () => []
  },
  // 权限值数组
  modelValue: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  // 是否可编辑
  editable: propTypes.bool.def(false),
  // 是否合并组全部权限为“*”
  mergeGroup: propTypes.bool.def(false),
  // 权限码字段
  keyCol: propTypes.string.def('key'),
  // 权限名字段
  labelCol: propTypes.string.def('label'),
  // 子权限数组字段
  childrenCol: propTypes.string.def('children'),
  // 返回数据结构类型
  returnType: propTypes.string.validate((v: string) => ['str', 'key-arr'].includes(v)).def('str'),
  // 标签位置
  labelPosition: propTypes.string
    .validate((v: string) => ['left', 'top', 'top-line'].includes(v))
    .def('left'),
  // 标签宽度
  labelWidth: propTypes.string.def('200px'),
  // 子项宽度
  itemWidth: propTypes.string.def('240px')
})

const emit = defineEmits(['change', 'update:modelValue'])

const data = reactive({
  value: [] as PermissionCheck[]
})

const formatValue = () => {
  data.value = props.permissions.reduce((prev, gp, i) => {
    prev[i] = {
      checkAll: false,
      isIndeterminate: false,
      checkVal:
        gp[props.childrenCol]
          .filter((it) =>
            props.modelValue.some(
              (v) => v == it[props.keyCol] || (props.mergeGroup && v == `${gp[props.keyCol]}:*`)
            )
          )
          .map((p) => p[props.keyCol]) || []
    }
    prev[i].checkAll = prev[i].checkVal.length >= gp[props.childrenCol].length
    prev[i].isIndeterminate =
      prev[i].checkVal.length < gp[props.childrenCol].length && prev[i].checkVal.length > 0
    return prev
  }, [] as PermissionCheck[])
}

formatValue()

onMounted(() => formatValue())

watch(
  () => props.modelValue,
  () => formatValue()
)

// 全选
const handleCheckAllChange = (val: boolean, index: number) => {
  if (!props.editable) return
  data.value[index].checkVal = val
    ? (props.permissions[index][props.childrenCol] || []).map((p) => p[props.keyCol])
    : []
  data.value[index].isIndeterminate = false
  emitChange()
}

// 单选
const handleCheckedPermChange = (value: string[], index: number) => {
  if (!props.editable) return
  const checkedCount = value.length
  data.value[index].checkAll =
    checkedCount === (props.permissions[index][props.childrenCol] || []).length
  data.value[index].isIndeterminate =
    checkedCount > 0 && checkedCount < (props.permissions[index][props.childrenCol] || []).length
  emitChange()
}

const emitChange = () => {
  const rst = data.value.reduce(
    (prev, gp, idx) => [
      ...prev,
      ...(props.mergeGroup && gp.checkVal.length == props.permissions[idx][props.childrenCol].length
        ? [`${props.permissions[idx][props.keyCol]}:*`]
        : gp.checkVal)
    ],
    []
  )
  emit('update:modelValue', [...rst])
  if (props.returnType == 'key-arr')
    emit(
      'change',
      props.permissions.reduce((prev, gp, idx) => {
        prev[gp[props.keyCol]] =
          props.mergeGroup && data.value[idx].checkVal.length == gp[props.childrenCol].length
            ? ['*']
            : data.value[idx].checkVal
        return prev
      }, {})
    )
  else emit('change', [...rst])
}
</script>

<template>
  <div :class="[prefixCls]">
    <template v-for="(gp, index) in props.permissions" :key="gp[props.keyCol]">
      <div
        v-if="editable || data.value[index].checkVal.length > 0"
        class="pb-6"
        :class="[props.labelPosition == 'left' ? 'flex' : 'flex-col-reverse']"
      >
        <div
          :class="[props.labelPosition == 'left' ? 'mr-4' : '']"
          :style="{
            width: props.labelPosition == 'left' ? props.labelWidth : undefined,
            borderRight:
              props.labelPosition == 'left' ? '2px solid var(--el-color-primary)' : undefined
          }"
        >
          <el-divider v-if="props.labelPosition == 'top-line'" content-position="left"
            ><el-checkbox
              v-if="editable"
              v-model="data.value[index].checkAll"
              :indeterminate="data.value[index].isIndeterminate"
              @change="(val: boolean) => handleCheckAllChange(val, index)"
              class="cbbold"
              >{{ gp[props.labelCol] }}</el-checkbox
            >
            <span v-else class="cb bold cb-label">{{ gp[props.labelCol] }}</span>
          </el-divider>
          <div v-else>
            <el-checkbox
              v-if="editable"
              v-model="data.value[index].checkAll"
              :indeterminate="data.value[index].isIndeterminate"
              @change="(val: boolean) => handleCheckAllChange(val, index)"
              class="cb bold"
              >{{ gp[props.labelCol] }}</el-checkbox
            >
            <span v-else class="cb bold cb-label">{{ gp[props.labelCol] }}</span>
          </div>
        </div>
        <div
          class="flex-grow"
          :style="{
            width: props.labelPosition == 'left' ? '10px' : undefined,
            paddingLeft:
              props.labelPosition == 'top'
                ? '50px'
                : props.labelPosition == 'top-line'
                ? '40px'
                : undefined
          }"
        >
          <el-checkbox-group
            v-model="data.value[index].checkVal"
            class="flex-row flex-wrap"
            @change="(value: string[]) => handleCheckedPermChange(value, index)"
          >
            <template v-for="it in gp[props.childrenCol]" :key="it[props.keyCol]">
              <el-checkbox v-if="editable" :label="it[props.keyCol]" class="cb cb-item">{{
                it[props.labelCol]
              }}</el-checkbox>
              <span
                v-else-if="data.value[index].checkVal.some((v) => v == it[props.keyCol])"
                class="cb cb-item cb-label"
                >{{ it[props.labelCol] }}</span
              >
            </template>
          </el-checkbox-group>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.bold {
  font-weight: 700;
}
.cb {
  white-space: normal;
  display: inline-flex;
  align-items: center;
  margin: 4px 10px 4px 0;
}
.cb-item {
  width: v-bind('props.itemWidth');
  white-space: normal;
}
.cb-label {
  font-size: var(--el-font-size-base);
  line-height: calc(var(--el-font-size-base) + 2px);
  height: 32px;
}
</style>
