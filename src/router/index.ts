import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { Layout, getParentLayout } from '@/utils/routerHelper'
import { useI18n } from '@/hooks/web/useI18n'

// import { getRoutes as getRestfulRoutes } from '@/views/MyDemos/Restful/routes'
import { getRoutes as ObjectResourceRoute } from '@/views/ResourceManagement/ObjectResource/routes'
import { getRoutes as NFSRoute } from '@/views/storageManagement/NFS/routes'
import { getRoutes as BucketRouter } from '@/views/storageManagement/Bucket/routes'
const { t } = useI18n()

const demoRouterMap: AppRouteRecordRaw[] = [
  // {
  //   path: '/my-demos',
  //   component: Layout,
  //   redirect: '/mydemos/permission-config',
  //   name: 'MyDemos',
  //   meta: {
  //     title: '示例',
  //     icon: 'ant-design:thunderbolt-filled',
  //     alwaysShow: true
  //   },
  //   children: [
  //     {
  //       path: 'permission-config',
  //       component: () => import('@/views/MyDemos/PermissionConfig.vue'),
  //       name: 'PermissionCfg',
  //       meta: {
  //         title: '权限配置',
  //         noCache: true
  //       }
  //     },
  //     ...getRestfulRoutes('/my-demos')
  //   ]
  // }
]

export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/resourceManagement/ObjectResource',
    name: 'Root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'Redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  },
  ...demoRouterMap
]

export const asyncRouterMap: AppRouteRecordRaw[] = [
  // {
  //   path: '/dashboard',
  //   component: Layout,
  //   redirect: '/dashboard/analysis',
  //   name: 'Dashboard',
  //   meta: {
  //     title: t('router.dashboard'),
  //     icon: 'ant-design:dashboard-filled',
  //     alwaysShow: true
  //   },
  //   children: [
  //     {
  //       path: 'analysis',
  //       component: () => import('@/views/Dashboard/Analysis.vue'),
  //       name: 'Analysis',
  //       meta: {
  //         title: t('router.analysis'),
  //         noCache: true,
  //         affix: true
  //       }
  //     },
  //     {
  //       path: 'workplace',
  //       component: () => import('@/views/Dashboard/Workplace.vue'),
  //       name: 'Workplace',
  //       meta: {
  //         title: t('router.workplace'),
  //         noCache: true
  //       }
  //     }
  //   ]
  // },
  {
    path: '/resourceManagement',
    component: Layout,
    name: 'resourceManagement',
    redirect: '/resourceManagement/ObjectResource',
    meta: {
      title: t('router.resourceManagement'),
      icon: 'ant-design:ie-square-filled',
      alwaysShow: true
    },
    children: [
      // {
      //   path: 'externalStorage',
      //   name: 'externalStorage',
      //   component: () => import('@/views/ResourceManagement/externalStorage.vue'),
      //   meta: {
      //     title: t('externalStorage.title'),
      //     noCache: true
      //   }
      // },
      // {
      //   path: 'objectResourece',
      //   name: 'objectResourece',
      //   component: () => import('@/views/ResourceManagement/externalStorage.vue'),
      //   meta: {
      //     title: '对象存储',
      //     noCache: true
      //   }
      // },
      ...ObjectResourceRoute('/resourceManagement')
    ]
  },
  {
    path: '/storageManagement',
    component: Layout,
    name: '/storageManagement',
    meta: {
      title: t('router.storageManagement'),
      icon: 'ant-design:dingtalk-square-filled',
      alwaysShow: true
    },
    children: [
      ...NFSRoute('/storageManagement'),
      ...BucketRouter('/storageManagement')
      // {
      //   path: 'bucket',
      //   name: 'bucket',
      //   component: () => import('@/views/storageManagement/bucket/index.vue'),
      //   meta: {
      //     title: '存储桶',
      //     noCache: true
      //   }
      // }
      // {
      //   path: 'NFS1',
      //   name: 'NFS',
      //   component: () => import('@/views/storageManagement/NFS/index.vue'),
      //   meta: {
      //     title: t('StorageManager.NFS'),
      //     noCache: true
      //   }
      // }
    ]
  },
  {
    path: '/external-link',
    component: Layout,
    meta: {
      hidden: true
    },
    name: 'ExternalLink',
    children: [
      {
        path: 'https://element-plus-admin-doc.cn/',
        name: 'DocumentLink',
        meta: {
          title: t('router.document'),
          icon: 'clarity:document-solid'
        }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    name: 'Guide',
    meta: {
      hidden: true
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/Guide/Guide.vue'),
        name: 'GuideDemo',
        meta: {
          title: t('router.guide'),
          icon: 'cib:telegram-plane'
        }
      }
    ]
  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/icon',
    name: 'ComponentsDemo',
    meta: {
      title: t('router.component'),
      icon: 'bx:bxs-component',
      alwaysShow: true,
      hidden: true
    },
    children: [
      {
        path: 'form',
        component: getParentLayout(),
        name: 'Form',
        meta: {
          title: t('router.form'),
          alwaysShow: true
        },
        children: [
          {
            path: 'default-form',
            component: () => import('@/views/Components/Form/DefaultForm.vue'),
            name: 'DefaultForm',
            meta: {
              title: t('router.defaultForm')
            }
          },
          {
            path: 'use-form',
            component: () => import('@/views/Components/Form/UseFormDemo.vue'),
            name: 'UseForm',
            meta: {
              title: 'UseForm'
            }
          },
          {
            path: 'ref-form',
            component: () => import('@/views/Components/Form/RefForm.vue'),
            name: 'RefForm',
            meta: {
              title: 'RefForm'
            }
          }
        ]
      },
      {
        path: 'table',
        component: getParentLayout(),
        name: 'TableDemo',
        meta: {
          title: t('router.table'),
          alwaysShow: true
        },
        children: [
          {
            path: 'default-table',
            component: () => import('@/views/Components/Table/DefaultTable.vue'),
            name: 'DefaultTable',
            meta: {
              title: t('router.defaultTable')
            }
          },
          {
            path: 'use-table',
            component: () => import('@/views/Components/Table/UseTableDemo.vue'),
            name: 'UseTable',
            meta: {
              title: 'UseTable'
            }
          },
          {
            path: 'ref-table',
            component: () => import('@/views/Components/Table/RefTable.vue'),
            name: 'RefTable',
            meta: {
              title: 'RefTable'
            }
          }
        ]
      },
      {
        path: 'editor-demo',
        component: getParentLayout(),
        name: 'EditorDemo',
        meta: {
          title: t('router.editor'),
          alwaysShow: true
        },
        children: [
          {
            path: 'editor',
            component: () => import('@/views/Components/Editor/Editor.vue'),
            name: 'Editor',
            meta: {
              title: t('router.richText')
            }
          }
        ]
      },
      {
        path: 'search',
        component: () => import('@/views/Components/Search.vue'),
        name: 'Search',
        meta: {
          title: t('router.search')
        }
      },
      {
        path: 'descriptions',
        component: () => import('@/views/Components/Descriptions.vue'),
        name: 'Descriptions',
        meta: {
          title: t('router.descriptions')
        }
      },
      {
        path: 'image-viewer',
        component: () => import('@/views/Components/ImageViewer.vue'),
        name: 'ImageViewer',
        meta: {
          title: t('router.imageViewer')
        }
      },
      {
        path: 'dialog',
        component: () => import('@/views/Components/Dialog.vue'),
        name: 'Dialog',
        meta: {
          title: t('router.dialog')
        }
      },
      {
        path: 'icon',
        component: () => import('@/views/Components/Icon.vue'),
        name: 'Icon',
        meta: {
          title: t('router.icon')
        }
      },
      {
        path: 'echart',
        component: () => import('@/views/Components/Echart.vue'),
        name: 'Echart',
        meta: {
          title: t('router.echart')
        }
      },
      {
        path: 'count-to',
        component: () => import('@/views/Components/CountTo.vue'),
        name: 'CountTo',
        meta: {
          title: t('router.countTo')
        }
      },
      {
        path: 'qrcode',
        component: () => import('@/views/Components/Qrcode.vue'),
        name: 'Qrcode',
        meta: {
          title: t('router.qrcode')
        }
      },
      {
        path: 'highlight',
        component: () => import('@/views/Components/Highlight.vue'),
        name: 'Highlight',
        meta: {
          title: t('router.highlight')
        }
      },
      {
        path: 'infotip',
        component: () => import('@/views/Components/Infotip.vue'),
        name: 'Infotip',
        meta: {
          title: t('router.infotip')
        }
      },
      {
        path: 'input-password',
        component: () => import('@/views/Components/InputPassword.vue'),
        name: 'InputPassword',
        meta: {
          title: t('router.inputPassword')
        }
      },
      {
        path: 'sticky',
        component: () => import('@/views/Components/Sticky.vue'),
        name: 'Sticky',
        meta: {
          title: t('router.sticky')
        }
      }
    ]
  },
  {
    path: '/hooks',
    component: Layout,
    redirect: '/hooks/useWatermark',
    name: 'Hooks',
    meta: {
      title: t('router.component'),
      icon: 'ic:outline-webhook',
      alwaysShow: false,
      hidden: true
    },
    children: [
      {
        path: 'useWatermark',
        component: () => import('@/views/hooks/useWatermark.vue'),
        name: 'UseWatermark',
        meta: {
          title: 'useWatermark'
        }
      }
    ]
  },
  {
    path: '/level',
    component: Layout,
    redirect: '/level/menu1/menu1-1/menu1-1-1',
    name: 'Level',
    meta: {
      title: t('router.level'),
      icon: 'carbon:skill-level-advanced',
      hidden: true
    },
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        component: getParentLayout(),
        redirect: '/level/menu1/menu1-1/menu1-1-1',
        meta: {
          title: t('router.menu1')
        },
        children: [
          {
            path: 'menu1-1',
            name: 'Menu11',
            component: getParentLayout(),
            redirect: '/level/menu1/menu1-1/menu1-1-1',
            meta: {
              title: t('router.menu11'),
              alwaysShow: true
            },
            children: [
              {
                path: 'menu1-1-1',
                name: 'Menu111',
                component: () => import('@/views/Level/Menu111.vue'),
                meta: {
                  title: t('router.menu111')
                }
              }
            ]
          },
          {
            path: 'menu1-2',
            name: 'Menu12',
            component: () => import('@/views/Level/Menu12.vue'),
            meta: {
              title: t('router.menu12')
            }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: () => import('@/views/Level/Menu2.vue'),
        meta: {
          title: t('router.menu2')
        }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/example-dialog',
    name: 'Example',
    meta: {
      title: t('router.example'),
      icon: 'ep:management',
      alwaysShow: true,
      hidden: true
    },
    children: [
      {
        path: 'example-dialog',
        component: () => import('@/views/Example/Dialog/ExampleDialog.vue'),
        name: 'ExampleDialog',
        meta: {
          title: t('router.exampleDialog')
        }
      },
      {
        path: 'example-page',
        component: () => import('@/views/Example/Page/ExamplePage.vue'),
        name: 'ExamplePage',
        meta: {
          title: t('router.examplePage')
        }
      },
      {
        path: 'example-add',
        component: () => import('@/views/Example/Page/ExampleAdd.vue'),
        name: 'ExampleAdd',
        meta: {
          title: t('router.exampleAdd'),
          noTagsView: true,
          noCache: true,
          hidden: true,
          showMainRoute: true,
          activeMenu: '/example/example-page'
        }
      },
      {
        path: 'example-edit',
        component: () => import('@/views/Example/Page/ExampleEdit.vue'),
        name: 'ExampleEdit',
        meta: {
          title: t('router.exampleEdit'),
          noTagsView: true,
          noCache: true,
          hidden: true,
          showMainRoute: true,
          activeMenu: '/example/example-page'
        }
      },
      {
        path: 'example-detail',
        component: () => import('@/views/Example/Page/ExampleDetail.vue'),
        name: 'ExampleDetail',
        meta: {
          title: t('router.exampleDetail'),
          noTagsView: true,
          noCache: true,
          hidden: true,
          showMainRoute: true,
          activeMenu: '/example/example-page'
        }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: '/error/404',
    name: 'Error',
    meta: {
      title: t('router.errorPage'),
      icon: 'ci:error',
      alwaysShow: true,
      hidden: true
    },
    children: [
      {
        path: '404-demo',
        component: () => import('@/views/Error/404.vue'),
        name: '404Demo',
        meta: {
          title: '404'
        }
      },
      {
        path: '403-demo',
        component: () => import('@/views/Error/403.vue'),
        name: '403Demo',
        meta: {
          title: '403'
        }
      },
      {
        path: '500-demo',
        component: () => import('@/views/Error/500.vue'),
        name: '500Demo',
        meta: {
          title: '500'
        }
      }
    ]
  }
  // {
  //   path: '/authorization',
  //   component: Layout,
  //   redirect: '/authorization/user',
  //   name: 'Authorization',
  //   meta: {
  //     title: t('router.authorization'),
  //     icon: 'eos-icons:role-binding',
  //     alwaysShow: true
  //   },
  //   children: [
  //     {
  //       path: 'user',
  //       component: () => import('@/views/Authorization/User.vue'),
  //       name: 'User',
  //       meta: {
  //         title: t('router.user')
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/Authorization/Role.vue'),
  //       name: 'Role',
  //       meta: {
  //         title: t('router.role')
  //       }
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = (): void => {
  const resetWhiteNameList = ['Redirect', 'Login', 'NoFind', 'Root']
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
