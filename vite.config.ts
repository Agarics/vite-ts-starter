import { defineApplicationConfig } from '@agarics/vite-config'

export default defineApplicationConfig({
  overrides: {
    server: {
      open: true, // 项目启动后，自动打开
    },
  },
})
