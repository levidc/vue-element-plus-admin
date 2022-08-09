import { useI18n } from '@/hooks/web/useI18n'
const { t } = useI18n()

export const nameCode = 'Test' // 请不要修改

export const getRoutes = (parentPath: string) => {
  const title = t(`rest.${nameCode}`)
  return [
    {
      path: `${nameCode}`,
      component: () => import('@/views/Test/TestList.vue'),
      name: `${nameCode}List`,
      meta: {
        title
      },
      props: {
        nameCode
      }
    },
    {
      path: `${nameCode}Edit`,
      component: () => import('@/views/Test/TestEdit.vue'),
      name: `${nameCode}Edit`,
      meta: {
        title,
        noTagsView: true,
        noCache: true,
        hidden: true,
        showMainRoute: true,
        activeMenu: `${parentPath}/${nameCode}`
      },
      props: {
        editable: true,
        nameCode
      }
    },
    {
      path: `${nameCode}Add`,
      component: () => import('@/views/Test/TestEdit.vue'),
      name: `${nameCode}Add`,
      meta: {
        title,
        noTagsView: true,
        noCache: true,
        hidden: true,
        showMainRoute: true,
        activeMenu: `${parentPath}/${nameCode}`
      },
      props: {
        editable: true,
        nameCode
      }
    },
    {
      path: `${nameCode}Detail`,
      component: () => import('@/views/Test/TestEdit.vue'),
      name: `${nameCode}Detail`,
      meta: {
        title,
        noTagsView: true,
        noCache: true,
        hidden: true,
        showMainRoute: true,
        activeMenu: `${parentPath}/${nameCode}`
      },
      props: {
        nameCode
      }
    }
  ]
}
