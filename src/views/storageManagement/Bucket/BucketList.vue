<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { RestfulList } from '@/components/RestfulPage'
import { PropType } from 'vue'
import { Form } from '@/components/Form'
import { Dialog } from '@/components/Dialog'
import { useI18n } from '@/hooks/web/useI18n'
import { propTypes } from '@/utils/propTypes'
import { allSchemas, rules, config, renderAddForm, validateHostName } from './config'
import { nameCode as baseNameCode, titleInfo } from './routes'
import { CascadeDropdown } from '@/components/CascadeDropdown'
import {
  ElButton,
  ElTable,
  ElTableColumn,
  ElMessage,
  ElMessageBox,
  ElSelect,
  ElOption
} from 'element-plus'
import { listNFSGateway } from '@/api/fs/NfsGateway'
import {
  createNfsAcl,
  removeNfsAcl,
  applyNfsAclRelationship,
  cancelNfsAclRelationship,
  listNfsAcl
} from '@/api/fs/NfsAcl'

import { ref, unref, nextTick, watch } from 'vue'

const { t } = useI18n()
defineOptions({
  name: `${baseNameCode}List`
})

const props = defineProps({
  nameCode: propTypes.string.isRequired,
  search: Object as PropType<Recordable>,
  order: Object as PropType<RestfulOrder>
})

const restful = ref()

let getList = () => {}
nextTick(() => {
  getList = restful?.value.getList
})

const loading = ref(false)

const addForm = ref()

const addClientFlag = ref(false)

const removeClientFlag = ref(false)
const searchGateway = ref('')
const applyFlag = ref(false)
const allocatedClient = ref([])
const applyGateway = ref([])
const selectBucket = ref({})

const scehema = ref<cascadeDropdownSchema[]>([
  {
    label: '客户端',
    command: () => {},
    children: [
      {
        label: '添加客户端',
        command: async (tagItem) => {
          selectBucket.value = tagItem.row
          const res = await listNfsAcl({
            bucketId: tagItem.row.bucketId,
            storageId: tagItem.row.storageId
          })
          nextTick(() => {
            allocatedClient.value = res.data.NfsAclList
            // 动态校验hostName
            validateHostName.value = allocatedClient.value
            // renderAddForm
            addClientFlag.value = true
          })
        }
      },
      {
        divided: true,
        label: '移除客户端',
        command: async (tagItem) => {
          selectBucket.value = tagItem.row
          const res = await listNfsAcl({
            bucketId: tagItem.row.bucketId,
            storageId: tagItem.row.storageId
          })
          nextTick(() => {
            allocatedClient.value = res.data.NfsAclList
            // 动态校验hostName
            validateHostName.value = allocatedClient.value
            // renderAddForm
            removeClientFlag.value = true
          })
        }
      }
    ]
  },
  {
    label: 'NFS共享',
    command: () => {},
    children: [
      {
        label: '设置NFS共享',
        command: async (tagItem) => {
          applyFlag.value = true
          selectBucket.value = tagItem.row
        }
      },
      {
        divided: true,
        label: '取消NFS共享',
        command: async (tagItem) => {
          const { bucket, bucketId, storageId } = tagItem.row
          ElMessageBox.confirm(`是否取消当前桶${bucket}下所有网关的共享`, t('common.delWarning'), {
            confirmButtonText: t('common.delOk'),
            cancelButtonText: t('common.delCancel'),
            type: 'warning'
          }).then(() => {
            cancelNfsAclRelationship({
              bucketId,
              storageId
            }).then(() => {
              ElMessage.success(t('common.resSuccess'))
              getList()
            })
            // cancelNfsAclRelationship
          })
        }
      }
    ]
  }
])

watch(
  () => applyFlag.value,
  async (val) => {
    if (val) {
      const res = await listNFSGateway()
      applyGateway.value = res.data.NFSGatewayList.map((item) => {
        return {
          label: item.gatewayName,
          value: item.gatewayId
        }
      })
      console.log(res, 'res')
    }
  }
)

// 添加客户端
const formSubmit = () => {
  unref(addForm)
    ?.getElFormRef()
    ?.validate((valid) => {
      //formModel 表单绑定对应值
      let { formModel } = addForm.value
      // console.log(formModel, '123', addForm.value)
      if (valid) {
        // console.log('submit success', selectBucket.value)
        const data = {}
        const { bucketId, storageId } = selectBucket.value
        Object.assign(data, formModel, {
          id: '0',
          bucketId,
          storageId
        })
        createNfsAcl(data).then(() => {
          ElMessage.success(t('common.resSuccess'))
          addClientFlag.value = false
          getList()
        })
        // case btn.value => 对应api
      } else {
        console.log('submit fail')
      }
    })
}

//移除客户端
const handleDelete = (_: number, row: any) => {
  // selectGateWay.value.gatewayId
  ElMessageBox.confirm(t('common.delMessage'), t('common.delWarning'), {
    confirmButtonText: t('common.delOk'),
    cancelButtonText: t('common.delCancel'),
    type: 'warning'
  }).then(() => {
    loading.value = true
    removeNfsAcl({
      aclId: row.id,
      bucketId: selectBucket.value.bucketId,
      storageId: selectBucket.value.storageId
    })
      .then(() => {
        // refresh
        ElMessage.success(t('common.resSuccess'))
        listNfsAcl({
          bucketId: selectBucket.value.bucketId,
          storageId: selectBucket.value.storageId
        })
          .then((res) => {
            allocatedClient.value = res.data.NfsAclList
          })
          .finally(() => {
            loading.value = false
          })
      })
      .finally(() => {
        loading.value = false
        getList()
      })
  })
}

//应用网关
const confirmApply = () => {
  const { storageId, bucketId } = selectBucket.value
  applyNfsAclRelationship({
    gatewayId: searchGateway.value,
    storageId,
    bucketId
  }).then(() => {
    ElMessage.success(t('common.resSuccess'))
    applyFlag.value = false
    getList()
  })
}
</script>

<template>
  <ContentWrap :title="t(titleInfo.title)">
    <RestfulList
      ref="restful"
      :name-code="nameCode"
      :config="config"
      :search-schema="allSchemas.searchSchema"
      :table-columns="allSchemas.tableColumns"
      :form-schema="allSchemas.formSchema"
      :detail-schema="allSchemas.detailSchema"
      :rules="rules"
      :default-search="search"
      :default-order="order"
      hideBtnAdd
      hideBtnDelAll
      hideBtnDelItem
      hideBtnDetailItem
      hideBtnEditItem
    >
      <template #action-item="row">
        <CascadeDropdown :schema="scehema" :tagItem="row" type="primary">操作</CascadeDropdown>
      </template>
    </RestfulList>
  </ContentWrap>

  <Dialog v-model="addClientFlag" title="添加客户端" width="40%" :max-height="400">
    <!-- <p>桶名称:{{ selectBucket.bucket }}</p> -->
    <Form ref="addForm" :schema="renderAddForm" />
    <ContentWrap title="已分配">
      <ElTable :data="allocatedClient" max-height="600">
        <ElTableColumn label="服务器IP" prop="hostname" />
        <ElTableColumn label="读写权限" prop="readonly">
          <template #default="scope">
            {{ scope.row.readOnly ? '只读' : '读写' }}
          </template>
        </ElTableColumn>
        <ElTableColumn label="同步异步" prop="sync">
          <template #default="scope">
            {{ scope.row.sync ? '同步' : '异步' }}
          </template>
        </ElTableColumn>
      </ElTable>
    </ContentWrap>
    <template #footer>
      <ElButton type="primary" @click="formSubmit">添加</ElButton>
    </template>
  </Dialog>

  <Dialog v-model="removeClientFlag" title="移除客户端" width="40%" :max-height="400">
    <ElTable :data="allocatedClient" max-height="600" v-loading="loading">
      <ElTableColumn label="hostname" prop="hostname" />
      <ElTableColumn label="访问控制" prop="readonly">
        <template #default="scope">
          {{ scope.row.readOnly ? '只读' : '读写' }}
        </template>
      </ElTableColumn>
      <ElTableColumn label="同步异步" prop="sync">
        <template #default="scope">
          {{ scope.row.sync ? '同步' : '异步' }}
        </template>
      </ElTableColumn>
      <ElTableColumn label="操作">
        <template #default="scope">
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
            ><Icon icon="ep:close-bold" />
          </el-button>
        </template>
      </ElTableColumn>
    </ElTable>
    <template #footer>
      <ElButton @click="removeClientFlag = false">{{ t('dialogDemo.close') }}</ElButton>
    </template>
  </Dialog>

  <Dialog v-model="applyFlag" title="设置NFS共享" width="40%" max-height="200px">
    选择NFS网关:
    <ElSelect
      class="mr-10"
      style="width: 50%"
      v-model="searchGateway"
      placeholder="选择网关"
      clearable
    >
      <ElOption
        v-for="item in applyGateway"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </ElSelect>
    <template #footer>
      <ElButton type="primary" @click="confirmApply">{{ t('common.ok') }}</ElButton>
      <ElButton @click="applyFlag = false">{{ t('dialogDemo.close') }}</ElButton>
    </template>
  </Dialog>
</template>
