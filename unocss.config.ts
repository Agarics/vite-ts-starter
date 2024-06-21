import { resolve } from 'path'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

// loader helpers
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

// icons path
const iconsPath = resolve(__dirname, 'src/assets/icons')

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetRemToPx({
      baseFontSize: 4,
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        custom: FileSystemIconLoader(iconsPath),
      },
    }),
  ],
})
