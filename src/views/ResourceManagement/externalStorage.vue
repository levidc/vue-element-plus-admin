<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { ElTabPane, ElTabs, ElButton } from 'element-plus'
import { ref } from 'vue'
import NAS from './components/NAS.vue'
import DBS from './components/DBS.vue'
import { Dialog } from '@/components/Dialog'
const { t } = useI18n()

const dialogVisible = ref(false)

const dialogTitle = ref('')

const save = () => {
  console.log('save')
}

const activeName = ref('NAS')

const handleClick = () => {
  console.log(activeName.value)
}

const AddAction = () => {
  if (activeName.value === 'NAS') {
    NASs.value.createFlag = true
  } else {
    DBSs.value.createFlag = true
  }
  // console.log(deleteArr, 123)
  // 判断当前tab、打开对应
}

const delData = () => {
  dialogVisible.value = true
  dialogTitle.value = t('exampleDemo.add')
  console.log('delete', dialogVisible.value, deleteArr)
}

let disabledBtn = ref(true)

type deleteArray = {
  id: number
  body: string
  name: string
}

let deleteArr = ref<deleteArray[]>([])

const handleDelete = (data) => {
  disabledBtn.value = data.length == 0
  console.log(deleteArr, 123)

  deleteArr.value = [].concat(data)
}
const NASs = ref()

const DBSs = ref()
</script>

<template>
  <ContentWrap>
    <div class="mb-10px">
      <ElButton type="primary" @click="AddAction">{{ t('common.create') }}</ElButton>
      <ElButton type="danger" @click="delData" :disabled="disabledBtn">
        {{ t('common.delete') }}
      </ElButton>
    </div>
    <ElTabs type="card" v-model="activeName" @tab-click="handleClick">
      <ElTabPane :label="t('externalStorage.NAS')" name="NAS">
        <NAS v-if="activeName === 'NAS'" @disable="handleDelete" ref="NASs" />
      </ElTabPane>
      <!-- <ElTabPane :label="t('externalStorage.DBS')" name="DBS">
        <DBS v-if="activeName === 'DBS'" @disable="handleDelete" ref="DBSs" />
      </ElTabPane> -->
    </ElTabs>
  </ContentWrap>

  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <p v-for="item in deleteArr" :key="item.id">
      {{ item.body || item.name }}
    </p>
    <template #footer>
      <ElButton type="primary" @click="save">
        {{ t('exampleDemo.save') }}
      </ElButton>
      <ElButton @click="dialogVisible = false">{{ t('dialogDemo.close') }}</ElButton>
    </template>
  </Dialog>
</template>
