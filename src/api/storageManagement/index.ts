import { useAxios } from '@/hooks/web/useAxios'
const request = useAxios()

export const mockNFS = async (): Promise<IResponse> => {
  const res = await request.get({
    url: 'api/posts/1/comments'
  })
  res.data.forEach((item, i) => {
    item.ipPort = parseFloat(Math.random().toFixed(2))
    item.clientCount = Math.pow(10, i)
    item.applyBucketCount = Math.log10(Math.pow(10, i))
    item.updateTime = new Date().getTime() + 1000 * i
  })
  return { code: '0', data: { ...res, total: res.data.length } }
}
