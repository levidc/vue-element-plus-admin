declare type cascadeDropdownSchema = {
  disabled?: boolean
  divided?: boolean
  icon?: string
  label: string
  command?: (item: cascadeDropdownSchema) => viod
  children?: cascadeDropdownSchema[]
}
