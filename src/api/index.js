import req from '@/utils/req'

export function apiHome (par) {
  return req({
    url: 'sso/authentication/genUUID.do',
    method: 'get',
    data: par
  })
}


