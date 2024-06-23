import { resultSuccess } from '../_util'
import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/demo-test',
    timeout: 1000,
    method: 'get',
    response: () => {
      return resultSuccess({
        success: 'ok',
      })
    },
  },
] as MockMethod[]
