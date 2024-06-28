import { createApp } from 'vue'
import 'virtual:uno.css'
import '@/styles/index.less'
import App from './App.vue'

import { setupStore } from '@/store'
import { router, setupRouter } from '@/router'
import { setupRouterGuard } from '@/router/guard'
import { setupGlobDirectives } from '@/directives'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)
  setupRouterGuard(router)

  setupGlobDirectives(app)

  await router.isReady()

  app.mount('#app')
}

bootstrap()
