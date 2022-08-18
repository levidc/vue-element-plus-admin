<script setup lang="tsx">
import { useDesign } from '@/hooks/web/useDesign'
import { ElMenu, ElMenuItem, ElSubMenu, ElButton, ElDivider } from 'element-plus'
import { computed, nextTick, PropType, ref, useSlots } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { propTypes } from '@/utils/propTypes'
import { Icon } from '@/components/Icon'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('CascadeDropdown')

const { t } = useI18n()

const props = defineProps({
  schema: {
    type: Array as PropType<cascadeDropdownSchema[]>,
    default: () => []
  },
  trigger: {
    type: String as PropType<'click' | 'hover'>,
    default: 'hover'
  },
  tagItem: {
    type: Object as PropType<Recordable>,
    default: () => ({})
  },
  type: String as PropType<typeof ElButton['type']>,
  size: {
    type: String as PropType<typeof ElButton['size']>,
    default: 'default'
  },
  plain: propTypes.bool.def(false),
  round: propTypes.bool.def(false),
  circle: propTypes.bool.def(false),
  text: propTypes.bool.def(false),
  disabled: propTypes.bool.def(false)
})

const emit = defineEmits<{
  (e: 'select', index: string, tagItem: typeof props.tagItem): void
  (e: 'visibleChange', index: string, visible: boolean, tagItem: typeof props.tagItem): void
}>()

const slots = useSlots()

const active = ref('')

const handleSelect = (index: string) => {
  active.value = index
  if (slots.dropdown) {
    emit('select', index, props.tagItem)
  } else {
    const indexPath = index.split('-')
    const item = indexPath.reduce((prev, idx) => (prev && prev.children[idx]) || null, {
      children: props.schema
    })
    item && item.command && item.command(props.tagItem, index, item)
  }
  nextTick(() => (active.value = ''))
}

const elMenuRef = ref<ComponentRef<typeof ElMenu>>()

defineExpose({
  elMenuRef,
  tagItem: props.tagItem
})

const createMenu = (schema: cascadeDropdownSchema[], perfix = '') => {
  const hasIcon = (schema || []).some((it) => it.icon)
  return (
    <>
      {schema.map((item, idx) => {
        return (
          <>
            {item.divided ? <ElDivider /> : ''}
            {!item.children ? (
              <ElMenuItem index={(perfix ? perfix + '-' : '') + idx} disabled={item.disabled}>
                <span>
                  {hasIcon ? (
                    <Icon icon={item.icon || ''} size={`var(--${prefixCls}-menu-fontsize)`} />
                  ) : (
                    ''
                  )}
                  {t(item.label)}
                </span>
              </ElMenuItem>
            ) : (
              <ElSubMenu index={(perfix ? perfix + '-' : '') + idx} disabled={item.disabled}>
                {{
                  title: () => (
                    <span>
                      {hasIcon ? (
                        <Icon icon={item.icon || ''} size={`var(--${prefixCls}-menu-fontsize)`} />
                      ) : (
                        ''
                      )}
                      {t(item.label)}
                    </span>
                  ),
                  default: () => createMenu(item.children || [], (perfix ? perfix + '-' : '') + idx)
                }}
              </ElSubMenu>
            )}
          </>
        )
      })}
    </>
  )
}

const MenuList = () => {
  return createMenu(props.schema)
}

const visibleChange = (index: string, visible: boolean) => {
  emit('visibleChange', index, visible, props.tagItem)
}

const handleOpen = (index: string) => visibleChange(index, true)
const handleClose = (index: string) => visibleChange(index, false)

const subMenuTitlePadding = computed(() => (props.circle ? '0 9px' : '0 15px'))
const subMenuTitleIconMarginLeft = computed(() => (props.circle && !slots.default ? '0' : '8px'))
</script>

<template>
  <ElButton
    :class="[prefixCls, 'btn']"
    :style="{ pointerEvents: disabled ? 'none' : 'auto' }"
    :type="type"
    :disabled="disabled"
    :plain="plain"
    :round="round"
    :circle="circle"
    :text="text"
    :size="size"
  >
    <ElMenu
      :style="{ margin: text ? undefined : '0 -1px' }"
      class="w-full h-full"
      ref="elMenuRef"
      mode="horizontal"
      :menu-trigger="trigger"
      :ellipsis="false"
      :default-active="active"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
    >
      <ElSubMenu index="menu" :popper-class="prefixCls + '-base ' + prefixCls + '-' + size">
        <template #title>
          <slot></slot>
        </template>
        <slot name="dropdown">
          <MenuList />
        </slot>
      </ElSubMenu>
    </ElMenu>
  </ElButton>
</template>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-CascadeDropdown';

.@{prefix-cls} {
  padding: 0;
  align-items: stretch;

  :deep(.el-menu) {
    height: 100%;
    background-color: initial !important;

    .el-sub-menu {
      height: 100%;
      border-right: 0;
      .el-sub-menu__title {
        height: 100%;
        line-height: 100%;
        padding: v-bind(subMenuTitlePadding);
        color: inherit;
        border-bottom: 0;
        cursor: inherit;
        .el-icon {
          font-size: var(--el-font-size-base);
          margin-top: 0;
          margin-left: v-bind(subMenuTitleIconMarginLeft);
          svg {
            vertical-align: middle;
          }
        }
      }

      .el-sub-menu__title:hover {
        background-color: inherit;
      }
    }
  }

  :deep(.el-menu--horizontal) {
    border-bottom: none;
    border-right: none;
  }
}
</style>

<style lang="less">
@prefix-cls: ~'@{namespace}-CascadeDropdown';

.@{prefix-cls}-base {
  --el-menu-base-level-padding: 8px;
  .el-menu--popup {
    min-width: 100px;
    .el-menu-item,
    .el-sub-menu__title {
      overflow: hidden;
      padding-right: 30px;
      min-width: 100px;
      font-size: var(--CascadeDropdown-menu-fontsize);
      height: var(--CascadeDropdown-menu-height) !important;
    }
    .el-sub-menu__icon-arrow {
      font-size: var(--CascadeDropdown-menu-fontsize);
    }
    .el-divider--horizontal {
      margin: 5px 0;
    }
  }
}

.@{prefix-cls}-small {
  --CascadeDropdown-menu-fontsize: var(--el-font-size-small);
  --CascadeDropdown-menu-height: 24px;
}
.@{prefix-cls}-default {
  --CascadeDropdown-menu-fontsize: var(--el-font-size-base);
  --CascadeDropdown-menu-height: 32px;
}
.@{prefix-cls}-large {
  --CascadeDropdown-menu-fontsize: var(--el-font-size-medium);
  --CascadeDropdown-menu-height: 40px;
}
</style>
