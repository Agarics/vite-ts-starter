import type { AppRouteRecordRaw } from '@/router/types'
import {
  EXCEPTION_COMPONENT,
  PAGE_NOT_FOUND_NAME,
  REDIRECT_NAME,
} from '@/router/constant'

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: PAGE_NOT_FOUND_NAME,
  component: EXCEPTION_COMPONENT,
  meta: {
    title: 'ErrorPage',
  },
}

export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  path: '/redirect/:path(.*)/:_redirect_type(.*)/:_origin_params(.*)?',
  name: REDIRECT_NAME,
  component: () => import('@/views/system/redirect.vue'),
  meta: {
    title: REDIRECT_NAME,
  },
}
