import { useAxios } from '@/hooks/web/useAxios'
const request = useAxios()

export const mockNFS = async (): Promise<IResponse> => {
  const res = await request.get({
    url: 'api/fs/listObjectStorageResource'
  })
  return {
    code: '0',
    data: {
      data: res.data.storageResources,
      total: res.data.storageResources.length
    }
  }
}

export const getOption = async (): Promise<IResponse> => {
  const res = await request.get({
    url: 'api/posts/1/comments'
  })
  res.data = [
    {
      label: '123',
      value: 123
    },
    {
      label: '312',
      value: 312
    }
  ]
  return res.data
}
