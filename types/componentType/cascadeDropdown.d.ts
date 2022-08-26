declare type cascadeDropdownSchema = {
[x: string]: any
  disabled?: boolean
  divided?: boolean
  icon?: string
  label: string
  command?: (item: cascadeDropdownSchema) => viod
  children?: cascadeDropdownSchema[]
}
