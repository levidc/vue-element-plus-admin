<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { RestfulList } from '@/components/RestfulPage'
import { ElButton } from 'element-plus'
import { Dialog } from '@/components/Dialog'
import { useI18n } from '@/hooks/web/useI18n'
import { propTypes } from '@/utils/propTypes'
import { allSchemas, rules, config } from './config'
import { updateObjectStorageResource } from '@/api/fs/ObjectStorage'
import { nameCode as baseNameCode, titleInfo } from './routes'
import Write from './nasForm.vue'
import { ref, unref } from 'vue'
import { ElMessage } from 'element-plus'
const { t } = useI18n()

defineOptions({
  name: `${baseNameCode}List`
})

const props = defineProps({
  nameCode: propTypes.string.isRequired
})
// Boolean
const createFlag = ref(false)

const restful = ref()

// ref
let selectedRow = ref({})

const writeRef = ref()

const save = () => {
  const { getFormData } = writeRef?.value
  const { getList } = restful?.value
  unref(writeRef?.value?.elFormRef)!.validate(async (isValid) => {
    console.log(isValid)
    if (isValid) {
      let data = await getFormData()
      // 获取表单model值
      Object.assign({ ...selectedRow.value }, data)
      console.log('save', data)
      updateObjectStorageResource(data).then(() => {
        createFlag.value = false
        ElMessage.success(t('common.resSuccess'))
        getList()
      })
      console.log('createNAs')
    }
  })
}

// 添加修改form 表单项禁用
// const modForm = computed(() => {
//   const formSchema = JSON.parse(JSON.stringify(allSchemas.formSchema))
//   formSchema[0].componentProps.disabled = true
//   return formSchema
// })
// allSchemas.formSchema[0]?.componentProps?.disabled =
console.log('allSchemas.formSchema', allSchemas.formSchema)

const getName = (row: {}) => {
  createFlag.value = true
  selectedRow.value = { ...row }
}
</script>

<template>
  <ContentWrap :title="t(titleInfo.title)">
    <RestfulList
      ref="restful"
      id-col="storageId"
      modProperty="storageResource"
      :name-code="props.nameCode"
      :config="config"
      :search-schema="allSchemas.searchSchema"
      :table-columns="allSchemas.tableColumns"
      :form-schema="allSchemas.formSchema"
      :detail-schema="allSchemas.detailSchema"
      :rules="rules"
      :dialog="true"
      hideBtnDelAll
      hideBtnEditItem
      hideBtnDetailItem
      hideBtnEditItemloadingOption
      :selection="false"
    >
      <template #action-item="{ row }">
        <ElButton type="primary" @click="getName(row)">修改</ElButton>
      </template>
    </RestfulList>
  </ContentWrap>

  <Dialog v-if="createFlag" v-model="createFlag" title="修改对象存储资源" :max-height="300">
    <ContentWrap>
      <Write ref="writeRef" :form-schema="allSchemas.formSchema" :currentRow="selectedRow" />
    </ContentWrap>
    <template #footer>
      <ElButton type="primary" @click="save">
        {{ t('exampleDemo.save') }}
      </ElButton>
      <ElButton @click="createFlag = false">{{ t('dialogDemo.close') }}</ElButton>
    </template>
  </Dialog>
</template>
