import { useI18n } from '@/hooks/web/useI18n'
const { t } = useI18n()

export const nameCode = 'ObjectResource' // 请不要修改

export const getRoutes = (parentPath: string) => {
  const title = t(`rest.${nameCode}`)
  return [
    {
      path: `${nameCode}`,
      component: () => import('@/views/ResourceManagement/ObjectResource/ObjectResourceList.vue'),
      name: `${nameCode}List`,
      meta: {
        title,
        noCache: true
      },
      props: {
        nameCode
      }
    },
    {
      path: `${nameCode}Edit`,
      component: () => import('@/views/ResourceManagement/ObjectResource/ObjectResourceEdit.vue'),
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
      component: () => import('@/views/ResourceManagement/ObjectResource/ObjectResourceEdit.vue'),
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
      component: () => import('@/views/ResourceManagement/ObjectResource/ObjectResourceEdit.vue'),
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

export const titleInfo = {
  title: t(`rest.${nameCode}`),
  message: t(`rest.${nameCode}Des`) != `rest.${nameCode}Des` ? t(`rest.${nameCode}Des`) : ''
}
