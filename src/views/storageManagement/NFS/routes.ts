import { useI18n } from '@/hooks/web/useI18n'
const { t } = useI18n()

export const nameCode = 'NFS' // 请不要修改

export const getRoutes = (parentPath: string) => {
  const title = t(`rest.${nameCode}`)
  return [
    {
      path: `${nameCode}`,
      component: () => import('@/views/storageManagement/NFS/NFSList.vue'),
      name: `${nameCode}List`,
      meta: {
        title,
        noCache: true
      },
      props: {
        nameCode
      }
    }
  ]
}

export const titleInfo = {
  title: t(`rest.${nameCode}`),
  message: t(`rest.${nameCode}Des`) != `rest.${nameCode}Des` ? t(`rest.${nameCode}Des`) : ''
}
