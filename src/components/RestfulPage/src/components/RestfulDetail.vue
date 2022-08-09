<script setup lang="ts">
import { useDesign } from '@/hooks/web/useDesign'
import { PropType } from 'vue'
import type { TableData } from '@/api/table/types'
import { Descriptions } from '@/components/Descriptions'

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('RestfulDetail')

defineProps({
  currentRow: {
    type: Object as PropType<Nullable<TableData>>,
    default: () => null
  },
  detailSchema: {
    type: Array as PropType<DescriptionsSchema[]>,
    default: () => []
  }
})
</script>

<template>
  <Descriptions :class="[prefixCls]" :schema="detailSchema" :data="currentRow || {}">
    <template v-for="(item, key, index) in $slots" :key="index" #[key]="data">
      <slot :name="key" v-bind="data" :src="item"></slot>
    </template>
  </Descriptions>
</template>
