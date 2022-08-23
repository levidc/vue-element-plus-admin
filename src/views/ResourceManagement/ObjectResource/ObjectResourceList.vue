<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { RestfulList } from '@/components/RestfulPage'
import { useRouter } from 'vue-router'
import { useI18n } from '@/hooks/web/useI18n'
import { propTypes } from '@/utils/propTypes'
import { Dialog } from '@/components/Dialog'
import { allSchemas, rules, config, ItemRecord } from './config'
import { addObjectStorageResource } from '@/api/fs/ObjectStorage'
import { nameCode as baseNameCode, titleInfo } from './routes'
import { ElButton } from 'element-plus'
import Write from './nasForm.vue'
import { ref, unref } from 'vue'
const { push } = useRouter()
const { t } = useI18n()

defineOptions({
  name: `${baseNameCode}List`
})

const props = defineProps({
  nameCode: propTypes.string.isRequired
})
// Boolean
const createFlag = ref(false)

console.log(props, 'props')

// ref
const writeRef = ref<ComponentRef<typeof Write>>()

const save = () => {
  const { getFormData } = writeRef?.value
  unref(writeRef?.value?.elFormRef)!.validate(async (isValid) => {
    console.log(isValid)
    if (isValid) {
      // console.log(writeRef, 'writeRef')
      let data = await getFormData()
      // 获取表单model值
      data = Object.assign(data, { storageId: 0 })
      // console.log(writeRef.value, 'save', data)
      addObjectStorageResource(data).then((res) => {
        console.log(res, 'addObjectStorageResource')
        createFlag.value = false
        // getList()
      })
      // console.log('createNAs')
    }
  })
}
const showForm = () => {
  console.log(createFlag.value, 'createFlag.value')

  createFlag.value = true
}
const onAdd = () => {
  push({ name: `${props.nameCode}Add` })
}
const onEdit = (row: ItemRecord) => {
  push({ name: `${props.nameCode}Edit`, query: { id: row.id } })
}
const onDetail = (row: ItemRecord) => {
  push({ name: `${props.nameCode}Detail`, query: { id: row.id } })
}
</script>

<template>
  <ContentWrap :title="t(titleInfo.title)" :message="titleInfo.message">
    <RestfulList
      :name-code="nameCode"
      :config="config"
      :search-schema="allSchemas.searchSchema"
      :table-columns="allSchemas.tableColumns"
      :form-schema="allSchemas.formSchema"
      :detail-schema="allSchemas.detailSchema"
      :rules="rules"
      @add="onAdd"
      @edit="onEdit"
      @detail="onDetail"
      :hideBtnAdd="true"
    >
      <template #action>
        <ElButton type="primary" @click="showForm">
          {{ t('exampleDemo.add') }}
        </ElButton>
      </template>
      <!-- 可定制列表项和扩展项样式 -->
      <template #expand="data">
        <div class="ml-30px">
          <div>{{ t('tableDemo.title') }}：{{ data.row.title }}</div>
          <div>{{ t('tableDemo.author') }}：{{ data.row.author }}</div>
          <div>{{ t('tableDemo.displayTime') }}：{{ data.row.display_time }}</div>
        </div>
      </template>
    </RestfulList>
  </ContentWrap>

  <Dialog v-model="createFlag" title="创建对象存储资源" :max-height="300">
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
</template>
