import { useAxios } from '@/hooks/web/useAxios'
const request = useAxios()

export const checkRedisStatus = async (): Promise<IResponse> => {
  const res = await request.get({
    url: 'api/posts'
  })
  console.log(res)

  return { code: '0', data: { ...res, total: res.data.length } }
}

export const checkTikvStatus = async (): Promise<IResponse> => {
  const res = await request.get({
    url: 'api/users'
  })
  console.log(res, '123')
  return { code: '0', data: { ...res, total: res.data.length } }
}
