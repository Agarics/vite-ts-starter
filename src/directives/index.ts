/**
 * Configure and register global directives
 */
import { setupEllipsisDirective } from './ellipsis'
import type { App } from 'vue'

export function setupGlobDirectives(app: App) {
  setupEllipsisDirective(app)
}
