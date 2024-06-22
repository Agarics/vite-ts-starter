import nProgress from 'nprogress'
import type { Router } from 'vue-router'

// Don't change the order of creation
export function setupRouterGuard(router: Router) {
  createProgressGuard(router)
}

export function createProgressGuard(router: Router) {
  nProgress.configure({ easing: 'ease', speed: 500 })
  router.beforeEach(async (to) => {
    if (to.meta.loaded) {
      return true
    }
    nProgress.start()
    return true
  })

  router.afterEach(async () => {
    nProgress.done()
    return true
  })
}
