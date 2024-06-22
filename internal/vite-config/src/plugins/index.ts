import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { type PluginOption } from 'vite'
import DevTools from 'vite-plugin-vue-devtools'

import { createAppConfigPlugin } from './appConfig'
import { configCompressPlugin } from './compress'
import { configHtmlPlugin } from './html'
import { configMockPlugin } from './mock'
import { configVisualizerConfig } from './visualizer'

interface Options {
  isBuild: boolean
  root: string
  compress: string
  enableMock?: boolean
  enableAnalyze?: boolean
}

async function createPlugins({
  isBuild,
  root,
  enableMock,
  compress,
  enableAnalyze,
}: Options) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx()]

  const appConfigPlugin = await createAppConfigPlugin({ root, isBuild })
  vitePlugins.push(appConfigPlugin, DevTools(), configHtmlPlugin({ isBuild }))

  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin({
        compress,
      })
    )
  }

  // rollup-plugin-visualizer
  if (enableAnalyze) {
    vitePlugins.push(configVisualizerConfig())
  }

  // vite-plugin-mock
  if (enableMock) {
    vitePlugins.push(configMockPlugin({ isBuild }))
  }

  return vitePlugins
}

export { createPlugins }
