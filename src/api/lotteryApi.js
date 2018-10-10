import request from '@/utils/request'
import qs from 'qs'

export function setinfo(data) {
  return request({
    url: `/lottery/user/setinfo`,
    method: 'get',
    data: qs.stringify(data)
  })
}
