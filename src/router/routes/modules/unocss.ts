import type { AppRouteModule } from '@/router/types'

const about: AppRouteModule = {
  path: '/unocss/type',
  name: 'Unocss',
  component: () => import('@/views/unocss/type.vue'),
  meta: {
    title: 'unocss',
  },
}

export default about
