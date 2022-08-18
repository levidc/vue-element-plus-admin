<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { FormSteps } from '@/components/FormSteps'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { useI18n } from '@/hooks/web/useI18n'
import { computed, reactive, ref } from 'vue'
import { ElScrollbar } from 'element-plus'
import { PermissionConfig } from '@/components/PermissionConfig'
import { permissionConfig } from './permission-config-data'

const { resultMessage, ...premissionData } = permissionConfig

const { t } = useI18n()

const stepsSchema = reactive([
  {
    title: '基本信息',
    width: '700px',
    formSchema: [
      {
        field: 'index',
        label: t('tableDemo.index'),
        type: 'index',
        form: {
          show: false
        },
        detail: {
          show: false
        }
      },
      {
        field: 'title',
        label: t('tableDemo.title'),
        search: {
          show: true
        },
        form: {
          colProps: {
            span: 24
          }
        },
        detail: {
          span: 24
        }
      },
      {
        field: 'author',
        label: t('tableDemo.author')
      },
      {
        field: 'display_time',
        label: t('tableDemo.displayTime'),
        form: {
          component: 'DatePicker',
          componentProps: {
            type: 'datetime',
            valueFormat: 'YYYY-MM-DD HH:mm:ss'
          }
        }
      }
    ]
  },
  {
    title: '附加信息',
    width: '800px',
    formSchema: [
      {
        field: 'title',
        label: t('tableDemo.title'),
        search: {
          show: true
        },
        form: {
          colProps: {
            span: 24
          }
        },
        detail: {
          span: 24
        }
      },
      {
        field: 'importance',
        label: t('tableDemo.importance'),
        form: {
          component: 'Select',
          componentProps: {
            options: [
              {
                label: '重要',
                value: 1
              },
              {
                label: '良好',
                value: 2
              },
              {
                label: '一般',
                value: 3
              }
            ]
          }
        }
      },
      {
        field: 'pageviews',
        label: t('tableDemo.pageviews'),
        form: {
          component: 'InputNumber',
          value: 0
        }
      },
      {
        field: 'content',
        label: t('exampleDemo.content'),
        table: {
          show: false
        },
        form: {
          component: 'Editor',
          colProps: {
            span: 24
          }
        },
        detail: {
          span: 24
        }
      },
      {
        field: 'action',
        width: '260px',
        label: t('tableDemo.action'),
        form: {
          show: false
        },
        detail: {
          show: false
        }
      }
    ]
  },
  {
    title: '权限分配',
    width: '80%'
  },
  { title: '信息确认', formSchema: [] }
])

const allSchema = stepsSchema.map((sch) => ({
  ...sch,
  formSchema: useCrudSchemas((sch.formSchema || []) as CrudSchema[]).allSchemas.formSchema
}))

const row = ref({
  title: 'asd',
  author: '张三',
  display_time: '2010-02-11 00:10:23',
  importance: 1,
  pageviews: 12,
  permissions: ['resetAccountPassword', 'createAccount', 'rollbackFromSnapshot'],
  content:
    '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
})

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

const permissions = computed(() => {
  return Object.keys(premissionData).map((k) => ({
    apiName: k,
    ...group[k],
    children: premissionData[k]
  }))
})
</script>

<template>
  <ContentWrap title="步骤表单">
    <FormSteps :schema="allSchema" :model="row">
      <template #step-3="{ data }">
        <ElScrollbar height="500px" class="flex-grow">
          <PermissionConfig
            v-model="data.permissions"
            :permissions="permissions"
            :editable="true"
            key-col="apiName"
            label-col="chineseText"
            class="flex-grow"
          />
        </ElScrollbar>
      </template>
      <template #step-4="{ data }">
        <div>{{ data }}</div>
      </template>
    </FormSteps>
  </ContentWrap>
</template>
