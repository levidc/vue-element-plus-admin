export type PermissionCheck = {
  checkAll: boolean
  isIndeterminate: boolean
  checkVal: string[]
}

export type PermissionItem = {
  [key: number]: any
}

export type PermissionGroup = PermissionItem & {
  children: PermissionItem[]
}
