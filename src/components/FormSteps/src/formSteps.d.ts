import type { CSSProperties } from 'vue'

declare global {
  declare type FormStepsSchema = {
    // 标题
    title?: string
    // 描述文案
    description?: string
    // 图标
    icon?: ColProps
    // 设置当前步骤的状态
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success'
    // formItem组件属性
    formSchema?: FormSchema[]
    // 宽度
    width?: string
  }
}
