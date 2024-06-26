import { resolve } from 'path'
import { type UserConfig, defineConfig, loadEnv, mergeConfig } from 'vite'

import dayjs from 'dayjs'
import { readPackageJSON } from 'pkg-types'

import { createPlugins } from '../plugins'
import { commonConfig } from './common'

interface DefineOptions {
  overrides?: UserConfig
  options?: {
    //
  }
}

function defineApplicationConfig(defineOptions: DefineOptions = {}) {
  const { overrides = {} } = defineOptions

  return defineConfig(async ({ command, mode }) => {
    const root = process.cwd()
    const isBuild = command === 'build'
    const {
      VITE_PUBLIC_PATH,
      VITE_USE_MOCK,
      VITE_BUILD_COMPRESS,
      VITE_ENABLE_ANALYZE,
    } = loadEnv(mode, root)

    const defineData = await createDefineData(root)
    const plugins = await createPlugins({
      isBuild,
      root,
      enableAnalyze: VITE_ENABLE_ANALYZE === 'true',
      enableMock: VITE_USE_MOCK === 'true',
      compress: VITE_BUILD_COMPRESS,
    })

    const pathResolve = (pathname: string) => resolve(root, '.', pathname)

    const applicationConfig: UserConfig = {
      base: VITE_PUBLIC_PATH,
      resolve: {
        alias: [
          {
            find: 'vue-i18n',
            replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
          },
          // @/xxxx => src/xxxx
          {
            find: /@\//,
            replacement: `${pathResolve('src')}/`,
          },
          // #/xxxx => types/xxxx
          {
            find: /#\//,
            replacement: `${pathResolve('types')}/`,
          },
        ],
      },
      define: defineData,
      build: {
        target: 'es2015',
        cssTarget: 'chrome80',
        rollupOptions: {
          output: {
            // 入口文件名
            entryFileNames: 'assets/entry/[name]-[hash].js',
            manualChunks: {
              vue: ['vue', 'pinia', 'vue-router'],
            },
          },
        },
      },
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
          },
        },
      },
      plugins,
    }

    const mergedConfig = mergeConfig(commonConfig(mode), applicationConfig)

    return mergeConfig(mergedConfig, overrides)
  })
}

async function createDefineData(root: string) {
  try {
    const pkgJson = await readPackageJSON(root)
    const { dependencies, devDependencies, name, version } = pkgJson

    const __APP_INFO__ = {
      pkg: { dependencies, devDependencies, name, version },
      lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    }
    return {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    }
  } catch {
    return {}
  }
}

export { defineApplicationConfig }
