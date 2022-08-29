<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { RestfulList } from '@/components/RestfulPage'
import { PropType } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { propTypes } from '@/utils/propTypes'
import { allSchemas, rules, config, renderAddForm } from './config'
import { nameCode as baseNameCode, titleInfo } from './routes'
import { Dialog } from '@/components/Dialog'
import { Form } from '@/components/Form'
import Write from './nasForm.vue'
import { ref, unref, nextTick, watch } from 'vue'
import { ElButton, ElTable, ElTableColumn, ElMessage, ElMessageBox } from 'element-plus'
import { CascadeDropdown } from '@/components/CascadeDropdown'
import { createNFSGateway, removeNFSGateway } from '@/api/fs/NfsGateway'
import { listObjectStorageResource } from '@/api/fs/ObjectStorage'
import { createNfsAcl, listNfsAcl, removeNfsAcl } from '@/api/fs/NfsAcl'
const { t } = useI18n()

defineOptions({
  name: `${baseNameCode}List`
})

const props = defineProps({
  nameCode: propTypes.string.isRequired,
  search: Object as PropType<Recordable>,
  order: Object as PropType<RestfulOrder>
})

const loading = ref(false)

const createFlag = ref(false)

const restful = ref()

const addForm = ref()

const writeRef = ref()

const addClientFlag = ref(false)

const removeClientFlag = ref(false)

const gateWayClient = ref([])

const selectGateWay = ref({})

watch(
  () => addClientFlag.value,
  (val) => {
    if (val) {
      nextTick(() => {
        let { setValues } = addForm.value
        setValues({
          readOnly: true,
          sync: false
        })
        const validateHostName = (_, data, cb) => {
          // hostname 唯一校验
          const res = gateWayClient.value.filter((item) => item.hostname === data)
          if (res && res.length) {
            return cb('客户端IP重复请修改')
          } else {
            cb()
          }
        }
        renderAddForm[0].formItemProps?.rules.push({
          validator: validateHostName,
          trigger: 'change'
        })
      })
    }
  }
)

//创建网关
const save = () => {
  const { getFormData } = writeRef?.value
  const { getList } = restful?.value
  unref(writeRef?.value?.elFormRef)!.validate(async (isValid) => {
    console.log(isValid)
    if (isValid) {
      let data = await getFormData()
      console.log(data, 'data')
      // 获取表单model值
      Object.assign(data, { gatewayId: 0, nfsAclModelList: [], virtualIp: '' })
      createNFSGateway(data).then(() => {
        ElMessage.success(t('common.resSuccess'))
        createFlag.value = false
        getList()
      })
    }
  })
}

// 创建获取对象list 传递storageId
const openCreate = () => {
  createFlag.value = true
  let optionsStorage = []
  const storageOption = async () => {
    const res = await listObjectStorageResource()
    console.log(res, 'res')
    optionsStorage = res.data?.storageResources.map((item) => {
      return {
        label: item.storageName,
        value: item.storageId
      }
    })
    allSchemas.formSchema[1].componentProps.options = [...optionsStorage]
  }
  storageOption()
  console.log(allSchemas.formSchema[1].componentProps, 'allSchemas')
}

// 添加客户端
const formSubmit = () => {
  unref(addForm)
    ?.getElFormRef()
    ?.validate((valid) => {
      //formModel 表单绑定对应值
      let { formModel } = addForm.value
      console.log(formModel, '123', addForm.value)
      if (valid) {
        console.log('submit success')
        const data = {}
        Object.assign(data, formModel, { gatewayId: selectGateWay.value.gatewayId, id: '0' })
        createNfsAcl(data).then((res) => {
          ElMessage.success(t('common.resSuccess'))
          addClientFlag.value = false
        })
        // case btn.value => 对应api
      } else {
        console.log('submit fail')
      }
    })
}

//移除客户端

const handleDelete = (index: number, row: any) => {
  // selectGateWay.value.gatewayId
  ElMessageBox.confirm(t('common.delMessage'), t('common.delWarning'), {
    confirmButtonText: t('common.delOk'),
    cancelButtonText: t('common.delCancel'),
    type: 'warning'
  }).then(() => {
    loading.value = true
    removeNfsAcl({ aclId: row.id, gatewayId: selectGateWay.value.gatewayId }).then((res) => {
      // refresh
      ElMessage.success(t('common.resSuccess'))
      listNfsAcl({ gatewayId: selectGateWay.value.gatewayId })
        .then((res) => {
          gateWayClient.value = res.data.NfsAclList
        })
        .finally(() => {
          loading.value = false
        })
    })
  })
}
const scehema = ref<cascadeDropdownSchema[]>([
  {
    label: 'NFS共享',
    command: () => {},
    children: [
      {
        label: '添加客户端',
        command: async (tagItem) => {
          selectGateWay.value = tagItem.row
          const res = await listNfsAcl({ gatewayId: tagItem.row.gatewayId })
          nextTick(() => {
            gateWayClient.value = res.data.NfsAclList
            // renderAddForm
            addClientFlag.value = true
          })
        }
      },
      {
        divided: true,
        label: '移除客户端',
        command: async (tagItem) => {
          selectGateWay.value = tagItem.row
          const res = await listNfsAcl({ gatewayId: tagItem.row.gatewayId })
          nextTick(() => {
            gateWayClient.value = res.data.NfsAclList
            // renderAddForm
            removeClientFlag.value = true
          })
        }
      }
    ]
  },
  {
    label: '删除网关',
    command: (tagItem) => {
      const { getList } = restful?.value
      ElMessageBox.confirm(t('common.delMessage'), t('common.delWarning'), {
        confirmButtonText: t('common.delOk'),
        cancelButtonText: t('common.delCancel'),
        type: 'warning'
      }).then(() => {
        removeNFSGateway({ gatewayId: tagItem.row.gatewayId }).then(() => {
          ElMessage.success(t('common.delSuccess'))
          getList()
        })
      })
    }
  }
  // {
  //   label: '关闭左侧标签',
  //   disabled: true,
  //   command: () => {}
  // }
])
</script>

<template>
  <ContentWrap :title="t(titleInfo.title)" :message="titleInfo.message">
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
      dialogWidth="50%"
      :dialog="true"
      hideBtnAdd
      hideBtnDelAll
      hideBtnDetailItem
      hideBtnEditItem
      hideBtnDelItem
    >
      <template #actionSearch>
        <ElButton type="primary" @click="openCreate">新增</ElButton>
      </template>
      <template #action-item="row">
        <CascadeDropdown :schema="scehema" :tagItem="row" type="primary">操作</CascadeDropdown>
      </template>
    </RestfulList>
  </ContentWrap>
  <Dialog v-model="createFlag" title="创建网关">
    <ContentWrap>
      <Write ref="writeRef" :form-schema="allSchemas.formSchema" />
    </ContentWrap>
    <template #footer>
      <ElButton type="primary" @click="save">
        {{ t('exampleDemo.save') }}
      </ElButton>
      <ElButton @click="createFlag = false">{{ t('dialogDemo.close') }}</ElButton>
    </template>
  </Dialog>

  <Dialog v-model="addClientFlag" title="添加客户端" width="40%" :max-height="400">
    <Form ref="addForm" :schema="renderAddForm" />
    <ContentWrap title="已分配">
      <ElTable :data="gateWayClient" max-height="600">
        <ElTableColumn label="hostname" prop="hostname" />
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
    <ElTable :data="gateWayClient" max-height="600" v-loading="loading">
      <ElTableColumn label="hostname" prop="hostname" />
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
</template>
