import { useI18n } from '@/hooks/web/useI18n'
const { t } = useI18n()

export const nameCode = 'Restful' // 请不要修改

export const getRoutes = (parentPath: string) => {
  const title = t(`rest.${nameCode}`)
  return [
    {
      path: 'restful-list',
      component: () => import('@/views/MyDemos/Restful/RestfulList.vue'),
      name: `${nameCode}List`,
      meta: {
        title
      },
      props: {
        nameCode
      }
    },
    {
      path: 'restful-list/restful-edit',
      component: () => import('@/views/MyDemos/Restful/RestfulEdit.vue'),
      name: `${nameCode}Edit`,
      meta: {
        title,
        noTagsView: true,
        noCache: true,
        hidden: true,
        canTo: true,
        activeMenu: `${parentPath}/restful-list`
      },
      props: {
        editable: true,
        nameCode
      }
    },
    {
      path: 'restful-list/restful-add',
      component: () => import('@/views/MyDemos/Restful/RestfulEdit.vue'),
      name: `${nameCode}Add`,
      meta: {
        title,
        noTagsView: true,
        noCache: true,
        hidden: true,
        canTo: true,
        activeMenu: `${parentPath}/restful-list`
      },
      props: {
        editable: true,
        nameCode
      }
    },
    {
      path: 'restful-list/restful-detail',
      component: () => import('@/views/MyDemos/Restful/RestfulEdit.vue'),
      name: `${nameCode}Detail`,
      meta: {
        title,
        noTagsView: true,
        noCache: true,
        hidden: true,
        canTo: true,
        activeMenu: `${parentPath}/restful-list`
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
