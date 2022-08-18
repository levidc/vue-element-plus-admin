import { useAxios } from '@/hooks/web/useAxios'
const request = useAxios()

export const checkRedisStatus = async (): Promise<IResponse> => {
  const res = await request.get({
    url: 'api/fs/listObjectStorageResource'
  })
  console.log(res, 'res')

  return {
    code: '0',
    data: {
      data: res.data.storageResources,
      total: res.data.storageResources.length
    }
  }
}

export const checkTikvStatus = async (): Promise<IResponse> => {
  const res = await request.get({
    url: 'api/users'
  })
  console.log(res, '123')
  return { code: '0', data: { ...res, total: res.data.length } }
}
