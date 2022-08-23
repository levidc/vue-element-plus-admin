import { useTable } from '@/hooks/web/useTable'
import { FormProps } from '@/components/Form/src/types'

type UseTableConfig<T> = Parameters<typeof useTable<T>>[0]

type DescriptionsProps = {
  title?: String
  message?: String
  collapse?: Boolean
  border?: Boolean
  column?: Number
  direction?: String
  size?: String
  extra?: String
  schema?: DescriptionsSchema[]
} & Recordable

declare global {
  declare type RestfulOrder = { orderField?: string; orderType?: 'asc' | 'desc' }

  declare type UseTableConfigX<T = any> = UseTableConfig<T> & {
    idCol: string
    getApi: (id: string) => Promise<IResponse<T>>
    saveApi: (data: Partial<T>) => Promise<IResponse<T>>
    response: {
      get?: string
    }
    use?: {
      virtualPage?: boolean
      virtualPageDelay?: number
      autoRefresh?: boolean
      autoRefreshDelay?: number
    }
    formProps?: FormProps
    descProps?: DescriptionsProps
  }
}
