<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { PermissionConfig } from '@/components/PermissionConfig'
import { computed, reactive, ref } from 'vue'
import { permissionConfig } from './permission-config-data'
import { ElSelect, ElOption, ElScrollbar, ElTag, ElSwitch } from 'element-plus'

const { resultMessage, ...premissionData } = permissionConfig

const group = {
  Account: { chineseText: '用户', englishText: 'Account' },
  SnapShot: { chineseText: '快照', englishText: 'SnapShot' },
  StoragePool: { chineseText: '存储池', englishText: 'Storage Pool' },
  Rebalance: { chineseText: '负载均衡', englishText: 'Rebalance' },
  Access_Rule: { chineseText: '客户机', englishText: 'Access Rule' },
  apisList: { chineseText: '接口列表', englishText: 'Apis List' },
  License: { chineseText: '许可证', englishText: 'License' },
  PerformanceData: { chineseText: '性能查询与统计', englishText: 'Performance Data' },
  Driver: { chineseText: '驱动', englishText: 'Driver' },
  AlertTemplate: { chineseText: '告警模板', englishText: 'Alert Template' },
  AlertFoward: { chineseText: '告警转发配置', englishText: 'Alert Foward' },
  Role: { chineseText: '角色', englishText: 'Role' },
  QOS: { chineseText: 'QOS', englishText: 'QOS' },
  Volume: { chineseText: '卷', englishText: 'Volume' },
  Hardware: { chineseText: '硬件', englishText: 'Hardware' },
  Domain: { chineseText: '域', englishText: 'Domain' },
  AlertMessage: { chineseText: '告警信息', englishText: 'Alert Message' },
  DTO: { chineseText: 'DTO', englishText: 'DTO' },
  Other: { chineseText: '其他', englishText: 'Other' }
}

const data = reactive({
  value: ['resetAccountPassword', 'createAccount', 'rollbackFromSnapshot'] as string[]
})

const permissions = computed(() => {
  return Object.keys(premissionData).map((k) => ({
    apiName: k,
    ...group[k],
    children: premissionData[k]
  }))
})

const labelPosition = ref('left')
const options = [
  {
    value: 'left',
    label: '左边'
  },
  {
    value: 'top',
    label: '上方'
  },
  {
    value: 'top-line',
    label: '上方横线'
  }
]
const editable = ref(true)

const onPermissionChange = () => {
  console.log('onPermissionChange', data.value)
}
</script>

<template>
  <ContentWrap title="权限配置">
    <div class="flex mb-6">
      <div class="flex-grow"></div>
      <ElSwitch v-model="editable" active-text="编辑" inactive-text="查看" class="mr-8" />
      <el-select v-model="labelPosition" placeholder="标签位置">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        /> </el-select
    ></div>
    <el-scrollbar height="500px">
      <PermissionConfig
        v-model="data.value"
        :permissions="permissions"
        :label-position="labelPosition"
        :editable="editable"
        key-col="apiName"
        label-col="chineseText"
        @change="onPermissionChange"
      />
    </el-scrollbar>
  </ContentWrap>
  <ContentWrap title="权限结果">
    <el-tag v-for="p in data.value" :key="p" class="m-1">{{ p }}</el-tag>
  </ContentWrap>
</template>
