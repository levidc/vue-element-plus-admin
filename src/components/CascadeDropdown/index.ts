import CascadeDropdown from './src/CascadeDropdown.vue'
import { ElDropdown } from 'element-plus'

export interface CascadeDropdownExpose {
  elDropdownMenuRef: ComponentRef<typeof ElDropdown>
  tagItem: Recordable
}

export { CascadeDropdown }
