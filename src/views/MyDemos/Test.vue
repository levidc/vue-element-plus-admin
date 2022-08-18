<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { ElMenuItem, ElSubMenu, ElDivider } from 'element-plus'
import { CascadeDropdown } from '@/components/CascadeDropdown'
import { ref } from 'vue'

defineOptions({
  name: 'Test'
})

const scehema = ref<cascadeDropdownSchema[]>([
  {
    icon: 'ant-design:sync-outlined',
    label: '刷新',
    command: () => {}
  },
  {
    icon: 'ant-design:close-outlined',
    label: '关闭标',
    command: () => {},
    children: [
      {
        icon: 'ant-design:tag-outlined',
        label: '关闭其他标签',
        command: () => {}
      },
      {
        divided: true,
        icon: 'ant-design:line-outlined',
        label: '关闭全部标签',
        command: () => {}
      }
    ]
  },
  {
    divided: true,
    icon: 'ant-design:vertical-right-outlined',
    label: '关闭左侧标签',
    command: () => {}
  },
  {
    icon: 'ant-design:vertical-left-outlined',
    label: '关闭左侧标签',
    disabled: true,
    command: () => {}
  }
])
</script>

<template>
  <ContentWrap title="Test">
    <CascadeDropdown :schema="scehema" type="primary">级联下拉菜单</CascadeDropdown>
    <CascadeDropdown :schema="scehema" type="primary" circle />
    <CascadeDropdown type="primary" size="small">
      Slot方式
      <template #dropdown>
        <ElMenuItem index="1">Processing Center</ElMenuItem>
        <ElSubMenu index="2">
          <template #title>Workspace</template>
          <ElMenuItem index="2-1">item one</ElMenuItem>
          <ElMenuItem index="2-2">item two</ElMenuItem>
          <ElMenuItem index="2-3">item three</ElMenuItem>
          <ElDivider />
          <ElSubMenu index="2-4">
            <template #title>item four</template>
            <ElMenuItem index="2-4-1">item one</ElMenuItem>
            <ElMenuItem index="2-4-2">item two</ElMenuItem>
            <ElMenuItem index="2-4-3">item three</ElMenuItem>
          </ElSubMenu>
        </ElSubMenu>
        <ElMenuItem index="3" disabled>Info</ElMenuItem>
        <ElMenuItem index="4">Orders</ElMenuItem>
      </template>
    </CascadeDropdown>
  </ContentWrap>
</template>

<style lang="less" scoped></style>
