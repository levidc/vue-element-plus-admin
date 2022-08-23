import { useAxios } from '@/hooks/web/useAxios'
const request = useAxios()

export const checkRedisStatus = async (): Promise<IResponse> => {
  const res = await request.get({
    url: '/fs/listObjectStorageResource'
  })
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
  return { code: '0', data: { ...res, total: res.data.length } }
}

export const addObjectStorageResource = async (data: any) => {
  const res = await request.post({
    url: 'api/fs/addObjectStorageResource',
    data
  })
  return res
}
