import type { AppRouteModule } from '@/router/types'

import { LAYOUT } from '@/router/constant'

const about: AppRouteModule = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  meta: {
    title: 'about',
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('@/views/about/index.vue'),
      meta: {
        title: 'about',
      },
    },
  ],
}

export default about
