import type { AppRouteModule } from '@/router/types'

const about: AppRouteModule = {
  path: '/about',
  name: 'AboutPage',
  component: () => import('@/views/about/index.vue'),
  meta: {
    title: 'about',
  },
}

export default about
